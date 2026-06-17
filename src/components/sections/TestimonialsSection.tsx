import { testimonials } from "@/data/products";
import StarRating from "@/components/ui/StarRating";

const productColorMap: Record<string, string> = {
  "Signal Pro": "text-indigo-300 bg-indigo-500/10 border-indigo-500/20",
  "Academy Elite": "text-purple-300 bg-purple-500/10 border-purple-500/20",
  AutoBot: "text-cyan-300 bg-cyan-500/10 border-cyan-500/20",
};

const avatarColorMap: string[] = [
  "from-indigo-500 to-purple-600",
  "from-purple-500 to-pink-600",
  "from-cyan-500 to-blue-600",
  "from-emerald-500 to-teal-600",
  "from-amber-500 to-orange-600",
  "from-rose-500 to-red-600",
];

export default function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="py-20 sm:py-24 lg:py-32 bg-[#06060f] relative overflow-hidden"
    >
      {/* Background accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full bg-purple-600/5 blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-indigo-400 text-sm font-semibold tracking-widest uppercase mb-4">
            Testimoni
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
            Apa Kata{" "}
            <span className="gradient-text">Mereka?</span>
          </h2>
          <p className="mt-5 text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Bergabunglah dengan ribuan trader yang telah mengubah kehidupan
            finansial mereka bersama IPI DIGITAL.
          </p>
        </div>

        {/* Summary bar */}
        <div className="flex flex-wrap items-center justify-center gap-8 mb-14">
          {[
            { value: "5.0", label: "Rating Rata-rata", icon: "⭐" },
            { value: "5,000+", label: "Member Aktif", icon: "👥" },
            { value: "98%", label: "Tingkat Kepuasan", icon: "✅" },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3">
              <span className="text-2xl">{item.icon}</span>
              <div>
                <div className="text-xl font-black text-white">{item.value}</div>
                <div className="text-xs text-slate-500">{item.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {testimonials.map((testimonial, i) => {
            const productColor =
              productColorMap[testimonial.product] ||
              "text-indigo-300 bg-indigo-500/10 border-indigo-500/20";
            const avatarGradient = avatarColorMap[i % avatarColorMap.length];

            return (
              <div
                key={i}
                className="glass glass-hover rounded-2xl p-6 flex flex-col gap-5 border border-white/5 hover:border-indigo-500/20"
              >
                {/* Top: avatar + name + product */}
                <div className="flex items-start gap-4">
                  {/* Avatar */}
                  <div
                    className={`w-11 h-11 rounded-full bg-gradient-to-br ${avatarGradient} flex items-center justify-center flex-shrink-0`}
                  >
                    <span className="text-sm font-bold text-white">
                      {testimonial.avatar}
                    </span>
                  </div>

                  {/* Name & role */}
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold text-white text-sm truncate">
                      {testimonial.name}
                    </div>
                    <div className="text-xs text-slate-500 mt-0.5 truncate">
                      {testimonial.role}
                    </div>
                  </div>
                </div>

                {/* Star rating */}
                <div className="flex items-center justify-between">
                  <StarRating rating={testimonial.rating} />
                  <span
                    className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold border ${productColor} tracking-wider uppercase`}
                  >
                    {testimonial.product}
                  </span>
                </div>

                {/* Quote */}
                <div className="relative">
                  <svg
                    className="w-6 h-6 text-indigo-500/30 absolute -top-1 -left-1"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                  >
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                  <p className="text-slate-300 text-sm leading-relaxed pl-5 italic">
                    {testimonial.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
