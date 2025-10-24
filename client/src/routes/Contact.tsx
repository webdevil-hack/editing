import { useState } from 'react';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [ok, setOk] = useState<boolean | null>(null);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const api = (import.meta as any).env?.VITE_API_URL || 'http://localhost:4000/api';
    const res = await fetch(api + '/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, message }),
    });
    setOk(res.ok);
  }

  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-4xl font-extrabold mb-6 gradient-text">Contact us</h1>
      <form onSubmit={submit} className="space-y-4 glass p-6 rounded-xl">
        <input className="w-full bg-transparent border border-white/10 rounded-md p-3" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
        <input className="w-full bg-transparent border border-white/10 rounded-md p-3" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <textarea className="w-full bg-transparent border border-white/10 rounded-md p-3" placeholder="Message" rows={6} value={message} onChange={(e) => setMessage(e.target.value)} />
        <button className="px-6 py-3 rounded-full bg-primary/20 border border-primary/40 text-primary shadow-glow" type="submit">Send</button>
        {ok !== null && <p className="text-sm text-zinc-400">{ok ? 'Thanks, we will reply soon.' : 'Failed to send.'}</p>}
      </form>
    </div>
  );
}
