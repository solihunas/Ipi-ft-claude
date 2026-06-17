const stats = [
  {
    value: "5,000+",
    label: "Trader Aktif",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    color: "text-indigo-400",
    bg: "bg-indigo-500/10",
  },
  {
    value: "78.5%",
    label: "Win Rate",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
  },
  {
    value: "3 Tahun",
    label: "Pengalaman",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    color: "text-purple-400",
    bg: "bg-purple-500/10",
  },
  {
    value: "24/7",
    label: "Support",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
  },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-20 sm:py-24 lg:py-32 bg-[#06060f] relative overflow-hidden"
    >
      {/* Background radial gradient */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] rounded-full bg-indigo-600/5 blur-[120px]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left column — text */}
          <div>
            <p className="text-indigo-400 text-sm font-semibold tracking-widest uppercase mb-4">
              Tentang Kami
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-6">
              Tentang{" "}
              <span className="gradient-text">IPI DIGITAL</span>
            </h2>

            <div className="space-y-5 text-slate-400 leading-relaxed text-base">
              <p>
                IPI DIGITAL adalah platform teknologi finansial terdepan di Indonesia,
                didirikan atas misi tunggal: <span className="text-slate-200 font-medium">mendemokratisasi kebebasan finansial</span>{" "}
                melalui ekosistem trading yang cerdas, terjangkau, dan mudah diakses oleh
                siapa pun — dari pemula hingga trader berpengalaman.
              </p>
              <p>
                Selama lebih dari tiga tahun, kami telah membantu lebih dari 5.000 trader
                aktif di seluruh Indonesia menavigasi pasar kripto dan forex dengan
                percaya diri. Kami menggabungkan teknologi <span className="text-slate-200 font-medium">kecerdasan buatan mutakhir</span>,
                kurikulum edukasi kelas dunia, dan komunitas trader yang solid untuk
                memberikan pengalaman trading terbaik yang pernah ada.
              </p>
            </div>

            {/* Trust badges */}
            <div className="mt-10 flex flex-wrap gap-3">
              {["AI-Powered", "7-Hari Garansi", "Support 24/7", "Komunitas Eksklusif"].map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-indigo-300 bg-indigo-500/10 border border-indigo-500/20"
                >
                  <svg className="w-3 h-3 text-indigo-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right column — stats grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="glass gradient-border glass-hover rounded-2xl p-6 flex flex-col gap-4"
              >
                {/* Icon */}
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${stat.bg} ${stat.color}`}>
                  {stat.icon}
                </div>

                {/* Value */}
                <div>
                  <div className={`text-3xl font-black ${stat.color}`}>
                    {stat.value}
                  </div>
                  <div className="text-sm text-slate-500 font-medium mt-1">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
