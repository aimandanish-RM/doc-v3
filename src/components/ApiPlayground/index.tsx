import React, { useState } from "react";

type Props = {
  method: string;
  title?: string;
  url: { prod: string; sandbox: string };
  headers?: Record<string, string>;
  body?: string;
  env?: "sandbox" | "prod";
};

export default function ApiPlayground(props: Props) {
  const [env, setEnv] = useState(props.env ?? "sandbox");
  const [headers, setHeaders] = useState(props.headers ?? {});
  const [body, setBody] = useState(props.body ?? "");
  const [response, setResponse] = useState<any>(null);
  const [status, setStatus] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [headerError, setHeaderError] = useState<string | null>(null);

  const send = async () => {
    setLoading(true);
    setResponse(null);
    setStatus(null);
    if (env === "prod") {
    const ok = window.confirm(
      "⚠️ You are about to send a request to PRODUCTION. Continue?"
    );
    if (!ok) return;
  }

    try {
      const res = await fetch("http://localhost:5050/proxy", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          url: props.url[env],
          method: props.method,
          headers,
          body: props.method !== "GET" ? body : undefined,

        }),
      });

      setStatus(res.status);

      const contentType = res.headers.get("content-type");
      let data: any;

      if (contentType?.includes("application/json")) {
        data = await res.json();
      } else {
        data = await res.text();
      }
      

      if (!res.ok) {
        setResponse({
          error: true,
          status: res.status,
          body: data,
        });
      } else {
        setResponse(data);
      }
    } catch (err: any) {
      setResponse({
        error: true,
        message: err.message || "Network error",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="api-playground">
      <header className="api-header">
        <div>
          <strong>{props.method}</strong>{" "}
          <span className="api-url">{props.url[env]}</span>
        </div>

        <button
          className="api-env-toggle"
          onClick={() => setEnv(env === "sandbox" ? "prod" : "sandbox")}
        >
          {env.toUpperCase()}
        </button>
      </header>

      <section>
        <h4>Headers</h4>
        <textarea
          value={JSON.stringify(headers, null, 2)}
          onChange={(e) => {
            try {
              const parsed = JSON.parse(e.target.value);
              setHeaders(parsed);
              setHeaderError(null);
            } catch {
              setHeaderError("Invalid JSON");
            }
          }}
        />
        {headerError && (
          <p className="api-error-text">{headerError}</p>
        )}
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
        className="api-send-btn"
        onClick={send}
        disabled={loading || !!headerError}
      >
        {loading ? "Sending..." : "▶ Send Request"}
      </button>

      {status !== null && (
        <details
          open
          className={`api-response api-response--${Math.floor(status / 100)}`}
        >
          <summary>
            Response
            <span className="api-status">HTTP {status}</span>
          </summary>
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </details>
      )}
    </div>
  );
}
