export type ExampleInput = {
  method: string;
  url: string;
  headers?: Record<string, string>;
  body?: string;
  token?: string; // ✅ ADD THIS
};

/* ---------- CURL ---------- */
export function generateCurl({
  method,
  url,
  headers = {},
  body,
  token,
}: ExampleInput): string {
  const finalHeaders = {
    ...headers,
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
  };

  const headerLines = Object.entries(finalHeaders)
    .map(([k, v]) => `-H "${k}: ${v}"`)
    .join(" \\\n  ");

  const bodyLine =
    body && method !== "GET"
      ? ` \\\n  -d '${body.replace(/\n/g, "")}'`
      : "";

  return `curl -X ${method} "${url}" \\
  ${headerLines}${bodyLine}`;
}

/* ---------- FETCH ---------- */
export function generateFetch({
  method,
  url,
  headers = {},
  body,
  token,
}: ExampleInput): string {
  const finalHeaders = {
    ...headers,
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
  };

  return `fetch("${url}", {
  method: "${method}",
  headers: ${JSON.stringify(finalHeaders, null, 2)},
  ${body && method !== "GET" ? `body: JSON.stringify(${body}),` : ""}
})
.then(res => res.json())
.then(console.log);`;
}
