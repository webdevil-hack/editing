import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import { postJson } from '@/lib/api';
const PROVIDERS = ['shotstack', 'creatomate', 'plainly', 'tavus', 'promptclip', 'lucyedit', 'ltxvideo', 'wan2_1'];
export default function SettingsPanel() {
    const [provider, setProvider] = useState('shotstack');
    const [apiKey, setApiKey] = useState('');
    const [status, setStatus] = useState('');
    async function testKey() {
        setStatus('Testing...');
        try {
            const res = await postJson('/providers/test-key', { provider, apiKey }, true);
            setStatus(res.ok ? 'Valid ✓' : 'Invalid');
        }
        catch (e) {
            setStatus(e.message || 'Invalid');
        }
    }
    async function saveKey() {
        setStatus('Saving...');
        try {
            await postJson('/providers/save-key', { provider, apiKey }, true);
            setStatus('Saved ✓');
            setApiKey('');
        }
        catch (e) {
            setStatus(e.message || 'Failed');
        }
    }
    useEffect(() => { setStatus(''); }, [provider]);
    return (_jsxs("div", { className: "glass rounded-xl p-6", children: [_jsx("h2", { className: "text-xl font-bold mb-2", children: "Provider API Keys" }), _jsxs("div", { className: "flex gap-2 items-center mb-3", children: [_jsx("select", { value: provider, onChange: (e) => setProvider(e.target.value), className: "bg-transparent border border-white/10 rounded-md p-2", children: PROVIDERS.map(p => _jsx("option", { value: p, children: p }, p)) }), _jsx("input", { className: "flex-1 bg-transparent border border-white/10 rounded-md p-2", placeholder: "Enter API key or tool base URL", value: apiKey, onChange: (e) => setApiKey(e.target.value) })] }), _jsxs("div", { className: "flex gap-3", children: [_jsx("button", { onClick: testKey, className: "px-4 py-2 rounded-full bg-white/10", children: "Test" }), _jsx("button", { onClick: saveKey, className: "px-4 py-2 rounded-full bg-primary/20 border border-primary/40 text-primary shadow-glow", children: "Save" })] }), status && _jsx("p", { className: "text-sm text-zinc-400 mt-2", children: status })] }));
}
