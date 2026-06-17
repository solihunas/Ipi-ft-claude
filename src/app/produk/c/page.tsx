import type { Metadata } from "next";
import Link from "next/link";
import { getProduct } from "@/data/products";
import { formatPrice, calculateDiscount } from "@/lib/utils";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import StarRating from "@/components/ui/StarRating";
import FAQItem from "@/components/ui/FAQItem";

export const metadata: Metadata = {
  title: "IPI AutoBot — Bot Trading Otomatis 24/7",
  description:
    "Bot trading otomatis berbasis AI yang bekerja 24/7. Hubungkan ke exchange favorit Anda dan biarkan AI mengelola portofolio secara cerdas.",
};

export default function ProductCPage() {
  const product = getProduct("c");
  if (!product) return null;

  const discount = product.originalPrice
    ? calculateDiscount(product.originalPrice, product.price)
    : 0;

  const howItWorks = [
    { step: "01", title: "Daftar & Akses Dashboard", desc: "Buat akun dan masuk ke dashboard AutoBot yang intuitif." },
    { step: "02", title: "Hubungkan Exchange", desc: "Masukkan API key exchange Anda (trading only, bukan withdrawal)." },
    { step: "03", title: "Pilih Strategi", desc: "Pilih dari strategi scalping, swing, atau grid sesuai profil risiko." },
    { step: "04", title: "Aktifkan & Monitor", desc: "Bot mulai bekerja otomatis. Monitor via dashboard atau Telegram." },
  ];

  return (
    <div className="bg-[#06060f] min-h-screen">
      {/* Hero */}
      <section className="relative pt-28 pb-20 overflow-hidden">
        <div className="absolute inset-0 mesh-grid opacity-60" />
        <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-cyan-500/8 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-indigo-600/8 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Badge variant="cyan">{product.badge}</Badge>
                <Badge variant="purple">{product.category}</Badge>
              </div>
              <div className="text-5xl mb-4">{product.icon}</div>
              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 leading-tight">
                {product.name}
              </h1>
              <p className="text-xl text-cyan-300 font-medium mb-6">{product.tagline}</p>
              <p className="text-slate-400 leading-relaxed mb-8 text-lg">{product.description}</p>

              <div className="grid grid-cols-3 gap-4 mb-8">
                {[
                  { value: "24/7", label: "Operasi Otomatis" },
                  { value: "15+", label: "Exchange" },
                  { value: "3", label: "Strategi AI" },
                ].map((stat) => (
                  <div key={stat.label} className="glass rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold" style={{ background: "linear-gradient(135deg, #22d3ee, #06b6d4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{stat.value}</div>
                    <div className="text-xs text-slate-500 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button href="/checkout?product=c" size="lg" fullWidth>
                  🤖 Aktifkan Bot — {formatPrice(product.price)}/bulan
                </Button>
                <Button href="#how-it-works" variant="secondary" size="lg">
                  Cara Kerja
                </Button>
              </div>
              <p className="text-xs text-slate-500 mt-3 text-center">
                ✅ Garansi 7 hari &nbsp;|&nbsp; 🔒 Dana tetap aman di exchange Anda
              </p>
            </div>

            {/* Price Card */}
            <div className="lg:flex lg:justify-end">
              <div className="p-px rounded-[17px] max-w-sm w-full mx-auto lg:mx-0" style={{ background: "linear-gradient(135deg, rgba(6,182,212,0.4), rgba(99,102,241,0.4))" }}>
                <div className="bg-[#0f0f1e] rounded-[16px] p-8">
                  <div className="text-center mb-6">
                    <p className="text-slate-400 text-sm mb-1">Harga Per Bulan</p>
                    {product.originalPrice && (
                      <p className="text-slate-500 line-through text-lg mb-1">
                        {formatPrice(product.originalPrice)}
                      </p>
                    )}
                    <p className="text-4xl font-bold text-white mb-2">
                      {formatPrice(product.price)}
                    </p>
                    <span className="inline-block bg-cyan-500/20 text-cyan-400 text-sm font-bold px-3 py-1 rounded-full border border-cyan-500/30">
                      Hemat {discount}% 🤖
                    </span>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {product.features.slice(0, 5).map((f) => (
                      <li key={f} className="flex items-start gap-3 text-sm text-slate-300">
                        <svg className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/checkout?product=c"
                    className="block w-full text-center py-4 text-white font-semibold rounded-xl transition-all duration-300 cursor-pointer"
                    style={{ background: "linear-gradient(135deg, #06b6d4, #6366f1)", boxShadow: "0 0 20px rgba(6,182,212,0.3)" }}
                  >
                    Aktivasi Bot Sekarang
                  </Link>
                  <div className="mt-4 flex items-center justify-center gap-2 text-xs text-slate-500">
                    <span>🔒</span>
                    <span>API Trading Only · Dana Aman</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 bg-[#0a0a14]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Cara Kerja <span className="gradient-text">IPI AutoBot</span>
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              Setup dalam 15 menit, bot langsung bekerja untuk Anda 24/7.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {howItWorks.map((step, i) => (
              <div key={i} className="glass glass-hover rounded-xl p-6 relative">
                {i < howItWorks.length - 1 && (
                  <div className="hidden lg:block absolute top-8 -right-2.5 w-5 h-0.5 bg-gradient-to-r from-cyan-500/50 to-transparent z-10" />
                )}
                <div className="w-12 h-12 rounded-xl bg-cyan-500/15 border border-cyan-500/20 flex items-center justify-center mb-4">
                  <span className="text-cyan-400 font-bold font-mono text-sm">{step.step}</span>
                </div>
                <h3 className="text-white font-semibold mb-2">{step.title}</h3>
                <p className="text-slate-400 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Fitur <span className="gradient-text">Unggulan Bot</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {product.features.map((feature, i) => (
              <div key={i} className="glass glass-hover rounded-xl p-6">
                <div className="w-10 h-10 rounded-lg bg-cyan-500/15 flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <p className="text-slate-200 font-medium text-sm">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits & Target */}
      <section className="py-20 bg-[#0a0a14]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl font-bold text-white mb-8">
                Keunggulan <span className="gradient-text">AutoBot vs Manual</span>
              </h2>
              <div className="space-y-4">
                {product.benefits.map((benefit, i) => (
                  <div key={i} className="flex items-start gap-4 p-5 glass rounded-xl">
                    <div className="w-8 h-8 rounded-full bg-cyan-500/15 flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-slate-300">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Ideal untuk <span className="gradient-text">Siapa?</span>
              </h3>
              <div className="space-y-4">
                {product.targetAudience.map((audience, i) => (
                  <div key={i} className="glass glass-hover rounded-xl p-5 flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500/15 to-indigo-500/15 flex items-center justify-center text-2xl flex-shrink-0">
                      {["💤", "⚡", "🤖", "🏢"][i] || "✅"}
                    </div>
                    <p className="text-slate-300 text-sm">{audience}</p>
                  </div>
                ))}
              </div>

              {/* Security note */}
              <div className="mt-6 p-5 rounded-xl border border-cyan-500/20 bg-cyan-500/5">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🔒</span>
                  <div>
                    <p className="text-cyan-300 font-semibold mb-1">Keamanan Dana Anda</p>
                    <p className="text-slate-400 text-sm">
                      IPI AutoBot hanya menggunakan API trading. Dana Anda tidak bisa diakses atau ditarik oleh bot. Anda memiliki kontrol penuh kapan saja.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      {product.testimonials && (
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              Hasil Nyata <span className="gradient-text">Pengguna AutoBot</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {product.testimonials.map((t, i) => (
                <div key={i} className="p-px rounded-[17px]" style={{ background: "linear-gradient(135deg, rgba(6,182,212,0.3), rgba(99,102,241,0.3))" }}>
                  <div className="bg-[#0f0f1e] rounded-[16px] p-7">
                    <StarRating rating={t.rating} />
                    <p className="text-slate-300 leading-relaxed my-4 italic">
                      &ldquo;{t.text}&rdquo;
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm" style={{ background: "linear-gradient(135deg, #06b6d4, #6366f1)" }}>
                        {t.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                      </div>
                      <div>
                        <p className="text-white font-semibold text-sm">{t.name}</p>
                        <p className="text-slate-500 text-xs">{t.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="py-20 bg-[#0a0a14]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-10 text-center">
            Pertanyaan <span className="gradient-text">Umum</span>
          </h2>
          <div className="space-y-3">
            {product.faqs.map((faq, i) => (
              <FAQItem key={i} question={faq.question} answer={faq.answer} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="p-px rounded-[17px]" style={{ background: "linear-gradient(135deg, rgba(6,182,212,0.4), rgba(99,102,241,0.4))" }}>
            <div className="bg-[#0f0f1e] rounded-[16px] p-10 sm:p-14">
              <p className="text-5xl mb-6">{product.icon}</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Biarkan Bot Bekerja <span className="gradient-text">untuk Anda</span>
              </h2>
              <p className="text-slate-400 mb-8 text-lg">
                Trading otomatis 24/7 tanpa perlu monitor terus-menerus. Mulai dari {formatPrice(product.price)}/bulan.
              </p>
              <Button href="/checkout?product=c" size="xl">
                Aktifkan IPI AutoBot Sekarang
              </Button>
              <p className="text-slate-500 text-sm mt-5">
                ✅ Garansi 7 hari &nbsp;·&nbsp; 🔒 Dana aman di exchange &nbsp;·&nbsp; ⚡ Setup 15 menit
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="border-t border-white/5 py-4">
        <div className="max-w-7xl mx-auto px-4 text-sm text-slate-500 flex items-center gap-2">
          <Link href="/" className="hover:text-indigo-300 transition-colors">Home</Link>
          <span>/</span>
          <span className="text-slate-300">{product.name}</span>
        </div>
      </div>
    </div>
  );
}
