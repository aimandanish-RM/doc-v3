import React, { useState, useEffect } from "react";
import { getToken, setToken } from "../../utils/auth";
import { generateCurl, generateFetch } from "../../utils/apiExamples";

/* ================= TYPES ================= */

type Preset = {
  label: string;
  headers?: Record<string, any>;
  body?: any;
};

type UrlConfig =
  | string
  | {
      sandbox: string;
      prod: string;
    };

type BodyType = "json" | "multipart";

type BodySchema =
  | string
  | {
      type?: string;
      example?: string;
    };

type Props = {
  method: string;
  title?: string;
  url?: UrlConfig;
  headers?: Record<string, any>;
  body?: BodySchema;
  bodyType?: BodyType;
  presets?: Preset[];
};

/* ================= HELPERS ================= */

const sanitizeHeaders = (h?: Record<string, any>) => {
  if (!h) return {};
  return Object.fromEntries(
    Object.entries(h).map(([k, v]) => [
      k,
      typeof v === "string" ? v : "",
    ])
  );
};

const extractBody = (body?: BodySchema): string => {
  if (!body) return "";
  if (typeof body === "string") return body;
  if (typeof body === "object" && body.example) return body.example;
  return "";
};

/* ================= COMPONENT ================= */

export default function ApiPlayground(props: Props) {
  if (!props?.url) return null;

  const bodyType: BodyType = props.bodyType ?? "json";

  const [env, setEnv] = useState<"sandbox" | "prod">("sandbox");
  const [prodConfirmed, setProdConfirmed] = useState(false);

  useEffect(() => {
    setProdConfirmed(false);
  }, [env]);

  const resolvedUrl =
    typeof props.url === "string" ? props.url : props.url[env];

  const [token, setTokenState] = useState(() => getToken() ?? "");
  const [headers, setHeaders] = useState<Record<string, string>>(
    sanitizeHeaders(props.headers)
  );
  const [body, setBody] = useState<string>(() => extractBody(props.body));
  const [files, setFiles] = useState<Record<string, File>>({});
  const [response, setResponse] = useState<any>(null);
  const [status, setStatus] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [headerError, setHeaderError] = useState<string | null>(null);

  const [selectedPreset, setSelectedPreset] = useState(0);
  const [activeTab, setActiveTab] = useState<
    "playground" | "curl" | "fetch"
  >("playground");

  /* ===== PRESETS ===== */

  useEffect(() => {
    if (!props.presets?.length) return;
    const preset = props.presets[selectedPreset];
    if (preset.headers) setHeaders(sanitizeHeaders(preset.headers));
    if (preset.body) setBody(extractBody(preset.body));
  }, [selectedPreset, props.presets]);

  /* ===== SEND REQUEST ===== */

  const send = async () => {
    setLoading(true);
    setResponse(null);
    setStatus(null);

    try {
      let requestBody: any = undefined;
      let requestHeaders: Record<string, string> = { ...headers };

      if (props.method !== "GET") {
        if (bodyType === "json") {
          requestBody = body;
          requestHeaders["Content-Type"] = "application/json";
        }

        if (bodyType === "multipart") {
          const form = new FormData();
          Object.entries(files).forEach(([k, f]) => form.append(k, f));
          requestBody = form;
          delete requestHeaders["Content-Type"];
        }
      }

      const res = await fetch(
        "https://rm-api-proxy.aiman-danish.workers.dev",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            url: resolvedUrl,
            method: props.method,
            headers: {
              ...requestHeaders,
              ...(token ? { Authorization: `Bearer ${token}` } : {}),
            },
            body: requestBody,
          }),
        }
      );

      setStatus(res.status);
      setResponse(await res.json());
    } catch (err: any) {
      setResponse({ error: true, message: err.message });
    } finally {
      setLoading(false);
    }
  };

  /* ================= RENDER ================= */

  return (
    <div className="api-playground">
      <header className="api-header">
        <strong>{props.method}</strong>
        <span className="api-url">{resolvedUrl}</span>
      </header>

      {typeof props.url !== "string" && (
        <section>
          <strong>Environment</strong>
          <label>
            <input
              type="radio"
              checked={env === "sandbox"}
              onChange={() => setEnv("sandbox")}
            />
            Sandbox
          </label>
          <label style={{ marginLeft: 12 }}>
            <input
              type="radio"
              checked={env === "prod"}
              onChange={() => setEnv("prod")}
            />
            Production
          </label>
        </section>
      )}

      {env === "prod" && (
        <section style={{ border: "1px solid red", padding: 8 }}>
          <strong style={{ color: "red" }}>
            ⚠ REAL production request
          </strong>
          <label>
            <input
              type="checkbox"
              checked={prodConfirmed}
              onChange={(e) => setProdConfirmed(e.target.checked)}
            />
            I understand
          </label>
        </section>
      )}

      <div className="api-tabs">
        {["playground", "curl", "fetch"].map((t) => (
          <button
            key={t}
            className={activeTab === t ? "active" : ""}
            onClick={() => setActiveTab(t as any)}
          >
            {t.toUpperCase()}
          </button>
        ))}
      </div>

      {activeTab === "playground" && (
        <>
          <section>
            <h4>Access Token</h4>
            <input
              type="password"
              value={token}
              onChange={(e) => {
                setTokenState(e.target.value);
                setToken(e.target.value);
              }}
            />
          </section>

          <section>
            <h4>Headers</h4>
            <textarea
              value={JSON.stringify(headers, null, 2)}
              onChange={(e) => {
                try {
                  setHeaders(JSON.parse(e.target.value));
                  setHeaderError(null);
                } catch {
                  setHeaderError("Invalid JSON");
                }
              }}
            />
            {headerError && <p>{headerError}</p>}
          </section>

          {props.method !== "GET" && (
            <section>
              <h4>Body</h4>
              {bodyType === "json" && (
                <textarea value={body} onChange={(e) => setBody(e.target.value)} />
              )}
              {bodyType === "multipart" && (
                <input
                  type="file"
                  onChange={(e) =>
                    e.target.files?.[0] &&
                    setFiles({ file: e.target.files[0] })
                  }
                />
              )}
            </section>
          )}

          <button
            onClick={send}
            disabled={loading || !!headerError || (env === "prod" && !prodConfirmed)}
          >
            {loading ? "Sending..." : "▶ Send Request"}
          </button>

          {status && <pre>{JSON.stringify(response, null, 2)}</pre>}
        </>
      )}

      {activeTab === "curl" && (
        <pre>{generateCurl({ method: props.method, url: resolvedUrl, headers, body, token })}</pre>
      )}

      {activeTab === "fetch" && (
        <pre>{generateFetch({ method: props.method, url: resolvedUrl, headers, body, token })}</pre>
      )}
    </div>
  );
}
