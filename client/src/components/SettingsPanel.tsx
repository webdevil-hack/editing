import { useEffect, useState } from 'react';
import { postJson } from '@/lib/api';

const PROVIDERS = ['shotstack', 'creatomate', 'plainly', 'tavus', 'promptclip', 'lucyedit', 'ltxvideo', 'wan2_1'] as const;

type Provider = typeof PROVIDERS[number];

export default function SettingsPanel() {
  const [provider, setProvider] = useState<Provider>('shotstack');
  const [apiKey, setApiKey] = useState('');
  const [status, setStatus] = useState<string>('');

  async function testKey() {
    setStatus('Testing...');
    try {
      const res = await postJson('/providers/test-key', { provider, apiKey }, true);
      setStatus(res.ok ? 'Valid ✓' : 'Invalid');
    } catch (e: any) {
      setStatus(e.message || 'Invalid');
    }
  }

  async function saveKey() {
    setStatus('Saving...');
    try {
      await postJson('/providers/save-key', { provider, apiKey }, true);
      setStatus('Saved ✓');
      setApiKey('');
    } catch (e: any) {
      setStatus(e.message || 'Failed');
    }
  }

  useEffect(() => { setStatus(''); }, [provider]);

  return (
    <div className="glass rounded-xl p-6">
      <h2 className="text-xl font-bold mb-2">Provider API Keys</h2>
      <div className="flex gap-2 items-center mb-3">
        <select value={provider} onChange={(e) => setProvider(e.target.value as Provider)} className="bg-transparent border border-white/10 rounded-md p-2">
          {PROVIDERS.map(p => <option key={p} value={p}>{p}</option>)}
        </select>
        <input className="flex-1 bg-transparent border border-white/10 rounded-md p-2" placeholder="Enter API key or tool base URL" value={apiKey} onChange={(e) => setApiKey(e.target.value)} />
      </div>
      <div className="flex gap-3">
        <button onClick={testKey} className="px-4 py-2 rounded-full bg-white/10">Test</button>
        <button onClick={saveKey} className="px-4 py-2 rounded-full bg-primary/20 border border-primary/40 text-primary shadow-glow">Save</button>
      </div>
      {status && <p className="text-sm text-zinc-400 mt-2">{status}</p>}
    </div>
  );
}
