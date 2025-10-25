import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
export default function Signup() {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    async function submit(e) {
        e.preventDefault();
        setError('');
        try {
            const res = await fetch(import.meta.env.VITE_API_URL + '/auth/signup', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password, name }),
            });
            const data = await res.json();
            if (!res.ok)
                throw new Error(data.error || 'Signup failed');
            localStorage.setItem('token', data.token);
            navigate('/dashboard');
        }
        catch (e) {
            setError(e.message);
        }
    }
    return (_jsxs("div", { className: "mx-auto max-w-md px-6 py-16", children: [_jsx("h1", { className: "text-4xl font-extrabold mb-6 gradient-text", children: "Create your account" }), _jsxs("form", { onSubmit: submit, className: "space-y-4 glass p-6 rounded-xl", children: [_jsx("input", { className: "w-full bg-transparent border border-white/10 rounded-md p-3", placeholder: "Name", value: name, onChange: (e) => setName(e.target.value) }), _jsx("input", { className: "w-full bg-transparent border border-white/10 rounded-md p-3", placeholder: "Email", value: email, onChange: (e) => setEmail(e.target.value) }), _jsx("input", { className: "w-full bg-transparent border border-white/10 rounded-md p-3", placeholder: "Password", type: "password", value: password, onChange: (e) => setPassword(e.target.value) }), error && _jsx("p", { className: "text-red-400 text-sm", children: error }), _jsx("button", { className: "px-6 py-3 rounded-full bg-primary/20 border border-primary/40 text-primary shadow-glow", type: "submit", children: "Sign up" })] }), _jsxs("p", { className: "text-sm text-zinc-400 mt-4", children: ["Have an account? ", _jsx(Link, { to: "/login", className: "text-accent", children: "Log in" })] })] }));
}
