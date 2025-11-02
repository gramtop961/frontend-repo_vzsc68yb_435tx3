import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen w-full bg-black text-white selection:bg-emerald-500/30 selection:text-emerald-200">
      <Navbar />
      <main>
        <Hero />
        <Features />
        {/* Pricing teaser */}
        <section id="pricing" className="relative py-20 bg-[linear-gradient(180deg,#030b08_0%,#000_100%)]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-xl border border-emerald-500/20 bg-white/5 p-6">
                <h3 className="text-xl font-semibold">Hacker</h3>
                <p className="mt-1 text-white/60">Everything to start building</p>
                <p className="mt-6 text-3xl font-bold text-emerald-400">$0</p>
                <ul className="mt-4 space-y-2 text-sm text-white/70 list-disc list-inside">
                  <li>Auth + MFA</li>
                  <li>Encrypted KV</li>
                  <li>10k requests/mo</li>
                </ul>
                <a href="#" className="mt-6 inline-block rounded-md bg-emerald-500 text-black font-medium px-4 py-2 hover:bg-emerald-400 transition">Start free</a>
              </div>
              <div className="relative rounded-xl border border-emerald-400/40 bg-gradient-to-b from-emerald-500/10 to-transparent p-6 ring-1 ring-emerald-500/10">
                <div className="absolute -inset-x-6 -top-6 h-12 bg-emerald-500/10 blur-xl" />
                <h3 className="text-xl font-semibold">Pro</h3>
                <p className="mt-1 text-white/60">Scale with confidence</p>
                <p className="mt-6 text-3xl font-bold text-emerald-400">$29</p>
                <ul className="mt-4 space-y-2 text-sm text-white/70 list-disc list-inside">
                  <li>Unlimited projects</li>
                  <li>Edge caching</li>
                  <li>Priority support</li>
                </ul>
                <a href="#" className="mt-6 inline-block rounded-md bg-emerald-500 text-black font-medium px-4 py-2 hover:bg-emerald-400 transition">Go Pro</a>
              </div>
              <div className="rounded-xl border border-emerald-500/20 bg-white/5 p-6">
                <h3 className="text-xl font-semibold">Enterprise</h3>
                <p className="mt-1 text-white/60">Custom security layers</p>
                <p className="mt-6 text-3xl font-bold text-emerald-400">Let's talk</p>
                <ul className="mt-4 space-y-2 text-sm text-white/70 list-disc list-inside">
                  <li>SOC2, ISO27001</li>
                  <li>On-prem options</li>
                  <li>Dedicated SRE</li>
                </ul>
                <a href="#" className="mt-6 inline-block rounded-md border border-emerald-500/40 text-emerald-300 px-4 py-2 rounded hover:border-emerald-400/60 hover:text-emerald-200 transition">Contact sales</a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
