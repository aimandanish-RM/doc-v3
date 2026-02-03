import React, { useState, useEffect } from "react";
import { getToken, setToken } from "../../utils/auth";
import { generateCurl, generateFetch } from "../../utils/apiExamples";

type Preset = {
  label: string;
  headers?: Record<string, string>;
  body?: string;
};

type UrlConfig =
  | string
  | {
      sandbox: string;
      prod: string;
    };

type Props = {
  method: string;
  title?: string;
  url: UrlConfig;
  headers?: Record<string, string>;
  body?: string;
  presets?: Preset[];
};

export default function ApiPlayground(props: Props) {
  const [env, setEnv] = useState<"sandbox" | "prod">("sandbox");
  const [prodConfirmed, setProdConfirmed] = useState(false);

  useEffect(() => {
    setProdConfirmed(false);
  }, [env]);

  const resolvedUrl =
    typeof props.url === "string" ? props.url : props.url[env];

  const [token, setTokenState] = useState<string>(() => getToken() ?? "");
  const [headers, setHeaders] = useState<Record<string, string>>(
    props.headers ?? {}
  );
  const [body, setBody] = useState(props.body ?? "");
  const [response, setResponse] = useState<any>(null);
  const [status, setStatus] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [headerError, setHeaderError] = useState<string | null>(null);

  const [selectedPreset, setSelectedPreset] = useState(0);
  const [activeTab, setActiveTab] = useState<
    "playground" | "curl" | "fetch"
  >("playground");

  useEffect(() => {
    if (!props.presets?.length) return;

    const preset = props.presets[selectedPreset];
    if (preset.headers) setHeaders(preset.headers);
    if (preset.body) setBody(preset.body);
  }, [selectedPreset, props.presets]);

  const send = async () => {
    setLoading(true);
    setResponse(null);
    setStatus(null);

    try {
      const res = await fetch(
  "https://rm-api-proxy.aiman-danish.workers.dev",
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
      body: props.method !== "GET" ? body : undefined,
    }),
  }
);


      setStatus(res.status);
      const data = await res.json();
      setResponse(data);
    } catch (err: any) {
      setResponse({ error: true, message: err.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="api-playground">
      <header className="api-header">
        <strong>{props.method}</strong>
        <span className="api-url">{resolvedUrl}</span>
      </header>

      {typeof props.url !== "string" && (
        <section>
          <strong>Environment</strong>
          <div>
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
          </div>
        </section>
      )}

      {env === "prod" && (
        <section style={{ border: "1px solid red", padding: 8 }}>
          <p style={{ color: "red", fontWeight: "bold" }}>
            ⚠ This will send a REAL production request
          </p>
          <label>
            <input
              type="checkbox"
              checked={prodConfirmed}
              onChange={(e) => setProdConfirmed(e.target.checked)}
            />
            I understand this affects real data
          </label>
        </section>
      )}

      <div className="api-tabs">
        {["playground", "curl", "fetch"].map((tab) => (
          <button
            key={tab}
            className={`api-tab ${activeTab === tab ? "active" : ""}`}
            onClick={() => setActiveTab(tab as any)}
          >
            {tab.toUpperCase()}
          </button>
        ))}
      </div>

      {activeTab === "playground" && (
        <>
          {props.presets && props.presets.length > 0 && (
            <section>
              <h4>Examples</h4>
              <select
                value={selectedPreset}
                onChange={(e) => setSelectedPreset(Number(e.target.value))}
              >
                {props.presets.map((p, i) => (
                  <option key={i} value={i}>
                    {p.label}
                  </option>
                ))}
              </select>
            </section>
          )}

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
              <textarea
                value={body}
                onChange={(e) => setBody(e.target.value)}
              />
            </section>
          )}

          <button
            onClick={send}
            disabled={
              loading ||
              !!headerError ||
              (env === "prod" && !prodConfirmed)
            }
          >
            {loading ? "Sending..." : "▶ Send Request"}
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
            body,
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
            body,
            token,
          })}
        </pre>
      )}
    </div>
  );
}
