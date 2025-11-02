import { Github, Twitter } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="w-full border-t border-emerald-500/20 bg-black/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-white/60 text-sm">© {year} CipherCloud. Built for hackers.</p>
        <div className="flex items-center gap-4">
          <a
            href="#"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white transition"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white transition"
            aria-label="Twitter"
          >
            <Twitter className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
