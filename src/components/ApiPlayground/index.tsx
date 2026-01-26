import React, { useState, useEffect } from "react";
import { getToken, setToken } from "../../utils/auth";
import { generateCurl, generateFetch } from "../../utils/apiExamples";

type Preset = {
  label: string;
  headers?: Record<string, string>;
  body?: string;
};

type Props = {
  method: string;
  title?: string;
  url: string;
  headers?: Record<string, string>;
  body?: string;
  presets?: Preset[];
};

export default function ApiPlayground(props: Props) {
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

  // ✅ APPLY PRESET
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
      const res = await fetch("http://localhost:5050/proxy", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          url: props.url,
          method: props.method,
          headers: {
            ...headers,
            ...(token ? { Authorization: `Bearer ${token}` } : {}),
          },
          body: props.method !== "GET" ? body : undefined,
        }),
      });

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
      {/* ✅ HEADER */}
      <header className="api-header">
        <strong>{props.method}</strong>
        <span className="api-url">{props.url}</span>
      </header>

      {/* ✅ TABS (STEP 7) */}
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

      {/* ================= PLAYGROUND ================= */}
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

          <button onClick={send} disabled={loading || !!headerError}>
            {loading ? "Sending..." : "▶ Send Request"}
          </button>

          {status && (
            <pre>{JSON.stringify(response, null, 2)}</pre>
          )}
        </>
      )}

      {/* ================= CURL ================= */}
      {activeTab === "curl" && (
        <pre>
          {generateCurl({
            method: props.method,
            url: props.url,
            headers,
            body,
            token,
          })}
        </pre>
      )}

      {/* ================= FETCH ================= */}
      {activeTab === "fetch" && (
        <pre>
          {generateFetch({
            method: props.method,
            url: props.url,
            headers,
            body,
            token,
          })}
        </pre>
      )}
    </div>
  );
}
