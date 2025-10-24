import { useState } from 'react';
import { useAuth } from '../context/auth';

export function LoginForm() {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true); setError(null);
    try {
      await login(email, password);
    } catch (e: any) {
      setError(e?.message || 'Login failed');
    } finally { setLoading(false); }
  }

  return (
    <form className="space-y-4" onSubmit={onSubmit}>
      {error && <div className="text-red-400 text-sm">{error}</div>}
      <input className="w-full bg-surface/80 border border-white/10 rounded px-4 py-3" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} />
      <input type="password" className="w-full bg-surface/80 border border-white/10 rounded px-4 py-3" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} />
      <button disabled={loading} className="w-full bg-white/10 hover:bg-white/20 border border-white/10 rounded px-4 py-3">{loading?'Signing in...':'Sign in'}</button>
    </form>
  );
}

export function SignupForm() {
  const { signup } = useAuth();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true); setError(null);
    try {
      await signup(name, email, password);
    } catch (e: any) {
      setError(e?.message || 'Signup failed');
    } finally { setLoading(false); }
  }

  return (
    <form className="space-y-4" onSubmit={onSubmit}>
      {error && <div className="text-red-400 text-sm">{error}</div>}
      <input className="w-full bg-surface/80 border border-white/10 rounded px-4 py-3" placeholder="Name" value={name} onChange={e=>setName(e.target.value)} />
      <input className="w-full bg-surface/80 border border-white/10 rounded px-4 py-3" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} />
      <input type="password" className="w-full bg-surface/80 border border-white/10 rounded px-4 py-3" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} />
      <button disabled={loading} className="w-full bg-white/10 hover:bg-white/20 border border-white/10 rounded px-4 py-3">{loading?'Creating...':'Create'}</button>
    </form>
  );
}
