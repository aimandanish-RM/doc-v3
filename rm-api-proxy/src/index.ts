const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

export default {
  async fetch(request: Request): Promise<Response> {
    // 🔹 Handle preflight
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

    const { url, method, headers, body } = payload;

    if (!url || !method) {
      return new Response(
        JSON.stringify({ error: "Missing url or method" }),
        { status: 400, headers: CORS_HEADERS }
      );
    }

    const res = await fetch(url, {
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
