import Hero3D from '@/components/Hero3D';
import Section from '@/components/Section';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      {/* Section 1: Hero */}
      <section className="mx-auto max-w-7xl px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
            Edit videos by prompt in a cinematic UI
          </h1>
          <p className="text-zinc-400 mt-4">
            Generate, edit, and render videos using natural language.
            Integrations with Shotstack, Creatomate, Plainly Videos, Tavus, and open-source tools.
          </p>
          <div className="mt-6 flex gap-3">
            <Link to="/signup" className="px-6 py-3 rounded-full bg-primary/20 border border-primary/40 text-primary shadow-glow">Get started</Link>
            <Link to="/features" className="px-6 py-3 rounded-full bg-white/10 text-zinc-200 hover:text-white">Explore features</Link>
          </div>
        </div>
        <Hero3D />
      </section>

      {/* Section 2: How it works */}
      <Section title="How it works" subtitle="Prompt → Orchestrate → Render">
        <div className="glass p-6 rounded-xl">Describe your desired edit in natural language.</div>
        <div className="glass p-6 rounded-xl">Choose a provider or open-source toolchain.</div>
      </Section>

      {/* Section 3: Providers */}
      <Section title="Providers" subtitle="Ship with the best-in-class rendering backends">
        <div className="glass p-6 rounded-xl">Shotstack API</div>
        <div className="glass p-6 rounded-xl">Creatomate API</div>
      </Section>

      {/* Section 4: Open-source toolchains */}
      <Section title="Open-source" subtitle="Bring your own model/tool">
        <div className="glass p-6 rounded-xl">PromptClip</div>
        <div className="glass p-6 rounded-xl">Lucy Edit (Daycart), LTXVideo (Lightricks), Wan 2.1 (Alibaba)</div>
      </Section>

      {/* Section 5: Templates */}
      <Section title="Templates" subtitle="Start from cinematic presets">
        <div className="glass p-6 rounded-xl">YouTube Intro</div>
        <div className="glass p-6 rounded-xl">Product Ad</div>
      </Section>

      {/* Section 6: Collaboration */}
      <Section title="Collaboration" subtitle="Share, comment, and version">
        <div className="glass p-6 rounded-xl">Invite teammates</div>
        <div className="glass p-6 rounded-xl">Project history</div>
      </Section>

      {/* Section 7: Security */}
      <Section title="Security" subtitle="Encryption and scoped API keys">
        <div className="glass p-6 rounded-xl">Zero-trust architecture</div>
        <div className="glass p-6 rounded-xl">Key vault with AES-256-GCM</div>
      </Section>

      {/* Section 8: CTA */}
      <section className="mx-auto max-w-7xl px-6 py-16 text-center">
        <motion.div whileHover={{ scale: 1.02 }} className="inline-block px-8 py-4 rounded-full bg-primary/20 border border-primary/40 text-primary shadow-glow">
          <Link to="/signup">Create your free account</Link>
        </motion.div>
      </section>
    </div>
  );
}
