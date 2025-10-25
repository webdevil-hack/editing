import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useMemo, useState } from 'react';
import SettingsPanel from '@/components/SettingsPanel';
const PROVIDERS = ['shotstack', 'creatomate', 'plainly', 'tavus'];
const TOOLS = ['promptclip', 'lucyedit', 'ltxvideo', 'wan2_1'];
export default function Dashboard() {
    const [prompt, setPrompt] = useState('Make a 10s teaser with fast cuts');
    const [provider, setProvider] = useState('shotstack');
    const [job, setJob] = useState(null);
    const [status, setStatus] = useState(null);
    const [tool, setTool] = useState('promptclip');
    const [toolJob, setToolJob] = useState(null);
    const [toolStatus, setToolStatus] = useState(null);
    const api = useMemo(() => import.meta.env.VITE_API_URL, []);
    useEffect(() => {
        let t;
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
        let t;
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
    return (_jsxs("div", { className: "mx-auto max-w-7xl px-6 py-8", children: [_jsx("h1", { className: "text-4xl font-extrabold mb-6 gradient-text", children: "Dashboard" }), _jsxs("div", { className: "grid md:grid-cols-3 gap-6", children: [_jsxs("div", { className: "md:col-span-2 glass rounded-xl p-6", children: [_jsx("h2", { className: "text-xl font-bold mb-2", children: "Prompt editor" }), _jsx("textarea", { className: "w-full bg-transparent border border-white/10 rounded-md p-3", rows: 6, value: prompt, onChange: (e) => setPrompt(e.target.value) }), _jsxs("div", { className: "mt-4 flex items-center gap-3", children: [_jsx("select", { value: provider, onChange: (e) => setProvider(e.target.value), className: "bg-transparent border border-white/10 rounded-md p-2", children: PROVIDERS.map(p => _jsx("option", { value: p, children: p }, p)) }), _jsx("button", { onClick: createJob, className: "px-6 py-3 rounded-full bg-primary/20 border border-primary/40 text-primary shadow-glow", children: "Create job" })] }), job && (_jsxs("div", { className: "mt-6 text-sm text-zinc-400", children: ["Job: ", job.id, " (", job.provider, ")"] })), status && (_jsxs("div", { className: "mt-2 text-sm text-zinc-400", children: ["Status: ", status.status, " ", status.progress ? Math.round(status.progress * 100) + '%' : ''] }))] }), _jsx(SettingsPanel, {})] }), _jsxs("div", { className: "mt-8 grid md:grid-cols-3 gap-6", children: [_jsxs("div", { className: "md:col-span-2 glass rounded-xl p-6", children: [_jsx("h2", { className: "text-xl font-bold mb-2", children: "Research tools" }), _jsxs("div", { className: "flex items-center gap-3 mb-3", children: [_jsx("select", { value: tool, onChange: (e) => setTool(e.target.value), className: "bg-transparent border border-white/10 rounded-md p-2", children: TOOLS.map(t => _jsx("option", { value: t, children: t }, t)) }), _jsx("button", { onClick: runTool, className: "px-6 py-3 rounded-full bg-white/10", children: "Run tool" })] }), toolJob && (_jsxs("div", { className: "text-sm text-zinc-400", children: ["Tool job: ", toolJob.id, " (", toolJob.tool, ")"] })), toolStatus && (_jsxs("div", { className: "text-sm text-zinc-400 mt-2", children: ["Status: ", toolStatus.status, " ", toolStatus.progress ? Math.round(toolStatus.progress * 100) + '%' : ''] }))] }), _jsxs("div", { className: "glass rounded-xl p-6", children: [_jsx("h3", { className: "font-bold mb-2", children: "About tools" }), _jsx("p", { className: "text-sm text-zinc-400", children: "Self-host or connect to a gateway. Set base URLs in server env and/or save them in Settings as API keys (base URL accepted)." })] })] })] }));
}
