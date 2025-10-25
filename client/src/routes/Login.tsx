import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const api = (import.meta as any).env?.VITE_API_URL || 'http://localhost:4000/api';
      const res = await fetch(api + '/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Login failed');
      localStorage.setItem('token', data.token);
      navigate('/dashboard');
    } catch (e: any) {
      setError(e.message);
    }
  }

  return (
    <div className="mx-auto max-w-md px-6 py-16">
      <h1 className="text-4xl font-extrabold mb-6 gradient-text">Welcome back</h1>
      <form onSubmit={submit} className="space-y-4 glass p-6 rounded-xl">
        <input className="w-full bg-transparent border border-white/10 rounded-md p-3" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input className="w-full bg-transparent border border-white/10 rounded-md p-3" placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        {error && <p className="text-red-400 text-sm">{error}</p>}
        <button className="px-6 py-3 rounded-full bg-primary/20 border border-primary/40 text-primary shadow-glow" type="submit">Login</button>
      </form>
      <p className="text-sm text-zinc-400 mt-4">No account? <Link to="/signup" className="text-accent">Sign up</Link></p>
    </div>
  );
}
