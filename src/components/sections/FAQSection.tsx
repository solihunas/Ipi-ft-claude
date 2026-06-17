"use client";

import { globalFaqs } from "@/data/products";
import FAQItem from "@/components/ui/FAQItem";

export default function FAQSection() {
  return (
    <section
      id="faq"
      className="py-20 sm:py-24 lg:py-32 bg-[#0d0d1a] relative overflow-hidden"
    >
      {/* Background accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent" />
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-indigo-600/4 blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="text-center mb-14">
          <p className="text-indigo-400 text-sm font-semibold tracking-widest uppercase mb-4">
            FAQ
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
            Pertanyaan{" "}
            <span className="gradient-text">Umum</span>
          </h2>
          <p className="mt-5 text-slate-400 max-w-xl mx-auto text-lg leading-relaxed">
            Temukan jawaban atas pertanyaan yang paling sering ditanyakan
            tentang IPI DIGITAL dan produk kami.
          </p>
        </div>

        {/* FAQ list */}
        <div className="max-w-3xl mx-auto space-y-3">
          {globalFaqs.map((faq, i) => (
            <FAQItem
              key={i}
              question={faq.question}
              answer={faq.answer}
              index={i}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-14">
          <p className="text-slate-500 text-sm mb-3">
            Tidak menemukan jawaban yang Anda cari?
          </p>
          <a
            href="https://wa.me/6281234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 font-medium text-sm transition-colors"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M11.927 0C5.367 0 .027 5.34.027 11.9c0 2.097.548 4.07 1.505 5.783L0 24l6.487-1.698A11.848 11.848 0 0011.927 23.8c6.56 0 11.9-5.34 11.9-11.9S18.487 0 11.927 0zm0 21.724a9.824 9.824 0 01-5.01-1.37l-.36-.213-3.852 1.009 1.03-3.754-.234-.376a9.82 9.82 0 01-1.506-5.22c0-5.43 4.42-9.848 9.849-9.848 5.43 0 9.848 4.419 9.848 9.848 0 5.43-4.418 9.924-9.765 9.924z" />
            </svg>
            Hubungi Tim Support Kami
          </a>
        </div>
      </div>
    </section>
  );
}
