"use client";

import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";

const tickerItems = [
  { symbol: "BTC", price: "$104,521", change: "+2.3%", positive: true },
  { symbol: "ETH", price: "$3,847", change: "+1.8%", positive: true },
  { symbol: "BNB", price: "$621", change: "+0.9%", positive: true },
  { symbol: "SOL", price: "$189", change: "+3.1%", positive: true },
  { symbol: "BTC", price: "$104,521", change: "+2.3%", positive: true },
  { symbol: "ETH", price: "$3,847", change: "+1.8%", positive: true },
  { symbol: "BNB", price: "$621", change: "+0.9%", positive: true },
  { symbol: "SOL", price: "$189", change: "+3.1%", positive: true },
];

const stats = [
  { label: "Trader Aktif", value: "5,000+" },
  { label: "Win Rate", value: "78.5%" },
  { label: "Profit Total", value: "Rp 2M+" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-[#06060f] mesh-grid">
      {/* Background gradient orbs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-purple-600/10 blur-[120px]" />
        <div className="absolute top-1/3 -right-60 w-[500px] h-[500px] rounded-full bg-cyan-500/8 blur-[100px]" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] rounded-full bg-indigo-600/8 blur-[100px]" />
      </div>

      {/* Animated ticker bar */}
      <div className="relative z-10 border-b border-white/5 bg-[#06060f]/80 backdrop-blur-sm overflow-hidden">
        <div className="ticker-inner flex items-center gap-0">
          {tickerItems.map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-2 px-6 py-2.5 border-r border-white/5 whitespace-nowrap"
            >
              <span className="text-xs font-bold text-slate-200 tracking-wider">
                {item.symbol}
              </span>
              <span className="text-xs font-mono text-slate-300">{item.price}</span>
              <span
                className={`text-xs font-semibold font-mono ${
                  item.positive ? "text-emerald-400" : "text-red-400"
                }`}
              >
                {item.change}
              </span>
              <span
                className={`w-1.5 h-1.5 rounded-full ${
                  item.positive ? "bg-emerald-400" : "bg-red-400"
                } animate-pulse`}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Main hero content */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <div className="max-w-4xl mx-auto text-center">
            {/* Top badge */}
            <div className="inline-flex items-center gap-2 mb-8">
              <Badge variant="purple" className="animate-fade-up">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse inline-block" />
                Platform Trading Terdepan di Indonesia
              </Badge>
            </div>

            {/* Main headline */}
            <h1
              className="animate-fade-up text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.08] mb-6"
              style={{ animationDelay: "0.1s" }}
            >
              <span className="text-white block">Kuasai Pasar.</span>
              <span className="gradient-text block mt-1">Raih Kebebasan.</span>
            </h1>

            {/* Subheadline */}
            <p
              className="animate-fade-up text-lg sm:text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto mb-10"
              style={{ animationDelay: "0.2s" }}
            >
              IPI DIGITAL adalah platform trading terdepan yang menghadirkan sinyal AI
              akurat, edukasi komprehensif, dan otomasi 24/7 — semua yang Anda butuhkan
              untuk meraih kebebasan finansial dari pasar kripto dan forex.
            </p>

            {/* CTA buttons */}
            <div
              className="animate-fade-up flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
              style={{ animationDelay: "0.3s" }}
            >
              <Button href="/produk/a" variant="primary" size="lg" className="min-w-[220px]">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Mulai Trading Sekarang
              </Button>
              <Button href="/#products" variant="secondary" size="lg" className="min-w-[200px]">
                Pelajari Produk
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Button>
            </div>

            {/* Stats bar */}
            <div
              className="animate-fade-up"
              style={{ animationDelay: "0.4s" }}
            >
              <div className="inline-flex flex-col sm:flex-row items-center gap-0 glass rounded-2xl overflow-hidden border border-white/5">
                {stats.map((stat, i) => (
                  <div
                    key={i}
                    className={`flex flex-col items-center px-8 py-5 ${
                      i < stats.length - 1
                        ? "border-b sm:border-b-0 sm:border-r border-white/5"
                        : ""
                    }`}
                  >
                    <span className="text-2xl sm:text-3xl font-black gradient-text">
                      {stat.value}
                    </span>
                    <span className="text-xs text-slate-500 font-medium mt-1 tracking-wide">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom scroll indicator */}
      <div className="relative z-10 flex justify-center pb-10">
        <a
          href="/#products"
          className="flex flex-col items-center gap-2 text-slate-600 hover:text-slate-400 transition-colors group"
        >
          <span className="text-xs tracking-widest uppercase font-medium">Scroll</span>
          <svg
            className="w-4 h-4 animate-bounce"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </a>
      </div>
    </section>
  );
}
