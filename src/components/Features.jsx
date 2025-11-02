import { Shield, Cpu, Lock, Terminal, Zap } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "End-to-end Encryption",
    desc: "Zero-knowledge encryption built-in. Your data, only yours.",
  },
  {
    icon: Cpu,
    title: "Edge-first APIs",
    desc: "Blazing-fast APIs with global edge caching and rate limiting.",
  },
  {
    icon: Lock,
    title: "Auth, MFA, SSO",
    desc: "Secure identity: OAuth, WebAuthn, Passkeys, and role-based access.",
  },
  {
    icon: Terminal,
    title: "Dev-first Tooling",
    desc: "Type-safe SDKs, CLI generator, and infrastructure as code.",
  },
  {
    icon: Zap,
    title: "Real-time Audit Logs",
    desc: "Immutable trails with anomaly detection to keep you ahead.",
  },
];

export default function Features() {
  return (
    <section id="features" className="relative w-full py-20 bg-gradient-to-b from-black to-[#030b08]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-white">
            Everything you need to ship securely
          </h2>
          <p className="mt-3 text-white/70 max-w-2xl mx-auto">
            Powerful primitives and sensible defaults so you can focus on product.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, idx) => (
            <div
              key={idx}
              className="group relative overflow-hidden rounded-xl border border-emerald-500/20 bg-white/5 backdrop-blur hover:border-emerald-400/40 transition"
            >
              <div className="absolute -top-20 -right-20 w-56 h-56 bg-emerald-500/10 rounded-full blur-3xl" />
              <div className="p-6">
                <div className="w-10 h-10 rounded-md grid place-items-center bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  {f.icon && <f.icon className="w-5 h-5" />}
                </div>
                <h3 className="mt-4 text-lg font-medium text-white">{f.title}</h3>
                <p className="mt-2 text-sm text-white/70">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
