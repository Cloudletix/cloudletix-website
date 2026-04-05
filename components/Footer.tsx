export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 md:flex-row md:items-center md:justify-between">
        <div>
          <h3 className="text-lg font-bold text-white">Cloudletix</h3>
          <p className="mt-2 text-sm text-slate-400">
            Simplifying cloud, security, automation, and DevOps support.
          </p>
        </div>

        <div className="flex flex-wrap gap-6 text-sm text-slate-300">
          <a href="#services" className="hover:text-white">
            Services
          </a>
          <a href="#pricing" className="hover:text-white">
            Pricing
          </a>
          <a href="#contact" className="hover:text-white">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}