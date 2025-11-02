import { Shield, Terminal, Rocket } from "lucide-react";

export default function Navbar() {
  return (
    <header className="w-full sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/60 border-b border-emerald-500/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <div className="flex items-center gap-2">
          <div className="relative grid place-items-center w-9 h-9 rounded-md bg-gradient-to-br from-emerald-500 to-emerald-700 text-white shadow-[0_0_40px_-10px_rgba(16,185,129,0.7)]">
            <Shield className="w-5 h-5" />
          </div>
          <span className="text-emerald-400 font-semibold tracking-wide">CipherCloud</span>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a href="#features" className="text-white/80 hover:text-white transition">Features</a>
          <a href="#pricing" className="text-white/80 hover:text-white transition">Pricing</a>
          <a href="#docs" className="text-white/80 hover:text-white transition">Docs</a>
        </nav>

        <div className="flex items-center gap-3">
          <button className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition">
            <Terminal className="w-4 h-4" />
            <span>CLI</span>
          </button>
          <button className="inline-flex items-center gap-2 rounded-md px-3 py-2 bg-emerald-500/20 border border-emerald-500/40 text-emerald-200 hover:bg-emerald-500/30 hover:text-white transition">
            <Rocket className="w-4 h-4" />
            <span>Launch App</span>
          </button>
        </div>
      </div>
    </header>
  );
}
