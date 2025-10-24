import { useEffect, useMemo, useState } from 'react';
import SettingsPanel from '@/components/SettingsPanel';

const PROVIDERS = ['shotstack', 'creatomate', 'plainly', 'tavus'] as const;
const TOOLS = ['promptclip', 'lucyedit', 'ltxvideo', 'wan2_1'] as const;

type Provider = typeof PROVIDERS[number];

export default function Dashboard() {
  const [prompt, setPrompt] = useState('Make a 10s teaser with fast cuts');
  const [provider, setProvider] = useState<Provider>('shotstack');
  const [job, setJob] = useState<any>(null);
  const [status, setStatus] = useState<any>(null);
  const [tool, setTool] = useState<typeof TOOLS[number]>('promptclip');
  const [toolJob, setToolJob] = useState<any>(null);
  const [toolStatus, setToolStatus] = useState<any>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const api = useMemo(() => (import.meta as any).env?.VITE_API_URL || 'http://localhost:4000/api', []);

  useEffect(() => {
    let t: any;
    if (job?.id) {
      t = setInterval(async () => {
        const res = await fetch(`${api}/jobs/${job.provider}/${job.id}`, {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        });
        const data = await res.json();
        setStatus(data);
      }, 2000);
    }
    return () => clearInterval(t);
  }, [job, api]);

  useEffect(() => {
    let t: any;
    if (toolJob?.id) {
      t = setInterval(async () => {
        const res = await fetch(`${api}/tools/${toolJob.tool}/${toolJob.id}`, {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        });
        const data = await res.json();
        setToolStatus(data);
      }, 2000);
    }
    return () => clearInterval(t);
  }, [toolJob, api]);

  async function createJob() {
    const res = await fetch(`${api}/jobs/create`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
      body: JSON.stringify({ provider, prompt }),
    });
    const data = await res.json();
    setJob(data);
  }

  async function runTool() {
    const res = await fetch(`${api}/tools/run`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
      body: JSON.stringify({ tool, prompt }),
    });
    const data = await res.json();
    setToolJob(data);
  }

  return (
    <div className="mx-auto max-w-7xl px-6 py-8">
      <h1 className="text-4xl font-extrabold mb-6 gradient-text">Dashboard</h1>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2 glass rounded-xl p-6">
          <h2 className="text-xl font-bold mb-2">Prompt editor</h2>
          <textarea className="w-full bg-transparent border border-white/10 rounded-md p-3" rows={6} value={prompt} onChange={(e) => setPrompt(e.target.value)} />
          <div className="mt-4 flex items-center gap-3">
            <select value={provider} onChange={(e) => setProvider(e.target.value as Provider)} className="bg-transparent border border-white/10 rounded-md p-2">
              {PROVIDERS.map(p => <option key={p} value={p}>{p}</option>)}
            </select>
            <button onClick={createJob} className="px-6 py-3 rounded-full bg-primary/20 border border-primary/40 text-primary shadow-glow">Create job</button>
          </div>
          {job && (
            <div className="mt-6 text-sm text-zinc-400">Job: {job.id} ({job.provider})</div>
          )}
          {status && (
            <div className="mt-2 text-sm text-zinc-400">Status: {status.status} {status.progress ? Math.round(status.progress*100)+'%' : ''}</div>
          )}
        </div>
        <SettingsPanel />
      </div>

      <div className="mt-8 grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2 glass rounded-xl p-6">
          <h2 className="text-xl font-bold mb-2">Research tools</h2>
          <div className="flex items-center gap-3 mb-3">
            <select value={tool} onChange={(e) => setTool(e.target.value as any)} className="bg-transparent border border-white/10 rounded-md p-2">
              {TOOLS.map(t => <option key={t} value={t}>{t}</option>)}
            </select>
            <button onClick={runTool} className="px-6 py-3 rounded-full bg-white/10">Run tool</button>
          </div>
          {toolJob && (
            <div className="text-sm text-zinc-400">Tool job: {toolJob.id} ({toolJob.tool})</div>
          )}
          {toolStatus && (
            <div className="text-sm text-zinc-400 mt-2">Status: {toolStatus.status} {toolStatus.progress ? Math.round(toolStatus.progress*100)+'%' : ''}</div>
          )}
        </div>
        <div className="glass rounded-xl p-6">
          <h3 className="font-bold mb-2">About tools</h3>
          <p className="text-sm text-zinc-400">Self-host or connect to a gateway. Set base URLs in server env and/or save them in Settings as API keys (base URL accepted).</p>
        </div>
      </div>
    </div>
  );
}
