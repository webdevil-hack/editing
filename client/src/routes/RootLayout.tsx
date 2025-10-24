import { Outlet } from 'react-router-dom';
import Nav from '@/components/Nav';

export default function RootLayout() {
  return (
    <div className="min-h-screen text-zinc-100">
      <Nav />
      <main className="pt-20">
        <Outlet />
      </main>
      <footer className="mt-20 border-t border-white/5 py-10 text-center text-sm text-zinc-500">
        © {new Date().getFullYear()} Cinematic AI Studio. All rights reserved.
      </footer>
    </div>
  );
}
