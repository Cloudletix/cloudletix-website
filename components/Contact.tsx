export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-7xl px-6 py-20">
      <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8 md:p-12">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-sky-400">
          Contact
        </p>

        <h2 className="text-3xl font-bold md:text-4xl">
          Let’s build your infrastructure the right way
        </h2>

        <p className="mt-4 max-w-2xl text-slate-300">
          Talk to Cloudletix about cloud migration, security, monitoring,
          automation, and long-term DevOps support for your business.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-800 bg-slate-950 p-6">
            <h3 className="text-xl font-semibold text-white">Contact details</h3>

            <div className="mt-4 space-y-3 text-slate-300">
              <p>
                <span className="font-semibold text-white">Email:</span>{" "}
                support@cloudletix.team
              </p>
              <p>
                <span className="font-semibold text-white">Website:</span>{" "}
                cloudletix.team
              </p>
              <p>
                <span className="font-semibold text-white">Services:</span>{" "}
                DevOps, Cloud, Security, Monitoring, Automation
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-950 p-6">
            <h3 className="text-xl font-semibold text-white">Next step</h3>

            <p className="mt-4 text-slate-300">
              Ready to discuss your infrastructure? Reach out and we’ll help you
              plan the right solution for your team.
            </p>

            <div className="mt-6 flex flex-wrap gap-4">
              <button className="rounded-xl bg-sky-500 px-6 py-3 font-semibold text-white hover:bg-sky-600">
                Book a Call
              </button>

              <button className="rounded-xl border border-slate-700 px-6 py-3 font-semibold text-white hover:bg-slate-900">
                Request a Quote
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}