import type { Metadata } from "next";
import Link from "next/link";
import { getProduct } from "@/data/products";
import { formatPrice, calculateDiscount } from "@/lib/utils";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import StarRating from "@/components/ui/StarRating";
import FAQItem from "@/components/ui/FAQItem";

export const metadata: Metadata = {
  title: "IPI Signal Pro — Sinyal Trading Akurat Berbasis AI",
  description:
    "Dapatkan sinyal trading kripto dan forex akurat berbasis AI dengan win rate 78.5%. Notifikasi real-time via Telegram & WhatsApp.",
};

export default function ProductAPage() {
  const product = getProduct("a");
  if (!product) return null;

  const discount = product.originalPrice
    ? calculateDiscount(product.originalPrice, product.price)
    : 0;

  return (
    <div className="bg-[#06060f] min-h-screen">
      {/* Hero */}
      <section className="relative pt-28 pb-20 overflow-hidden">
        <div className="absolute inset-0 mesh-grid opacity-60" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-cyan-500/8 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Badge variant="gold">{product.badge}</Badge>
                <Badge variant="purple">{product.category}</Badge>
              </div>

              <div className="text-5xl mb-4">{product.icon}</div>
              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 leading-tight">
                {product.name}
              </h1>
              <p className="text-xl text-indigo-300 font-medium mb-6">{product.tagline}</p>
              <p className="text-slate-400 leading-relaxed mb-8 text-lg">{product.description}</p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                {[
                  { value: "78.5%", label: "Win Rate" },
                  { value: "50+", label: "Pasang Aset" },
                  { value: "24/7", label: "Sinyal Aktif" },
                ].map((stat) => (
                  <div key={stat.label} className="glass rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold gradient-text">{stat.value}</div>
                    <div className="text-xs text-slate-500 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Button href={`/checkout?product=a`} size="lg" fullWidth>
                  🚀 Beli Sekarang — {formatPrice(product.price)}
                </Button>
                <Button href="#features" variant="secondary" size="lg">
                  Lihat Fitur
                </Button>
              </div>

              <p className="text-xs text-slate-500 mt-3 text-center">
                ✅ Garansi uang kembali 7 hari &nbsp;|&nbsp; 🔒 Pembayaran aman terenkripsi
              </p>
            </div>

            {/* Right: Price Card */}
            <div className="lg:flex lg:justify-end">
              <div className="gradient-border p-1 max-w-sm w-full mx-auto lg:mx-0">
                <div className="bg-[#0f0f1e] rounded-[14px] p-8">
                  <div className="text-center mb-6">
                    <p className="text-slate-400 text-sm mb-1">Harga Spesial Hari Ini</p>
                    {product.originalPrice && (
                      <p className="text-slate-500 line-through text-lg mb-1">
                        {formatPrice(product.originalPrice)}
                      </p>
                    )}
                    <p className="text-4xl font-bold text-white mb-2">
                      {formatPrice(product.price)}
                    </p>
                    {discount > 0 && (
                      <span className="inline-block bg-emerald-500/20 text-emerald-400 text-sm font-bold px-3 py-1 rounded-full border border-emerald-500/30">
                        Hemat {discount}% 🎉
                      </span>
                    )}
                  </div>

                  <ul className="space-y-3 mb-8">
                    {product.features.slice(0, 5).map((f) => (
                      <li key={f} className="flex items-start gap-3 text-sm text-slate-300">
                        <svg className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>

                  <Button href={`/checkout?product=a`} size="lg" fullWidth className="animate-pulse-glow">
                    Mulai Sekarang
                  </Button>

                  <div className="mt-4 flex items-center justify-center gap-2 text-xs text-slate-500">
                    <span>🔒</span>
                    <span>SSL Secure · 7-Day Money Back</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 bg-[#0a0a14]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Fitur <span className="gradient-text">Lengkap & Canggih</span>
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              Semua yang Anda butuhkan untuk trading lebih cerdas, lebih cepat, dan lebih menguntungkan.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {product.features.map((feature, i) => (
              <div key={i} className="glass glass-hover rounded-xl p-6">
                <div className="w-10 h-10 rounded-lg bg-indigo-500/20 flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-slate-200 font-medium text-sm">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
                Manfaat yang Anda <span className="gradient-text">Dapatkan</span>
              </h2>
              <div className="space-y-5">
                {product.benefits.map((benefit, i) => (
                  <div key={i} className="flex items-start gap-4 p-5 glass rounded-xl">
                    <div className="w-8 h-8 rounded-full bg-indigo-500/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-indigo-400 font-bold text-sm">{i + 1}</span>
                    </div>
                    <p className="text-slate-300">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Target audience */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Cocok untuk <span className="gradient-text">Siapa?</span>
              </h3>
              <div className="space-y-4">
                {product.targetAudience.map((audience, i) => (
                  <div key={i} className="glass glass-hover rounded-xl p-5 flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center text-2xl flex-shrink-0">
                      {["🎯", "📈", "💼", "⏰"][i] || "✅"}
                    </div>
                    <p className="text-slate-300 text-sm">{audience}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      {product.testimonials && (
        <section className="py-20 bg-[#0a0a14]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              Bukti <span className="gradient-text">Nyata</span> dari Pengguna Kami
            </h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {product.testimonials.map((t, i) => (
                <div key={i} className="gradient-border p-px">
                  <div className="bg-[#0f0f1e] rounded-[14px] p-7">
                    <StarRating rating={t.rating} />
                    <p className="text-slate-300 leading-relaxed my-4 italic">
                      &ldquo;{t.text}&rdquo;
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm">
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
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-10 text-center">
            Pertanyaan yang Sering <span className="gradient-text">Ditanyakan</span>
          </h2>
          <div className="space-y-3">
            {product.faqs.map((faq, i) => (
              <FAQItem key={i} question={faq.question} answer={faq.answer} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-[#0a0a14]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="gradient-border p-px">
            <div className="bg-[#0f0f1e] rounded-[14px] p-10 sm:p-14">
              <p className="text-5xl mb-6">{product.icon}</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Siap Mulai <span className="gradient-text">Trading Lebih Cerdas?</span>
              </h2>
              <p className="text-slate-400 mb-8 text-lg">
                Bergabung dengan {">"}1.500 trader yang sudah menggunakan {product.name}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button href={`/checkout?product=a`} size="xl">
                  Beli Sekarang — {formatPrice(product.price)}/bulan
                </Button>
              </div>
              <p className="text-slate-500 text-sm mt-5">
                ✅ Garansi 7 hari &nbsp;·&nbsp; 🔒 Pembayaran aman &nbsp;·&nbsp; 📱 Mulai dalam menit
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Breadcrumb nav */}
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
