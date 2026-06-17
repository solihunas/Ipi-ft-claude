const valueProps = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        />
      </svg>
    ),
    iconBg: "bg-indigo-500/15 text-indigo-400",
    title: "Sinyal Akurat AI",
    badge: "78.5% Win Rate",
    badgeColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    description:
      "Mesin machine learning kami menganalisis lebih dari 50 pasang mata uang dan aset kripto secara real-time, mengidentifikasi pola pasar dengan akurasi tinggi untuk memberikan sinyal trading terbaik langsung ke genggaman Anda.",
    highlights: [
      "Analisis real-time 24/7",
      "50+ instrumen trading",
      "Notifikasi Telegram & WhatsApp",
    ],
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 14l9-5-9-5-9 5 9 5z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
        />
      </svg>
    ),
    iconBg: "bg-purple-500/15 text-purple-400",
    title: "Edukasi Terlengkap",
    badge: "80+ Video HD",
    badgeColor: "text-purple-400 bg-purple-500/10 border-purple-500/20",
    description:
      "Kurikulum terstruktur dari nol hingga level institusional, dipandu oleh trader berpengalaman 10+ tahun. Mulai dari analisis teknikal dasar, manajemen risiko, hingga strategi advanced yang digunakan fund manager profesional.",
    highlights: [
      "Pemula hingga level pro",
      "Live trading mingguan bersama mentor",
      "Akses seumur hidup",
    ],
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17H3a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2h-2"
        />
      </svg>
    ),
    iconBg: "bg-cyan-500/15 text-cyan-400",
    title: "Otomasi 24/7",
    badge: "15+ Exchange",
    badgeColor: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
    description:
      "Bot trading algoritmik kami bekerja tanpa henti, mengeksekusi strategi Anda dengan presisi dan kecepatan mesin. Hapus emosi dari trading, jalankan multi-strategi secara bersamaan, dan raih passive income sejati.",
    highlights: [
      "Fully automated tanpa monitor",
      "Multi-strategy: scalping, swing, grid",
      "Auto risk management & circuit breaker",
    ],
  },
];

export default function ValueProposition() {
  return (
    <section className="py-20 sm:py-24 lg:py-32 bg-[#0d0d1a] relative overflow-hidden">
      {/* Subtle background accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-indigo-400 text-sm font-semibold tracking-widest uppercase mb-4">
            Keunggulan Kami
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
            Mengapa{" "}
            <span className="gradient-text">IPI DIGITAL?</span>
          </h2>
          <p className="mt-5 text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Tiga pilar utama yang menjadikan IPI DIGITAL pilihan ribuan trader
            sukses di seluruh Indonesia.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {valueProps.map((prop, i) => (
            <div
              key={i}
              className="gradient-border glass glass-hover rounded-2xl p-7 flex flex-col gap-5 group"
            >
              {/* Icon */}
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${prop.iconBg} transition-transform duration-300 group-hover:scale-110`}>
                {prop.icon}
              </div>

              {/* Title & badge */}
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-bold text-white">{prop.title}</h3>
                <span
                  className={`inline-flex self-start items-center px-2.5 py-0.5 rounded-full text-xs font-semibold border ${prop.badgeColor}`}
                >
                  {prop.badge}
                </span>
              </div>

              {/* Description */}
              <p className="text-slate-400 leading-relaxed text-sm flex-1">
                {prop.description}
              </p>

              {/* Highlights */}
              <ul className="space-y-2.5 border-t border-white/5 pt-5">
                {prop.highlights.map((hl, j) => (
                  <li key={j} className="flex items-center gap-2.5 text-sm text-slate-300">
                    <svg
                      className="w-4 h-4 text-indigo-400 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {hl}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
