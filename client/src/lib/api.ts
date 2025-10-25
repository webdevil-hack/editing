const API: string = (import.meta as any).env?.VITE_API_URL || 'http://localhost:4000/api';

export function getAuthHeaders() {
  const token = localStorage.getItem('token');
  return token ? { Authorization: `Bearer ${token}` } : {};
}

export async function postJson(path: string, body: any, auth = false) {
  const headers: Record<string, string> = { 'Content-Type': 'application/json' };
  if (auth) Object.assign(headers, getAuthHeaders());
  const res = await fetch(API + path, {
    method: 'POST',
    headers,
    body: JSON.stringify(body),
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(data?.error || 'Request failed');
  return data;
}

export async function getJson(path: string, auth = false) {
  const headers: Record<string, string> = {};
  if (auth) Object.assign(headers, getAuthHeaders());
  const res = await fetch(API + path, { headers });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(data?.error || 'Request failed');
  return data;
}
