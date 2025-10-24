import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export default function Section({ title, subtitle, children }) {
    return (_jsxs("section", { className: "mx-auto max-w-7xl px-6 py-16 border-b border-white/5", children: [_jsx("h2", { className: "text-3xl md:text-4xl font-extrabold mb-2 gradient-text", children: title }), subtitle && _jsx("p", { className: "text-zinc-400 mb-8", children: subtitle }), _jsx("div", { className: "grid md:grid-cols-2 gap-8", children: children })] }));
}
