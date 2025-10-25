import { createContext, useContext, useEffect, useState } from 'react';
import { api } from '../services/api';

interface User { id: string; email: string; name: string }

interface AuthContextValue {
  user: User | null;
  token: string | null;
  login: (email: string, password: string) => Promise<void>;
  signup: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(localStorage.getItem('token'));

  useEffect(() => {
    if (token) localStorage.setItem('token', token); else localStorage.removeItem('token');
  }, [token]);

  async function login(email: string, password: string) {
    const res = await api<{token:string; user: User}>('/auth/login', { method: 'POST', body: JSON.stringify({ email, password }) });
    setUser(res.user); setToken(res.token);
  }

  async function signup(name: string, email: string, password: string) {
    const res = await api<{token:string; user: User}>('/auth/signup', { method: 'POST', body: JSON.stringify({ name, email, password }) });
    setUser(res.user); setToken(res.token);
  }

  function logout() { setUser(null); setToken(null); }

  return (
    <AuthContext.Provider value={{ user, token, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
}
