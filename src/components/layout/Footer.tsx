import Link from "next/link";

const productLinks = [
  { href: "/produk/a", label: "IPI Signal Pro" },
  { href: "/produk/b", label: "IPI Academy Elite" },
  { href: "/produk/c", label: "IPI AutoBot" },
];

const companyLinks = [
  { href: "/#about", label: "Tentang Kami" },
  { href: "/#testimonials", label: "Testimoni" },
  { href: "/#faq", label: "FAQ" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#06060f]">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold">
                IP
              </div>
              <span className="font-bold text-white text-xl">
                IPI <span className="gradient-text">DIGITAL</span>
              </span>
            </div>
            <p className="text-slate-400 leading-relaxed mb-6 max-w-sm">
              Platform teknologi finansial terdepan Indonesia. Kami membantu trader dan investor mencapai kebebasan finansial melalui tools, edukasi, dan otomasi trading terbaik.
            </p>
            <div className="flex gap-3">
              {["telegram", "instagram", "youtube", "twitter"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 rounded-lg glass flex items-center justify-center text-slate-400 hover:text-white hover:border-indigo-500/40 transition-all"
                  aria-label={social}
                >
                  <span className="text-xs uppercase font-bold">
                    {social === "telegram" ? "TG" : social === "instagram" ? "IG" : social === "youtube" ? "YT" : "TW"}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">Produk</h3>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-indigo-300 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">Perusahaan</h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-indigo-300 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 p-4 glass rounded-xl">
              <p className="text-xs text-slate-400 mb-1">Support 24/7</p>
              <p className="text-sm text-indigo-300 font-medium">support@ipidigital.id</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-slate-500 text-xs">
            &copy; {new Date().getFullYear()} IPI DIGITAL. Hak cipta dilindungi.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-xs text-slate-500">Kebijakan Privasi</span>
            <span className="text-xs text-slate-500">Syarat & Ketentuan</span>
            <span className="text-xs text-slate-500">Disclaimer</span>
          </div>
        </div>
      </div>

      {/* Risk disclaimer */}
      <div className="border-t border-white/5 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <p className="text-xs text-slate-600 text-center">
            ⚠️ Trading mengandung risiko tinggi. Past performance tidak menjamin hasil di masa depan. Investasikan hanya dana yang siap Anda rugikan.
          </p>
        </div>
      </div>
    </footer>
  );
}
