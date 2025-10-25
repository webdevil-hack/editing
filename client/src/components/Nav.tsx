import { Link, NavLink } from 'react-router-dom';

export default function Nav() {
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `px-3 py-2 rounded-md text-sm font-medium ${isActive ? 'text-accent' : 'text-zinc-300 hover:text-white'}`;
  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="mx-auto max-w-7xl px-6 py-3 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold gradient-text">Cinematic AI</Link>
        <nav className="flex items-center gap-2">
          <NavLink to="/" className={linkClass}>Home</NavLink>
          <NavLink to="/features" className={linkClass}>Features</NavLink>
          <NavLink to="/pricing" className={linkClass}>Pricing</NavLink>
          <NavLink to="/about" className={linkClass}>About</NavLink>
          <NavLink to="/contact" className={linkClass}>Contact</NavLink>
          <NavLink to="/dashboard" className={({ isActive }) => `ml-2 px-4 py-2 rounded-full shadow-glow bg-primary/20 border border-primary/40 ${isActive ? 'text-white' : 'text-primary hover:bg-primary/30'}`}>Dashboard</NavLink>
          <NavLink to="/login" className={({ isActive }) => `ml-2 px-4 py-2 rounded-full bg-white/10 ${isActive ? 'text-white' : 'text-zinc-200 hover:text-white'}`}>Login</NavLink>
        </nav>
      </div>
    </header>
  );
}
