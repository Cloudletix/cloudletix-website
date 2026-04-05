export default function Navbar() {
  return (
    <nav className="w-full border-b border-slate-800 bg-slate-950">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        
        {/* Logo */}
        <h1 className="text-xl font-bold text-white">
          Cloudletix
        </h1>

        {/* Menu */}
        <div className="hidden gap-6 text-sm font-medium text-slate-300 md:flex">
         <a href="#services" className="hover:text-white">Services</a>
<a href="#pricing" className="hover:text-white">Pricing</a>
<a href="#contact" className="hover:text-white">Contact</a>
        </div>

        {/* Button */}
        <button className="rounded-lg bg-sky-500 px-4 py-2 text-sm font-semibold text-white hover:bg-sky-600">
          Get Started
        </button>

      </div>
    </nav>
  );
}