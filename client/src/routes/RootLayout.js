import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Outlet } from 'react-router-dom';
import Nav from '@/components/Nav';
export default function RootLayout() {
    return (_jsxs("div", { className: "min-h-screen text-zinc-100", children: [_jsx(Nav, {}), _jsx("main", { className: "pt-20", children: _jsx(Outlet, {}) }), _jsxs("footer", { className: "mt-20 border-t border-white/5 py-10 text-center text-sm text-zinc-500", children: ["\u00A9 ", new Date().getFullYear(), " Cinematic AI Studio. All rights reserved."] })] }));
}
