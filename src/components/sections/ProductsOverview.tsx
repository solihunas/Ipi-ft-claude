import { products } from "@/data/products";
import { formatPrice, calculateDiscount } from "@/lib/utils";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";

const colorMap: Record<string, { accent: string; glow: string; badge: "purple" | "cyan" | "gold" | "green" | "red" }> = {
  indigo: { accent: "text-indigo-400", glow: "shadow-indigo-500/20", badge: "purple" },
  purple: { accent: "text-purple-400", glow: "shadow-purple-500/20", badge: "purple" },
  cyan: { accent: "text-cyan-400", glow: "shadow-cyan-500/20", badge: "cyan" },
};

const badgeColorMap: Record<string, "purple" | "cyan" | "gold" | "green" | "red"> = {
  TERLARIS: "gold",
  PREMIUM: "purple",
  NEW: "cyan",
};

export default function ProductsOverview() {
  return (
    <section
      id="products"
      className="py-20 sm:py-24 lg:py-32 bg-[#0d0d1a] relative overflow-hidden"
    >
      {/* Background accent */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent" />
        <div className="absolute -bottom-20 left-1/4 w-[400px] h-[400px] rounded-full bg-purple-600/5 blur-[100px]" />
        <div className="absolute -top-20 right-1/4 w-[400px] h-[400px] rounded-full bg-cyan-600/5 blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-indigo-400 text-sm font-semibold tracking-widest uppercase mb-4">
            Produk Kami
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
            Pilih Solusi{" "}
            <span className="gradient-text">Terbaik Anda</span>
          </h2>
          <p className="mt-5 text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Tiga ekosistem produk yang dirancang untuk setiap level trader —
            dari pemula hingga profesional.
          </p>
        </div>

        {/* Products grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-start">
          {products.map((product, i) => {
            const colors = colorMap[product.color] || colorMap.indigo;
            const isPopular = i === 0;
            const discount = product.originalPrice
              ? calculateDiscount(product.originalPrice, product.price)
              : null;

            return (
              <div
                key={product.id}
                className={`relative flex flex-col rounded-2xl overflow-hidden transition-all duration-300 ${
                  isPopular
                    ? `ring-2 ring-indigo-500/50 shadow-2xl ${colors.glow}`
                    : "ring-1 ring-white/5"
                } bg-[#0f0f1e] glass-hover`}
              >
                {/* Most popular ribbon */}
                {isPopular && (
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500" />
                )}

                <div className="p-7 flex flex-col gap-6 flex-1">
                  {/* Top row: icon + badge */}
                  <div className="flex items-start justify-between">
                    <div className="text-4xl leading-none">{product.icon}</div>
                    <div className="flex flex-col items-end gap-2">
                      {product.badge && (
                        <Badge variant={badgeColorMap[product.badge] || "purple"}>
                          {product.badge}
                        </Badge>
                      )}
                      {isPopular && (
                        <span className="text-[10px] font-bold text-indigo-300 bg-indigo-500/15 border border-indigo-500/30 px-2 py-0.5 rounded-full tracking-wider uppercase">
                          Most Popular
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Product info */}
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">{product.name}</h3>
                    <p className={`text-sm font-medium ${colors.accent}`}>{product.tagline}</p>
                  </div>

                  {/* Price */}
                  <div className="flex items-end gap-3">
                    <span className="text-2xl font-black text-white">
                      {formatPrice(product.price)}
                    </span>
                    <div className="flex flex-col items-start pb-0.5">
                      {product.originalPrice && (
                        <span className="text-sm text-slate-600 line-through leading-none mb-0.5">
                          {formatPrice(product.originalPrice)}
                        </span>
                      )}
                      {discount && (
                        <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-1.5 py-0.5 rounded">
                          -{discount}%
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Features list */}
                  <ul className="space-y-2.5 flex-1">
                    {product.features.slice(0, 3).map((feature, j) => (
                      <li key={j} className="flex items-start gap-2.5 text-sm text-slate-300">
                        <svg
                          className={`w-4 h-4 flex-shrink-0 mt-0.5 ${colors.accent}`}
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
                        {feature}
                      </li>
                    ))}
                    {product.features.length > 3 && (
                      <li className="text-xs text-slate-600 pl-6">
                        +{product.features.length - 3} fitur lainnya
                      </li>
                    )}
                  </ul>

                  {/* Divider */}
                  <div className="border-t border-white/5" />

                  {/* CTA */}
                  <Button
                    href={`/produk/${product.id}`}
                    variant={isPopular ? "primary" : "secondary"}
                    fullWidth
                    size="md"
                  >
                    Lihat Detail
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom note */}
        <p className="text-center text-slate-600 text-sm mt-10">
          Semua produk dilengkapi{" "}
          <span className="text-slate-400 font-medium">garansi uang kembali 7 hari</span>{" "}
          &amp; akses komunitas eksklusif.
        </p>
      </div>
    </section>
  );
}
