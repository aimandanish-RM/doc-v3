import React, { useEffect, useMemo, useState } from "react";
import { getToken, setToken } from "../../utils/auth";
import { generateCurl, generateFetch } from "../../utils/apiExamples";
import styles from "./styles.module.css";

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

const highlightJson = (json: string) => {
  return json
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(
      /("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*")\s*:/g,
      `<span class="${styles.jsonKey}">$1</span>:`
    )
    .replace(
      /:\s*("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*")/g,
      `: <span class="${styles.jsonValue}">$1</span>`
    )
    .replace(
      /:\s*(\d+|true|false|null)/g,
      `: <span class="${styles.jsonValue}">$1</span>`
    );
};


/* ================= COMPONENT ================= */

export default function ApiPlayground(props: Props) {
  if (!props.url) return null;

  const bodyType = props.bodyType ?? "json";

  /* ================= ENV ================= */

  const [env, setEnv] = useState<"sandbox" | "prod">("sandbox");

  const resolvedUrl =
    typeof props.url === "string" ? props.url : props.url[env];

  /* ================= TOKEN ================= */

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

  /* ================= JSON BODY ================= */

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

  const [jsonBody, setJsonBody] = useState(initialJsonBody);

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
  }, [bodyType, props.body]);

  /* ================= STATE ================= */

  const [response, setResponse] = useState<any>(null);
  const [status, setStatus] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] =
    useState<"playground" | "code">("playground");
  const [codeLang, setCodeLang] = useState<"curl" | "fetch">("curl");

  /* ================= SEND ================= */

  const send = async () => {
    setLoading(true);
    setResponse(null);
    setStatus(null);

    try {
      let res: Response;

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
      } else {
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

  /* ================= CODE ================= */

  const codeBody = bodyType === "json" ? jsonBody : "[form-data]";

  const code = useMemo(() => {
    return codeLang === "curl"
      ? generateCurl({
          method: props.method,
          url: resolvedUrl,
          headers,
          body: codeBody,
          token,
        })
      : generateFetch({
          method: props.method,
          url: resolvedUrl,
          headers,
          body: codeBody,
          token,
        });
  }, [codeLang, props.method, resolvedUrl, headers, codeBody, token]);

  const copy = (value: string) => navigator.clipboard.writeText(value);

  const methodClass = styles[props.method.toLowerCase()];

  /* ================= RENDER ================= */

  return (
    <div className={styles.wrapper}>
      {/* HEADER */}
      <div className={styles.header}>
        <span className={`${styles.method} ${methodClass}`}>
          {props.method}
        </span>

        <span className={styles.url}>{resolvedUrl}</span>

        <div className={styles.envToggle}>
          <button
            className={`${styles.envBtn} ${
              env === "sandbox" ? styles.envActiveSandbox : ""
            }`}
            onClick={() => setEnv("sandbox")}
          >
            Sandbox
          </button>
          <button
            className={`${styles.envBtn} ${
              env === "prod" ? styles.envActiveProd : ""
            }`}
            onClick={() => setEnv("prod")}
          >
            Prod
          </button>
        </div>
      </div>

      {/* TABS */}
      <div className={styles.tabs}>
        <button
          className={`${styles.tab} ${
            activeTab === "playground" ? styles.tabActive : ""
          }`}
          onClick={() => setActiveTab("playground")}
        >
          Playground
        </button>

        <select
          className={styles.select}
          value={codeLang}
          onChange={(e) => {
            setActiveTab("code");
            setCodeLang(e.target.value as any);
          }}
        >
          <option value="curl">cURL</option>
          <option value="fetch">Fetch</option>
        </select>
      </div>

      {/* PLAYGROUND */}
      {activeTab === "playground" && (
        <>
          <label className={styles.label}>Access Token</label>
          <input
            className={styles.input}
            type="password"
            value={token}
            onChange={(e) => {
              setTokenState(e.target.value);
              setToken(e.target.value);
            }}
          />

          <div className={styles.blockHeader}>
            <label className={styles.label}>Headers</label>
            <button onClick={() => copy(JSON.stringify(headers, null, 2))}>
              Copy
            </button>
          </div>

        <pre
  className={`${styles.editor}`}
  contentEditable
  suppressContentEditableWarning
  onBlur={(e) => {
    try {
      setHeaders(JSON.parse(e.currentTarget.innerText));
    } catch {
      // silently ignore invalid JSON while typing
    }
  }}
  dangerouslySetInnerHTML={{
    __html: highlightJson(JSON.stringify(headers, null, 2)),
  }}
/>


          {props.method !== "GET" && (
            <>
              <div className={styles.blockHeader}>
                <label className={styles.label}>Body</label>
                <button onClick={() => copy(jsonBody)}>Copy</button>
              </div>

            <pre
  className={`${styles.editor}`}
  contentEditable
  suppressContentEditableWarning
  onBlur={(e) => setJsonBody(e.currentTarget.innerText)}
  dangerouslySetInnerHTML={{
    __html: highlightJson(jsonBody),
  }}
/>

            </>
          )}

          <button
            className={styles.send}
            onClick={send}
            disabled={loading}
          >
            ▶ Send Request
          </button>

          {status && (
            <pre className={styles.response}>
              {JSON.stringify(response, null, 2)}
            </pre>
          )}
        </>
      )}

      {/* CODE */}
      {activeTab === "code" && <pre className={styles.code}>{code}</pre>}
    </div>
  );
}
