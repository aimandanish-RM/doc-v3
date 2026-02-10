import React, { useEffect, useState } from "react";
import { getToken, setToken } from "../../utils/auth";
import { generateCurl, generateFetch } from "../../utils/apiExamples";

/* ================= TYPES ================= */

type UrlConfig =
  | string
  | {
      sandbox: string;
      prod: string;
    };

type BodyField =
  | { type: "file" }
  | { type: "string"; example?: string };

type Props = {
  method: string;
  title?: string;
  url?: UrlConfig;
  headers?: Record<string, string>;
  body?:
    | string
    | {
        type: "json";
        example?: string;
      }
    | Record<string, BodyField>;
  bodyType?: "json" | "multipart";
};

/* ================= COMPONENT ================= */

export default function ApiPlayground(props: Props) {
  if (!props.url) return null;

  const bodyType = props.bodyType ?? "json";
  const [env] = useState<"sandbox" | "prod">("sandbox");
  const [token, setTokenState] = useState(getToken() ?? "");

  /* ================= HEADERS ================= */

  const normalizeHeaders = (h?: Record<string, any>) =>
    h
      ? Object.fromEntries(
          Object.entries(h).map(([k, v]) => [k, typeof v === "string" ? v : ""])
        )
      : {};

  const [headers, setHeaders] = useState<Record<string, string>>(
    normalizeHeaders(props.headers)
  );

  const safeHeaders = Object.fromEntries(
    Object.entries(headers).filter(
      ([k]) => k.toLowerCase() !== "content-type"
    )
  );

  /* ================= JSON BODY (FIXED) ================= */

  let initialJsonBody = "{}";

  if (typeof props.body === "string") {
    initialJsonBody = props.body;
  } else if (
    props.body &&
    typeof props.body === "object" &&
    "type" in props.body &&
    props.body.type === "json" &&
    typeof props.body.example === "string"
  ) {
    initialJsonBody = props.body.example;
  }

  const [jsonBody, setJsonBody] = useState<string>(initialJsonBody);

  /* ================= MULTIPART BODY ================= */

  const [multipart, setMultipart] = useState<Record<string, any>>({});

  useEffect(() => {
    if (bodyType !== "multipart") return;
    if (!props.body || typeof props.body !== "object") return;
    if ("type" in props.body) return;

    const defaults: Record<string, any> = {};

    Object.entries(props.body).forEach(([key, cfg]) => {
      if (cfg.type === "string" && cfg.example) {
        defaults[key] = cfg.example;
      }
    });

    setMultipart(defaults);
  }, []);

  /* ================= STATE ================= */

  const [response, setResponse] = useState<any>(null);
  const [status, setStatus] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] =
    useState<"playground" | "curl" | "fetch">("playground");

  const resolvedUrl =
    typeof props.url === "string" ? props.url : props.url[env];

  const exampleBody =
    bodyType === "json" ? jsonBody : "[form-data]";

  /* ================= SEND ================= */

  const send = async () => {
    setLoading(true);
    setResponse(null);
    setStatus(null);

    try {
      let res: Response;

      // ===== MULTIPART =====
      if (bodyType === "multipart") {
        const form = new FormData();
        Object.entries(multipart).forEach(([k, v]) => form.append(k, v));

        res = await fetch(
          "https://rm-api-proxy.aiman-danish.workers.dev/multipart",
          {
            method: "POST",
            headers: {
              "x-target-url": resolvedUrl,
              ...(token ? { Authorization: `Bearer ${token}` } : {}),
              ...safeHeaders,
            },
            body: form,
          }
        );
      }

      // ===== JSON / STRING =====
      else {
        res = await fetch(
          "https://rm-api-proxy.aiman-danish.workers.dev/json",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              url: resolvedUrl,
              method: props.method,
              headers: {
                ...headers,
                ...(token ? { Authorization: `Bearer ${token}` } : {}),
              },
              ...(props.method !== "GET" &&
                props.method !== "DELETE" && {
                  body: jsonBody,
                }),
            }),
          }
        );
      }

      setStatus(res.status);
      setResponse(await res.json());
    } catch (err: any) {
      setResponse({ error: true, message: err.message });
    } finally {
      setLoading(false);
    }
  };

  /* ================= MULTIPART INPUTS ================= */

  const renderMultipartInputs = () => {
    if (!props.body || typeof props.body !== "object") return null;
    if ("type" in props.body) return null;

    return Object.entries(props.body).map(([key, cfg]) =>
      cfg.type === "file" ? (
        <div key={key}>
          <label>{key}</label>
          <input
            type="file"
            onChange={(e) =>
              e.target.files?.[0] &&
              setMultipart((p) => ({ ...p, [key]: e.target.files![0] }))
            }
          />
        </div>
      ) : (
        <div key={key}>
          <label>{key}</label>
          <input
            type="text"
            defaultValue={cfg.example ?? ""}
            onChange={(e) =>
              setMultipart((p) => ({ ...p, [key]: e.target.value }))
            }
          />
        </div>
      )
    );
  };

  /* ================= RENDER ================= */

  return (
    <div className="api-playground">
      <header>
        <strong>{props.method}</strong>
        <span>{resolvedUrl}</span>
      </header>

      <div className="api-tabs">
        {["playground", "curl", "fetch"].map((t) => (
          <button
            key={t}
            onClick={() => setActiveTab(t as any)}
            className={activeTab === t ? "active" : ""}
          >
            {t.toUpperCase()}
          </button>
        ))}
      </div>

      {activeTab === "playground" && (
        <>
          <h4>Access Token</h4>
          <input
            type="password"
            value={token}
            onChange={(e) => {
              setTokenState(e.target.value);
              setToken(e.target.value);
            }}
          />

          <h4>Headers</h4>
          <textarea
            value={JSON.stringify(headers, null, 2)}
            onChange={(e) => setHeaders(JSON.parse(e.target.value))}
          />

          {props.method !== "GET" && (
            <>
              <h4>Body</h4>
              {bodyType === "json" && (
                <textarea
                  value={jsonBody}
                  onChange={(e) => setJsonBody(e.target.value)}
                />
              )}
              {bodyType === "multipart" && renderMultipartInputs()}
            </>
          )}

          <button onClick={send} disabled={loading}>
            ▶ Send Request
          </button>

          {status && <pre>{JSON.stringify(response, null, 2)}</pre>}
        </>
      )}

      {activeTab === "curl" && (
        <pre>
          {generateCurl({
            method: props.method,
            url: resolvedUrl,
            headers,
            body: exampleBody,
            token,
          })}
        </pre>
      )}

      {activeTab === "fetch" && (
        <pre>
          {generateFetch({
            method: props.method,
            url: resolvedUrl,
            headers,
            body: exampleBody,
            token,
          })}
        </pre>
      )}
    </div>
  );
}
