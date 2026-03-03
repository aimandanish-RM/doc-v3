/**
 * In-memory private key store.
 *
 * The key lives ONLY in this module-level variable.
 * It is never written to localStorage, sessionStorage, or any other
 * persistent storage. It is cleared automatically when the page is
 * refreshed or the tab is closed.
 */

let _key = "";

export function getPrivateKey(): string {
  return _key;
}

export function setPrivateKey(key: string): void {
  _key = key.trim();
}

export function hasPrivateKey(): boolean {
  return _key.length > 0;
}

export function clearPrivateKey(): void {
  _key = "";
}