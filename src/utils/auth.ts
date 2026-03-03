const TOKEN_KEY = "rm_api_token";
const TOKEN_EXPIRY_KEY = "rm_api_token_expiry";

function isBrowser() {
  return typeof window !== "undefined";
}

/* ── Basic get / set (backwards-compatible) ── */

export function getToken(): string | null {
  if (!isBrowser()) return null;
  return localStorage.getItem(TOKEN_KEY);
}

/** Legacy setter — no expiry. Kept for backwards compatibility. */
export function setToken(token: string) {
  if (!isBrowser()) return;
  localStorage.setItem(TOKEN_KEY, token);
}

/* ── Expiry-aware setter (use this going forward) ── */

export function setTokenWithExpiry(token: string, expiresInSeconds: number) {
  if (!isBrowser()) return;
  const expiresAt = Date.now() + expiresInSeconds * 1000;
  localStorage.setItem(TOKEN_KEY, token);
  localStorage.setItem(TOKEN_EXPIRY_KEY, expiresAt.toString());
}

/* ── Expiry helpers ── */

export function getTokenExpiry(): number | null {
  if (!isBrowser()) return null;
  const raw = localStorage.getItem(TOKEN_EXPIRY_KEY);
  return raw ? parseInt(raw, 10) : null;
}

/** Returns how many whole seconds remain, or null if no expiry stored. */
export function tokenSecondsRemaining(): number | null {
  const expiry = getTokenExpiry();
  if (expiry === null) return null;
  return Math.floor((expiry - Date.now()) / 1000);
}

export function isTokenExpired(): boolean {
  const secs = tokenSecondsRemaining();
  if (secs === null) return false; // no expiry info → assume still valid
  return secs <= 0;
}

/** Human-readable label like "29 days" or "3 hours". */
export function tokenExpiryLabel(): string | null {
  const secs = tokenSecondsRemaining();
  if (secs === null) return null;
  if (secs <= 0) return "expired";
  if (secs < 3600) return `${Math.floor(secs / 60)} min`;
  if (secs < 86400) return `${Math.floor(secs / 3600)} hr`;
  return `${Math.floor(secs / 86400)} days`;
}

/* ── Clear ── */

export function clearToken() {
  if (!isBrowser()) return;
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(TOKEN_EXPIRY_KEY);
}