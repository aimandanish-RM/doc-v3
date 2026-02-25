export function pemToArrayBuffer(pem: string): ArrayBuffer {
  const base64 = pem
    .replace(/-----BEGIN [A-Z ]+-----/, "")
    .replace(/-----END [A-Z ]+-----/, "")
    .replace(/\s+/g, "")

  const binary = atob(base64)
  const buffer = new Uint8Array(binary.length)

  for (let i = 0; i < binary.length; i++) {
    buffer[i] = binary.charCodeAt(i)
  }

  return buffer.buffer
}

export async function signRSA({
  privateKey,
  method,
  path,
  body
}: {
  privateKey: string
  method: string
  path: string
  body?: string
}) {
  const timestamp = Date.now().toString()
  const nonce = crypto.randomUUID()

  const payload =
    method.toUpperCase() +
    path +
    timestamp +
    nonce +
    (body || "")

  const key = await window.crypto.subtle.importKey(
    "pkcs8",
    pemToArrayBuffer(privateKey),
    {
      name: "RSASSA-PKCS1-v1_5",
      hash: "SHA-256"
    },
    false,
    ["sign"]
  )

  const encoder = new TextEncoder()

  const signature = await window.crypto.subtle.sign(
    "RSASSA-PKCS1-v1_5",
    key,
    encoder.encode(payload)
  )

  const base64 = btoa(
    String.fromCharCode(...new Uint8Array(signature))
  )

  return {
    signature: base64,
    timestamp,
    nonce
  }
}