import { ReactNode } from 'react';

export default function Section({ title, subtitle, children }: { title: string; subtitle?: string; children?: ReactNode }) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 border-b border-white/5">
      <h2 className="text-3xl md:text-4xl font-extrabold mb-2 gradient-text">{title}</h2>
      {subtitle && <p className="text-zinc-400 mb-8">{subtitle}</p>}
      <div className="grid md:grid-cols-2 gap-8">
        {children}
      </div>
    </section>
  );
}
