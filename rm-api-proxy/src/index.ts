const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers":
    "Content-Type, Authorization, X-Target-Url",
};

export default {
  async fetch(request: Request): Promise<Response> {
    // =====================
    // CORS PREFLIGHT
    // =====================
    if (request.method === "OPTIONS") {
      return new Response(null, {
        status: 204,
        headers: CORS_HEADERS,
      });
    }

    if (request.method !== "POST") {
      return new Response("Method Not Allowed", {
        status: 405,
        headers: CORS_HEADERS,
      });
    }

    const url = new URL(request.url);

    // ==========================================================
    // 🔥 MULTIPART PASSTHROUGH (NO JSON PARSING)
    // ==========================================================
    if (url.pathname.endsWith("/multipart")) {
      const targetUrl = request.headers.get("x-target-url");

      if (!targetUrl) {
        return new Response(
          JSON.stringify({ error: "Missing x-target-url header" }),
          { status: 400, headers: CORS_HEADERS }
        );
      }

      const res = await fetch(targetUrl, {
        method: "POST",
        headers: Object.fromEntries(
          [...request.headers].filter(
            ([key]) => key.toLowerCase() !== "content-type"
          )
        ),
        body: request.body, // ✅ RAW STREAM (file-safe)
      });

      const text = await res.text();

      return new Response(text, {
        status: res.status,
        headers: {
          ...CORS_HEADERS,
          "Content-Type": "application/json",
        },
      });
    }

    // ==========================================================
    // ✅ JSON PROXY (UNCHANGED, SAFE)
    // ==========================================================
    let payload: {
      url: string;
      method: string;
      headers?: Record<string, string>;
      body?: any;
    };

    try {
      payload = await request.json();
    } catch {
      return new Response(
        JSON.stringify({ error: "Invalid JSON body" }),
        { status: 400, headers: CORS_HEADERS }
      );
    }

    const { url: targetUrl, method, headers, body } = payload;

    if (!targetUrl || !method) {
      return new Response(
        JSON.stringify({ error: "Missing url or method" }),
        { status: 400, headers: CORS_HEADERS }
      );
    }

    const res = await fetch(targetUrl, {
      method,
      headers,
      body:
        typeof body === "string"
          ? body
          : body
          ? JSON.stringify(body)
          : undefined,
    });

    const text = await res.text();

    return new Response(text, {
      status: res.status,
      headers: {
        ...CORS_HEADERS,
        "Content-Type": "application/json",
      },
    });
  },
};
