const API = import.meta.env.VITE_API_URL || 'http://localhost:4000/api';
export function getAuthHeaders() {
    const token = localStorage.getItem('token');
    return token ? { Authorization: `Bearer ${token}` } : {};
}
export async function postJson(path, body, auth = false) {
    const res = await fetch(API + path, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', ...(auth ? getAuthHeaders() : {}) },
        body: JSON.stringify(body),
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok)
        throw new Error(data?.error || 'Request failed');
    return data;
}
export async function getJson(path, auth = false) {
    const res = await fetch(API + path, { headers: auth ? getAuthHeaders() : {} });
    const data = await res.json().catch(() => ({}));
    if (!res.ok)
        throw new Error(data?.error || 'Request failed');
    return data;
}
