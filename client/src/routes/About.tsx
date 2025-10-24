import Section from '@/components/Section';

export default function About() {
  return (
    <div>
      <Section title="Our Story" subtitle="Built for creators and teams">
        <div className="glass p-6 rounded-xl">Founded to make video editing accessible via prompts.</div>
        <div className="glass p-6 rounded-xl">We combine creative UX with robust infrastructure.</div>
      </Section>
      <Section title="Mission" subtitle="Creativity at the speed of thought">
        <div className="glass p-6 rounded-xl">Empower anyone to tell cinematic stories.</div>
        <div className="glass p-6 rounded-xl">Lower the barriers to professional video.</div>
      </Section>
      <Section title="Values" subtitle="Craft, trust, and clarity">
        <div className="glass p-6 rounded-xl">Delightful UI and solid engineering.</div>
        <div className="glass p-6 rounded-xl">Privacy-first design and transparent choices.</div>
      </Section>
      <Section title="Team" subtitle="Designers, engineers, filmmakers">
        <div className="glass p-6 rounded-xl">Global team with deep media background.</div>
        <div className="glass p-6 rounded-xl">Advisors from leading studios.</div>
      </Section>
      <Section title="Tech" subtitle="MERN + 3D + providers">
        <div className="glass p-6 rounded-xl">React, Tailwind, Three.js for immersive UI.</div>
        <div className="glass p-6 rounded-xl">Express, Mongo, and secure key vault.</div>
      </Section>
      <Section title="Scale" subtitle="From solo to studio">
        <div className="glass p-6 rounded-xl">Works for individuals and enterprises.</div>
        <div className="glass p-6 rounded-xl">Horizontal scaling ready.</div>
      </Section>
      <Section title="Open" subtitle="Bring your tools">
        <div className="glass p-6 rounded-xl">Integrate PromptClip, Lucy Edit, LTXVideo, Wan 2.1.</div>
        <div className="glass p-6 rounded-xl">Custom model endpoints welcome.</div>
      </Section>
      <Section title="Roadmap" subtitle="Continuous evolution">
        <div className="glass p-6 rounded-xl">Realtime collaboration and offline rendering.</div>
        <div className="glass p-6 rounded-xl">More providers and templates.</div>
      </Section>
    </div>
  );
}
