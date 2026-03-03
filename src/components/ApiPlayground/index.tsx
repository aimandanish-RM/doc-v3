import React, { useState, useMemo, useEffect } from "react";
import {
  getToken,
  setTokenWithExpiry,
  isTokenExpired,
  tokenExpiryLabel,
  clearToken,
} from "../../utils/auth";
import {
  getPrivateKey,
  setPrivateKey,
  hasPrivateKey,
  clearPrivateKey,
} from "../../utils/privateKey";
import styles from "./styles.module.css";

/* ================= TYPES ================= */

type UrlConfig =
  | string
  | { sandbox: string; prod: string };

type Props = {
  method: string;
  title?: string;
  url?: UrlConfig;
  body?: string | { type: "json"; example?: string };
  requiresSignature?: boolean;
  requiresAccessToken?: boolean;
};

/* ─── Token status derived type ─────────────────────────────────────── */
type TokenStatus = "missing" | "expired" | "active";

function getTokenStatus(): TokenStatus {
  const token = getToken();
  if (!token) return "missing";
  if (isTokenExpired()) return "expired";
  return "active";
}

/* ================= JSON HIGHLIGHT ================= */

const highlightJson = (json: string) =>
  json
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(
      /("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*")\s*:/g,
      `<span class="${styles.jsonKey}">$1</span>:`
    )
    .replace(
      /:\s*("(\\u[a-zA-Z0-9]{4}|\\[^\\"])*")/g,
      `: <span class="${styles.jsonValue}">$1</span>`
    )
    .replace(
      /:\s*(\d+|true|false|null)/g,
      `: <span class="${styles.jsonValue}">$1</span>`
    );

/* ================= DEEP SORT ================= */

const sortObject = (obj: any): any => {
  if (Array.isArray(obj)) return obj.map(sortObject);
  if (obj !== null && typeof obj === "object") {
    return Object.keys(obj)
      .sort()
      .reduce((acc: any, key) => {
        acc[key] = sortObject(obj[key]);
        return acc;
      }, {});
  }
  return obj;
};

/* ================= TOKEN STATUS BANNER ================= */

function TokenBanner({
  status,
  onClear,
}: {
  status: TokenStatus;
  onClear: () => void;
}) {
  if (status === "active") {
    const label = tokenExpiryLabel();
    return (
      <div className={`${styles.banner} ${styles.bannerSuccess}`}>
        <span className={styles.bannerDot} />
        <span>
          Access token active
          {label ? ` · expires in ${label}` : ""}
        </span>
        <button className={styles.bannerAction} onClick={onClear}>
          Clear
        </button>
      </div>
    );
  }

  if (status === "expired") {
    return (
      <div className={`${styles.banner} ${styles.bannerError}`}>
        <span className={styles.bannerDot} />
        <span>
          Access token <strong>expired</strong> — re-run the{" "}
          <em>Client Credentials</em> endpoint to refresh it
        </span>
        <button className={styles.bannerAction} onClick={onClear}>
          Clear
        </button>
      </div>
    );
  }

  return (
    <div className={`${styles.banner} ${styles.bannerWarning}`}>
      <span className={styles.bannerDot} />
      <span>
        No access token — run the <em>Client Credentials</em> endpoint first
      </span>
    </div>
  );
}

/* ================= PRIVATE KEY BANNER ================= */

function PrivateKeyBanner({
  loaded,
  onLoad,
  onClear,
}: {
  loaded: boolean;
  onLoad: (key: string) => void;
  onClear: () => void;
}) {
  const [open, setOpen] = useState(false);
  const [draft, setDraft] = useState("");

  if (loaded) {
    return (
      <div className={`${styles.banner} ${styles.bannerInfo}`}>
        <span className={styles.bannerDot} />
        <span>Private key loaded · session only (cleared on refresh)</span>
        <button
          className={styles.bannerAction}
          onClick={() => {
            onClear();
          }}
        >
          Remove
        </button>
      </div>
    );
  }

  return (
    <div className={styles.keyPromptWrapper}>
      <div className={`${styles.banner} ${styles.bannerNeutral}`}>
        <span className={styles.bannerDot} />
        <span>Private key required — paste it once to continue</span>
        <button
          className={styles.bannerAction}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Cancel" : "Paste key ↓"}
        </button>
      </div>

      {open && (
        <div className={styles.keyPromptBody}>
          <label className={styles.label}>
            Private Key{" "}
            <span className={styles.labelHint}>(stays in memory only)</span>
          </label>
          <textarea
            className={`${styles.textarea} ${styles.keyTextarea}`}
            placeholder="-----BEGIN PRIVATE KEY-----&#10;...&#10;-----END PRIVATE KEY-----"
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
          />
          <button
            className={styles.keySubmit}
            disabled={!draft.trim()}
            onClick={() => {
              onLoad(draft.trim());
              setOpen(false);
              setDraft("");
            }}
          >
            Load key for this session
          </button>
        </div>
      )}
    </div>
  );
}

/* ================= MAIN COMPONENT ================= */

export default function ApiPlayground(props: Props) {
  if (!props.url) return null;

  const requiresSignature = props.requiresSignature ?? true;
  const requiresAccessToken = props.requiresAccessToken ?? true;
  const isOAuth = !requiresSignature && !requiresAccessToken;

  /* ── ENV SWITCH ── */
  const hasEnv = typeof props.url !== "string";
  const [env, setEnv] = useState<"sandbox" | "prod">("sandbox");
  const baseUrl =
    typeof props.url === "string" ? props.url : props.url[env];

  /* ── URL PARAMS ── */
  const paramKeys = useMemo(
    () => Array.from(baseUrl.matchAll(/{([^}]+)}/g)).map((m) => m[1]),
    [baseUrl]
  );
  const [params, setParams] = useState<Record<string, string>>({});
  const resolvedUrl = useMemo(
    () =>
      paramKeys.reduce(
        (url, key) => url.replace(`{${key}}`, params[key] ?? key),
        baseUrl
      ),
    [baseUrl, paramKeys, params]
  );

  /* ── AUTH STATE ── */
  const [tokenStatus, setTokenStatus] = useState<TokenStatus>(getTokenStatus);
  const [keyLoaded, setKeyLoaded] = useState(hasPrivateKey);

  // Re-check token status whenever we come back into focus
  useEffect(() => {
    const check = () => setTokenStatus(getTokenStatus());
    window.addEventListener("focus", check);
    return () => window.removeEventListener("focus", check);
  }, []);

  const handleClearToken = () => {
    clearToken();
    setTokenStatus("missing");
  };

  const handleLoadKey = (key: string) => {
    setPrivateKey(key);
    setKeyLoaded(true);
  };

  const handleClearKey = () => {
    clearPrivateKey();
    setKeyLoaded(false);
  };

  /* ── FORM STATE ── */
  const initialHeaders = isOAuth
    ? { Authorization: "Basic base64(clientId:clientSecret)" }
    : {};

  const [headers, setHeaders] =
    useState<Record<string, string>>(initialHeaders);

  const [jsonBody, setJsonBody] = useState(
    typeof props.body === "string"
      ? props.body
      : props.body?.type === "json"
      ? props.body.example ?? "{}"
      : "{}"
  );

  const [response, setResponse] = useState<any>(null);
  const [status, setStatus] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);

  /* ── SIGNATURE ── */
  const generateNonce = () => crypto.randomUUID().replace(/-/g, "");
  const generateTimestamp = () => Math.floor(Date.now() / 1000).toString();

  const importPrivateKey = async (pem: string) => {
    const cleaned = pem
      .replace(/-----BEGIN.*?-----/, "")
      .replace(/-----END.*?-----/, "")
      .replace(/\s/g, "");
    const binaryDer = window.atob(cleaned);
    const binaryArray = Uint8Array.from(binaryDer, (c) => c.charCodeAt(0));
    return crypto.subtle.importKey(
      "pkcs8",
      binaryArray.buffer,
      { name: "RSASSA-PKCS1-v1_5", hash: "SHA-256" },
      false,
      ["sign"]
    );
  };

  const signRSA = async (
    privateKeyPem: string,
    method: string,
    fullUrl: string,
    body: any
  ) => {
    const nonce = generateNonce();
    const timestamp = generateTimestamp();

    let base64Data = "";
    if (body && Object.keys(body).length > 0) {
      base64Data = btoa(JSON.stringify(sortObject(body)));
    }

    let plainText = "";
    if (base64Data) plainText += `data=${base64Data}&`;
    plainText +=
      `method=${method.toLowerCase()}` +
      `&nonceStr=${nonce}` +
      `&requestUrl=${fullUrl}` +
      `&signType=sha256` +
      `&timestamp=${timestamp}`;

    const key = await importPrivateKey(privateKeyPem);
    const signatureBuffer = await crypto.subtle.sign(
      "RSASSA-PKCS1-v1_5",
      key,
      new TextEncoder().encode(plainText)
    );
    const signature = btoa(
      String.fromCharCode(...new Uint8Array(signatureBuffer))
    );
    return { signature, nonce, timestamp };
  };

  /* ── SEND ── */
  const send = async () => {
    // Guard: token required but missing/expired
    if (requiresAccessToken && tokenStatus !== "active") {
      setResponse({
        _error:
          tokenStatus === "expired"
            ? "Access token expired. Re-run Client Credentials to get a new one."
            : "No access token. Run Client Credentials first.",
      });
      setStatus(401);
      return;
    }

    // Guard: signature required but no key loaded
    if (requiresSignature && !hasPrivateKey()) {
      setResponse({
        _error: "Private key not loaded. Paste your private key above.",
      });
      setStatus(400);
      return;
    }

    try {
      setLoading(true);
      setResponse(null);
      setStatus(null);

      let requestBody: any;
      if (!["GET", "DELETE"].includes(props.method)) {
        requestBody = JSON.parse(jsonBody || "{}");
      }

      const finalHeaders: Record<string, string> = { ...headers };

      // Always set Content-Type for any request that has a body
      if (requestBody !== undefined) {
        finalHeaders["Content-Type"] = "application/json";
      }

      if (!isOAuth) {
        if (requiresAccessToken) {
          finalHeaders["Authorization"] = `Bearer ${getToken()}`;
        }
        if (requiresSignature) {
          const { signature, nonce, timestamp } = await signRSA(
            getPrivateKey(),
            props.method,
            resolvedUrl,
            requestBody
          );
          finalHeaders["X-Timestamp"] = timestamp;
          finalHeaders["X-Nonce-Str"] = nonce;
          finalHeaders["X-Signature"] = `sha256 ${signature}`;
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
            headers: finalHeaders,
            body: requestBody,
          }),
        }
      );

      const text = await res.text();
      setStatus(res.status);

      let parsed: any;
      try {
        parsed = JSON.parse(text);
      } catch {
        parsed = text;
      }

      setResponse(parsed);

      /* ── Auto-store token from OAuth response ── */
      if (
        isOAuth &&
        res.ok &&
        parsed?.accessToken &&
        typeof parsed.expiresIn === "number"
      ) {
        setTokenWithExpiry(parsed.accessToken, parsed.expiresIn);
        setTokenStatus("active");
      }
    } catch (err: any) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  /* ── READINESS CHECK ── */
  const notReady =
    (requiresAccessToken && tokenStatus !== "active") ||
    (requiresSignature && !keyLoaded);

  /* ================= RENDER ================= */

  return (
    <div className={styles.wrapper}>

      {/* ENV SWITCH */}
      {hasEnv && (
        <div className={styles.envSwitch}>
          <button
            onClick={() => setEnv("sandbox")}
            className={env === "sandbox" ? styles.activeEnv : ""}
          >
            SANDBOX
          </button>
          <button
            onClick={() => setEnv("prod")}
            className={env === "prod" ? styles.activeEnv : ""}
          >
            PROD
          </button>
        </div>
      )}

      {/* URL */}
      <div className={styles.header}>
        <span
          className={`${styles.method} ${styles[props.method.toLowerCase()]}`}
        >
          {props.method}
        </span>
        <span className={styles.url}>
          {baseUrl.split(/({[^}]+})/g).map((part, i) => {
            const match = part.match(/{([^}]+)}/);
            if (!match) return <span key={i}>{part}</span>;
            const key = match[1];
            return (
              <span
                key={i}
                contentEditable
                suppressContentEditableWarning
                className={styles.urlParam}
                onBlur={(e) =>
                  setParams({ ...params, [key]: e.currentTarget.innerText.trim() })
                }
              >
                {params[key] ?? key}
              </span>
            );
          })}
        </span>
      </div>

      {/* AUTH STATUS BANNERS */}
      {requiresAccessToken && (
        <TokenBanner status={tokenStatus} onClear={handleClearToken} />
      )}
      {requiresSignature && (
        <PrivateKeyBanner
          loaded={keyLoaded}
          onLoad={handleLoadKey}
          onClear={handleClearKey}
        />
      )}

      {/* HEADERS */}
      <div className={styles.blockHeader}>
        <label className={styles.label}>Headers</label>
      </div>
      <pre
        className={styles.editor}
        contentEditable
        suppressContentEditableWarning
        onBlur={(e) => {
          try {
            setHeaders(JSON.parse(e.currentTarget.innerText));
          } catch {}
        }}
        dangerouslySetInnerHTML={{
          __html: highlightJson(JSON.stringify(headers, null, 2)),
        }}
      />

      {/* BODY */}
      {props.method !== "GET" && (
        <>
          <div className={styles.blockHeader}>
            <label className={styles.label}>Body</label>
          </div>
          <pre
            className={styles.editor}
            contentEditable
            suppressContentEditableWarning
            onBlur={(e) => setJsonBody(e.currentTarget.innerText)}
            dangerouslySetInnerHTML={{ __html: highlightJson(jsonBody) }}
          />
        </>
      )}

      {/* SEND */}
      <button
        className={`${styles.send} ${notReady ? styles.sendBlocked : ""}`}
        onClick={send}
        disabled={loading}
        title={
          notReady
            ? "Resolve the warnings above before sending"
            : undefined
        }
      >
        {loading ? "Sending…" : "▶ Send Request"}
      </button>

      {/* RESPONSE */}
      {status !== null && (
        <div>
          <div className={styles.statusLine}>
            <span
              className={
                status >= 200 && status < 300
                  ? styles.statusOk
                  : styles.statusErr
              }
            >
              {status}
            </span>
            {response?._error && (
              <span className={styles.statusHint}>{response._error}</span>
            )}
          </div>
          {!response?._error && (
            <pre className={styles.response}>
              {JSON.stringify(response, null, 2)}
            </pre>
          )}
        </div>
      )}
    </div>
  );
}