import Section from '@/components/Section';

export default function Pricing() {
  return (
    <div>
      <Section title="Pricing" subtitle="Simple plans for creators and teams">
        <div className="glass p-6 rounded-xl">
          <h3 className="text-xl font-semibold mb-2">Free</h3>
          <p className="text-zinc-400">Get started with basic features.</p>
          <ul className="mt-3 text-sm text-zinc-400 list-disc list-inside">
            <li>Community support</li>
            <li>Prompt-based editing</li>
            <li>Limited templates</li>
          </ul>
        </div>
        <div className="glass p-6 rounded-xl border border-primary/40 shadow-glow">
          <h3 className="text-xl font-semibold mb-2">Pro</h3>
          <p className="text-zinc-400">Advanced features for power users.</p>
          <ul className="mt-3 text-sm text-zinc-400 list-disc list-inside">
            <li>All providers integrations</li>
            <li>Unlimited templates</li>
            <li>Priority support</li>
          </ul>
        </div>
      </Section>
    </div>
  );
}
