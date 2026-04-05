import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="mx-auto flex min-h-screen max-w-7xl items-center px-6 py-20">
        <div className="grid items-center gap-12 md:grid-cols-2">
          
          {/* Left Content */}
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-sky-400">
              Cloudletix
            </p>

            <h1 className="text-4xl font-bold leading-tight md:text-6xl">
              End-to-End DevOps & Cloud Solutions for Modern Businesses
            </h1>

            <p className="mt-6 text-lg text-slate-300 md:text-xl">
              We help businesses with cloud migration, infrastructure monitoring,
              security audits, automation, and scalable DevOps support.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="rounded-xl bg-sky-500 px-6 py-3 font-semibold text-white hover:bg-sky-600"
              >
                Get Free Consultation
              </a>

              <a
                href="#services"
                className="rounded-xl border border-slate-700 px-6 py-3 font-semibold text-white hover:bg-slate-900"
              >
                View Services
              </a>
            </div>

            {/* Tags */}
            <div className="mt-10 flex flex-wrap gap-6 text-sm text-slate-400">
              <span>Cloud Migration</span>
              <span>Security Audit</span>
              <span>Monitoring</span>
              <span>Automation</span>
            </div>
          </div>

          {/* Right Card */}
          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8 shadow-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-400">
              Infrastructure Snapshot
            </p>

            <div className="mt-6 space-y-4">
              <div className="rounded-2xl border border-slate-800 bg-slate-950 p-4">
                <p className="text-sm text-slate-400">Cloud Coverage</p>
                <p className="mt-2 text-2xl font-bold text-white">
                  AWS / Azure / GCP
                </p>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-950 p-4">
                <p className="text-sm text-slate-400">Core Services</p>
                <p className="mt-2 text-2xl font-bold text-white">
                  DevOps, Security, Monitoring
                </p>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-950 p-4">
                <p className="text-sm text-slate-400">Support Model</p>
                <p className="mt-2 text-2xl font-bold text-white">
                  Basic to Advanced
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Sections */}
      <Services />
      <Pricing />
      <Contact />
      <Footer />
    </main>
  );
}