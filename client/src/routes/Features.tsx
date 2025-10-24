import Section from '@/components/Section';

export default function Features() {
  return (
    <div>
      <Section title="Prompt Editing" subtitle="Describe edits, we do the rest">
        <div className="glass p-6 rounded-xl">Cut, trim, subtitle, b-roll from prompts.</div>
        <div className="glass p-6 rounded-xl">Smart music and transitions.</div>
      </Section>
      <Section title="Providers" subtitle="Shotstack, Creatomate, Plainly, Tavus">
        <div className="glass p-6 rounded-xl">Choose per project or job.</div>
        <div className="glass p-6 rounded-xl">Fallbacks and retries built-in.</div>
      </Section>
      <Section title="Open-source" subtitle="PromptClip, Lucy Edit, LTXVideo, Wan 2.1">
        <div className="glass p-6 rounded-xl">Run locally or in the cloud.</div>
        <div className="glass p-6 rounded-xl">Pipeline orchestration provided.</div>
      </Section>
      <Section title="Dashboard" subtitle="Cinematic, focused, efficient">
        <div className="glass p-6 rounded-xl">Keyboard-first, fast navigation.</div>
        <div className="glass p-6 rounded-xl">Live job status and previews.</div>
      </Section>
      <Section title="Templates" subtitle="Speed to first render">
        <div className="glass p-6 rounded-xl">Reusable scene graphs and styles.</div>
        <div className="glass p-6 rounded-xl">Share with your team.</div>
      </Section>
      <Section title="Security" subtitle="Industry-grade key management">
        <div className="glass p-6 rounded-xl">Encrypted keys at rest.</div>
        <div className="glass p-6 rounded-xl">Scoped access per user.</div>
      </Section>
      <Section title="Collaboration" subtitle="Multi-user projects">
        <div className="glass p-6 rounded-xl">Comments, tasks, approvals.</div>
        <div className="glass p-6 rounded-xl">Versioned assets.</div>
      </Section>
      <Section title="Support" subtitle="We’re here to help">
        <div className="glass p-6 rounded-xl">Guides, chat, workshops.</div>
        <div className="glass p-6 rounded-xl">Community forum.</div>
      </Section>
    </div>
  );
}
