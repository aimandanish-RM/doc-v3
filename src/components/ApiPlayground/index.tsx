import React, { useState } from "react";
import { getToken, setToken } from "../../utils/auth";
import styles from "./styles.module.css";

/* ================= TYPES ================= */

type UrlConfig =
  | string
  | {
      sandbox: string;
      prod: string;
    };

type Props = {
  method: string;
  title?: string;
  url?: UrlConfig;
  body?: string | { type: "json"; example?: string };
  requiresSignature?: boolean;
  requiresAccessToken?: boolean;
};

/* ================= JSON HIGHLIGHT ================= */

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
      /:\s*("(\\u[a-zA-Z0-9]{4}|\\[^\\"])*")/g,
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

  const requiresSignature = props.requiresSignature ?? true;
  const requiresAccessToken = props.requiresAccessToken ?? true;
  const isOAuth = !requiresSignature && !requiresAccessToken;

  /* ================= ENV SWITCH ================= */

  const hasEnv =
    typeof props.url !== "string";

  const [env, setEnv] = useState<
    "sandbox" | "prod"
  >("sandbox");

  const baseUrl =
    typeof props.url === "string"
      ? props.url
      : props.url[env];

  /* ================= MULTI PARAM SUPPORT ================= */

  const paramKeys = Array.from(
    baseUrl.matchAll(/{([^}]+)}/g)
  ).map((m) => m[1]);

  const initialParams: Record<
    string,
    string
  > = {};

  paramKeys.forEach((key) => {
    initialParams[key] = key;
  });

  const [params, setParams] =
    useState(initialParams);

  const resolvedUrl = paramKeys.reduce(
    (url, key) =>
      url.replace(
        `{${key}}`,
        params[key] ?? key
      ),
    baseUrl
  );

  /* ================= STATE ================= */

  const [tokenState, setTokenState] =
    useState(getToken() ?? "");

  const [privateKey, setPrivateKey] =
    useState("");

  const [headers, setHeaders] =
    useState<Record<string, string>>(
      isOAuth
        ? {
            Authorization:
              "Basic base64(clientId:clientSecret)",
          }
        : {}
    );

  const [jsonBody, setJsonBody] =
    useState(
      typeof props.body === "string"
        ? props.body
        : props.body?.type === "json"
        ? props.body.example ?? "{}"
        : "{}"
    );

  const [response, setResponse] =
    useState<any>(null);

  const [status, setStatus] =
    useState<number | null>(null);

  const [loading, setLoading] =
    useState(false);

  /* ================= SIGNATURE ================= */

  const generateNonce = () =>
    crypto.randomUUID().replace(/-/g, "");

  const generateTimestamp = () =>
    Math.floor(Date.now() / 1000).toString();

  const importPrivateKey = async (
    pem: string
  ) => {
    const cleaned = pem
      .replace(/-----BEGIN.*?-----/, "")
      .replace(/-----END.*?-----/, "")
      .replace(/\s/g, "");

    const binaryDer = window.atob(cleaned);
    const binaryArray = Uint8Array.from(
      binaryDer,
      (c) => c.charCodeAt(0)
    );

    return await crypto.subtle.importKey(
      "pkcs8",
      binaryArray.buffer,
      {
        name: "RSASSA-PKCS1-v1_5",
        hash: "SHA-256",
      },
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
      base64Data = btoa(
        JSON.stringify(body)
      );
    }

    let plainText = "";
    if (base64Data)
      plainText += `data=${base64Data}&`;

    plainText +=
      `method=${method.toLowerCase()}` +
      `&nonceStr=${nonce}` +
      `&requestUrl=${fullUrl}` +
      `&signType=sha256` +
      `&timestamp=${timestamp}`;

    const encoder = new TextEncoder();
    const key =
      await importPrivateKey(privateKeyPem);

    const signatureBuffer =
      await crypto.subtle.sign(
        "RSASSA-PKCS1-v1_5",
        key,
        encoder.encode(plainText)
      );

    const signatureBase64 = btoa(
      String.fromCharCode(
        ...new Uint8Array(signatureBuffer)
      )
    );

    return { signature: signatureBase64, nonce, timestamp };
  };

  /* ================= SEND ================= */

  const send = async () => {
    try {
      setLoading(true);
      setResponse(null);
      setStatus(null);

      let requestBody: any;

      if (
        !["GET", "DELETE"].includes(
          props.method
        )
      ) {
        requestBody = JSON.parse(
          jsonBody || "{}"
        );
      }

      const finalHeaders: Record<
        string,
        string
      > = { ...headers };

      if (!isOAuth) {
        if (requiresAccessToken) {
          finalHeaders[
            "Authorization"
          ] = `Bearer ${tokenState}`;
        }

        if (requiresSignature) {
          const {
            signature,
            nonce,
            timestamp,
          } = await signRSA(
            privateKey,
            props.method,
            resolvedUrl,
            requestBody
          );

          finalHeaders[
            "X-Timestamp"
          ] = timestamp;
          finalHeaders[
            "X-Nonce-Str"
          ] = nonce;
          finalHeaders[
            "X-Signature"
          ] = `sha256 ${signature}`;
        }

        if (requestBody) {
          finalHeaders[
            "Content-Type"
          ] = "application/json";
        }
      }

      const res = await fetch(
        "https://rm-api-proxy.aiman-danish.workers.dev",
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
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

      try {
        setResponse(JSON.parse(text));
      } catch {
        setResponse(text);
      }
    } catch (err: any) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  /* ================= RENDER ================= */

  return (
    <div className={styles.wrapper}>
      {hasEnv && (
        <div className={styles.envSwitch}>
          <button
            onClick={() =>
              setEnv("sandbox")
            }
            className={
              env === "sandbox"
                ? styles.activeEnv
                : ""
            }
          >
            SANDBOX
          </button>
          <button
            onClick={() =>
              setEnv("prod")
            }
            className={
              env === "prod"
                ? styles.activeEnv
                : ""
            }
          >
            PROD
          </button>
        </div>
      )}

      <div className={styles.header}>
        <span
          className={`${styles.method} ${
            styles[
              props.method.toLowerCase()
            ]
          }`}
        >
          {props.method}
        </span>

        <span className={styles.url}>
          {baseUrl.split(/({[^}]+})/g).map(
            (part, i) => {
              const match =
                part.match(
                  /{([^}]+)}/
                );
              if (!match)
                return <span key={i}>{part}</span>;

              const key = match[1];

              return (
                <span
                  key={i}
                  contentEditable
                  suppressContentEditableWarning
                  className={
                    styles.urlParam
                  }
                  onBlur={(e) =>
                    setParams({
                      ...params,
                      [key]:
                        e.currentTarget.innerText.trim(),
                    })
                  }
                >
                  {params[key]}
                </span>
              );
            }
          )}
        </span>
      </div>

      <button
        className={styles.send}
        onClick={send}
        disabled={loading}
      >
        {loading
          ? "Sending..."
          : "▶ Send Request"}
      </button>

      {status && (
        <pre className={styles.response}>
          {JSON.stringify(
            response,
            null,
            2
          )}
        </pre>
      )}
    </div>
  );
}