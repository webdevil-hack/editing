import { useEffect, useState } from 'react';
import { api } from '../services/api';

export default function KeysPage() {
  const [keys, setKeys] = useState({ shotstack: '', creatomate: '', plainly: '', tavus: '' });
  const [has, setHas] = useState<{[k:string]: boolean}>({});
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    api<{providers: Record<string, boolean>}>('/providers/keys').then((d) => setHas(d.providers)).catch(()=>{});
  }, []);

  async function save() {
    setSaving(true);
    try {
      await api('/providers/keys', { method: 'POST', body: JSON.stringify(keys) });
      const d = await api<{providers: Record<string, boolean>}>('/providers/keys');
      setHas(d.providers);
    } finally {
      setSaving(false);
    }
  }

  return (
    <section className="mx-auto max-w-2xl px-6 py-12">
      <h2 className="text-2xl font-semibold mb-6">Provider API Keys</h2>
      <div className="space-y-4">
        {['shotstack','creatomate','plainly','tavus'].map((k)=> (
          <div key={k}>
            <label className="block text-sm mb-2 capitalize">{k} {has[k] ? <span className="text-green-400">(saved)</span> : null}</label>
            <input type="password" className="w-full bg-surface/80 border border-white/10 rounded px-4 py-3" placeholder={`Enter ${k} API key`} value={(keys as any)[k]}
              onChange={(e)=> setKeys(prev=> ({...prev, [k]: e.target.value}))} />
          </div>
        ))}
        <button onClick={save} disabled={saving} className="mt-2 bg-white/10 hover:bg-white/20 border border-white/10 rounded px-4 py-2">
          {saving ? 'Saving...' : 'Save Keys'}
        </button>
      </div>
    </section>
  );
}
