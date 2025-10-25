import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
export default function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [ok, setOk] = useState(null);
    async function submit(e) {
        e.preventDefault();
        const res = await fetch(import.meta.env.VITE_API_URL + '/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email, message }),
        });
        setOk(res.ok);
    }
    return (_jsxs("div", { className: "mx-auto max-w-3xl px-6 py-16", children: [_jsx("h1", { className: "text-4xl font-extrabold mb-6 gradient-text", children: "Contact us" }), _jsxs("form", { onSubmit: submit, className: "space-y-4 glass p-6 rounded-xl", children: [_jsx("input", { className: "w-full bg-transparent border border-white/10 rounded-md p-3", placeholder: "Name", value: name, onChange: (e) => setName(e.target.value) }), _jsx("input", { className: "w-full bg-transparent border border-white/10 rounded-md p-3", placeholder: "Email", value: email, onChange: (e) => setEmail(e.target.value) }), _jsx("textarea", { className: "w-full bg-transparent border border-white/10 rounded-md p-3", placeholder: "Message", rows: 6, value: message, onChange: (e) => setMessage(e.target.value) }), _jsx("button", { className: "px-6 py-3 rounded-full bg-primary/20 border border-primary/40 text-primary shadow-glow", type: "submit", children: "Send" }), ok !== null && _jsx("p", { className: "text-sm text-zinc-400", children: ok ? 'Thanks, we will reply soon.' : 'Failed to send.' })] })] }));
}
