export function Section({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <h2 className="text-2xl sm:text-3xl font-semibold">{title}</h2>
      <p className="text-white/70 mt-2 max-w-3xl">{subtitle}</p>
      <div className="h-px bg-gradient-to-r from-white/0 via-white/10 to-white/0 mt-8" />
    </section>
  );
}

export function EightSections({ data }: { data: readonly (readonly [string,string])[] }) {
  return (
    <>
      {data.map(([t, s]) => (
        <Section key={t} title={t} subtitle={s} />
      ))}
    </>
  );
}
