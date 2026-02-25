interface PlaygroundRequest {
  method: string
  body?: any
  url: string
  headers?: Record<string, string>
}

const allowedHosts = [
  "sb-open.revenuemonster.my",
  "open.revenuemonster.my",
  "sb-oauth.revenuemonster.my",
  "oauth.revenuemonster.my"
]

export default {
  async fetch(request: Request): Promise<Response> {

    const origin = request.headers.get("Origin") || "*"

    const corsHeaders = {
      "Access-Control-Allow-Origin": origin,
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Headers":
        request.headers.get("Access-Control-Request-Headers") || "*",
      "Access-Control-Allow-Credentials": "true",
    }

    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: corsHeaders })
    }

    if (request.method !== "POST") {
      return new Response("Method Not Allowed", {
        status: 405,
        headers: corsHeaders
      })
    }

    try {
      const { method, body, url, headers } =
        await request.json() as PlaygroundRequest

      if (!url || !method) {
        return new Response(
          JSON.stringify({ error: "Missing url or method" }),
          {
            status: 400,
            headers: {
              ...corsHeaders,
              "Content-Type": "application/json"
            }
          }
        )
      }

      const urlObj = new URL(url)

      if (!allowedHosts.includes(urlObj.hostname)) {
        return new Response(
          JSON.stringify({ error: "Host not allowed" }),
          {
            status: 403,
            headers: {
              ...corsHeaders,
              "Content-Type": "application/json"
            }
          }
        )
      }

      const requestBody =
        body && typeof body !== "string"
          ? JSON.stringify(body)
          : body

      const response = await fetch(url, {
        method,
        headers,
        body: requestBody
      })

      const responseText = await response.text()

      return new Response(responseText, {
        status: response.status,
        headers: {
          ...corsHeaders,
          "Content-Type":
            response.headers.get("Content-Type") || "application/json"
        }
      })

    } catch (err: any) {
      return new Response(
        JSON.stringify({
          error: "Worker crashed",
          message: err?.message || "Unknown error"
        }),
        {
          status: 500,
          headers: {
            ...corsHeaders,
            "Content-Type": "application/json"
          }
        }
      )
    }
  }
}