import Spline from "@splinetool/react-spline";
import { Lock, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] md:min-h-[92vh] w-full overflow-hidden bg-black">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/mwBbOy4jrazr59EO/scene.splinecode"
          style={{ width: "100%", height: "100%" }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black" />
        <div className="pointer-events-none absolute inset-x-0 -top-24 h-48 blur-3xl bg-emerald-500/20" />
      </div>

      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 md:pt-28 pb-16 text-center">
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-black/40 px-3 py-1 text-xs text-emerald-300">
            <Lock className="w-3.5 h-3.5" />
            <span>Cyber-grade security for builders</span>
          </div>
          <h1 className="mt-6 text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-white">
            Build secure SaaS faster
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-emerald-300 to-emerald-500">
              with a hacker-first platform
            </span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-base md:text-lg text-white/70">
            Ship authentication, encryption, and audit logs out-of-the-box. Stay fast, stay private, and keep your edge.
          </p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <a
              href="#pricing"
              className="inline-flex items-center gap-2 rounded-md px-5 py-3 bg-emerald-500 text-black font-medium shadow-[0_0_40px_-10px_rgba(16,185,129,0.7)] hover:bg-emerald-400 transition"
            >
              Start free
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#features"
              className="inline-flex items-center gap-2 rounded-md px-5 py-3 border border-emerald-500/40 text-emerald-300 hover:border-emerald-400/60 hover:text-emerald-200 transition"
            >
              Explore features
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
