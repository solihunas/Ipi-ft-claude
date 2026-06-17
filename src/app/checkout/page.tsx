"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { products, getProduct } from "@/data/products";
import { formatPrice } from "@/lib/utils";
import Button from "@/components/ui/Button";

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  selectedProduct: string;
  paymentMethod: string;
  agreeTerms: boolean;
}

const paymentMethods = [
  { id: "transfer_bca", label: "Transfer BCA", icon: "🏦", desc: "Rekening BCA" },
  { id: "transfer_mandiri", label: "Transfer Mandiri", icon: "🏦", desc: "Rekening Mandiri" },
  { id: "qris", label: "QRIS", icon: "📱", desc: "Bayar via QRIS (GoPay, OVO, Dana, dll)" },
  { id: "gopay", label: "GoPay", icon: "💚", desc: "Dompet digital GoPay" },
  { id: "ovo", label: "OVO", icon: "💜", desc: "Dompet digital OVO" },
  { id: "dana", label: "DANA", icon: "🔵", desc: "Dompet digital DANA" },
];

function CheckoutContent() {
  const searchParams = useSearchParams();
  const productId = searchParams.get("product") || "a";

  const [form, setForm] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    selectedProduct: productId,
    paymentMethod: "",
    agreeTerms: false,
  });

  const [step, setStep] = useState<"form" | "payment" | "success">("form");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const selectedProduct = getProduct(form.selectedProduct);

  const validate = () => {
    const newErrors: Partial<FormData> = {};
    if (!form.fullName.trim()) newErrors.fullName = "Nama lengkap wajib diisi" as never;
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) newErrors.email = "Email tidak valid" as never;
    if (!form.phone.match(/^(\+62|62|0)[0-9]{8,12}$/)) newErrors.phone = "Nomor HP tidak valid" as never;
    if (!form.paymentMethod) newErrors.paymentMethod = "Pilih metode pembayaran" as never;
    if (!form.agreeTerms) newErrors.agreeTerms = "Harus menyetujui syarat & ketentuan" as never;
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    // Simulated payment processing delay
    await new Promise((r) => setTimeout(r, 1800));
    setLoading(false);
    setStep("payment");
  };

  const handlePaymentConfirm = async () => {
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setStep("success");
  };

  if (step === "success") {
    return (
      <div className="min-h-screen bg-[#06060f] pt-28 pb-20 flex items-center justify-center">
        <div className="max-w-md mx-auto px-4 text-center">
          <div className="gradient-border p-px">
            <div className="bg-[#0f0f1e] rounded-[14px] p-10">
              <div className="w-20 h-20 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h1 className="text-2xl font-bold text-white mb-3">Pembayaran Berhasil! 🎉</h1>
              <p className="text-slate-400 mb-2">
                Terima kasih, <span className="text-white font-semibold">{form.fullName}</span>!
              </p>
              <p className="text-slate-400 mb-6 text-sm">
                Detail akses akan dikirim ke <span className="text-indigo-300">{form.email}</span> dalam 5 menit.
              </p>
              <div className="glass rounded-xl p-4 mb-6 text-left">
                <p className="text-xs text-slate-500 mb-3 uppercase tracking-wider font-semibold">Detail Pesanan</p>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-400">Produk</span>
                    <span className="text-white font-medium">{selectedProduct?.name}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-400">Total Bayar</span>
                    <span className="text-emerald-400 font-bold">{selectedProduct ? formatPrice(selectedProduct.price) : ""}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-400">Status</span>
                    <span className="text-emerald-400 font-semibold">✅ Dikonfirmasi</span>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <p className="text-slate-400 text-sm">
                  🤝 Tim kami akan menghubungi Anda dalam 5 menit via WhatsApp.
                </p>
                <Link
                  href="/"
                  className="block text-center py-3 px-6 glass rounded-xl text-indigo-300 hover:text-white hover:border-indigo-500/40 transition-all text-sm font-medium mt-4"
                >
                  ← Kembali ke Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (step === "payment") {
    return (
      <div className="min-h-screen bg-[#06060f] pt-28 pb-20">
        <div className="max-w-lg mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-white mb-2">Instruksi Pembayaran</h1>
            <p className="text-slate-400">Selesaikan pembayaran untuk mengaktifkan akses Anda</p>
          </div>

          <div className="gradient-border p-px mb-6">
            <div className="bg-[#0f0f1e] rounded-[14px] p-7">
              {/* Order summary */}
              <div className="flex items-center gap-4 mb-6 pb-6 border-b border-white/5">
                <div className="w-12 h-12 rounded-xl bg-indigo-500/20 flex items-center justify-center text-2xl">
                  {selectedProduct?.icon}
                </div>
                <div className="flex-1">
                  <p className="text-white font-semibold">{selectedProduct?.name}</p>
                  <p className="text-slate-400 text-sm">{selectedProduct?.tagline}</p>
                </div>
                <div className="text-right">
                  <p className="text-white font-bold text-lg">{selectedProduct ? formatPrice(selectedProduct.price) : ""}</p>
                </div>
              </div>

              {/* Payment instructions */}
              {form.paymentMethod === "qris" ? (
                <div className="text-center">
                  <p className="text-slate-300 mb-4 font-medium">Scan QRIS di bawah untuk membayar:</p>
                  {/* QRIS placeholder — replace with real QR code */}
                  <div className="w-48 h-48 mx-auto bg-white rounded-xl flex items-center justify-center mb-4">
                    <div className="text-center">
                      <p className="text-gray-400 text-xs">QRIS Placeholder</p>
                      <p className="text-gray-600 text-xs mt-1">Akan diganti QR real</p>
                    </div>
                  </div>
                  <p className="text-slate-400 text-sm">
                    Bayar via GoPay, OVO, Dana, ShopeePay, atau bank apapun yang mendukung QRIS
                  </p>
                </div>
              ) : form.paymentMethod.startsWith("transfer") ? (
                <div className="space-y-4">
                  <p className="text-slate-300 font-medium mb-3">Transfer ke rekening berikut:</p>
                  <div className="glass rounded-xl p-5">
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-slate-400 text-sm">Bank</span>
                        <span className="text-white font-semibold">
                          {form.paymentMethod === "transfer_bca" ? "BCA" : "Mandiri"}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400 text-sm">No. Rekening</span>
                        <span className="text-white font-mono font-bold text-lg">
                          {form.paymentMethod === "transfer_bca" ? "1234567890" : "0987654321"}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400 text-sm">Atas Nama</span>
                        <span className="text-white font-semibold">IPI DIGITAL</span>
                      </div>
                      <div className="flex justify-between border-t border-white/5 pt-3">
                        <span className="text-slate-400 text-sm font-semibold">Total Transfer</span>
                        <span className="text-indigo-300 font-bold text-lg">
                          {selectedProduct ? formatPrice(selectedProduct.price) : ""}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-amber-400/80 text-xs">
                    ⚠️ Transfer tepat sesuai nominal di atas untuk konfirmasi otomatis
                  </p>
                </div>
              ) : (
                <div className="text-center">
                  <p className="text-slate-300 mb-4">Bayar via {paymentMethods.find((m) => m.id === form.paymentMethod)?.label}:</p>
                  <div className="glass rounded-xl p-6">
                    <p className="text-3xl mb-2">{paymentMethods.find((m) => m.id === form.paymentMethod)?.icon}</p>
                    <p className="text-slate-400 text-sm">Nomor: <span className="text-white font-mono font-bold">0812-3456-7890</span></p>
                    <p className="text-slate-400 text-sm mt-1">Atas nama: <span className="text-white font-semibold">IPI DIGITAL</span></p>
                    <p className="text-indigo-300 font-bold text-xl mt-3">{selectedProduct ? formatPrice(selectedProduct.price) : ""}</p>
                  </div>
                </div>
              )}

              <div className="mt-6 pt-6 border-t border-white/5">
                <p className="text-slate-400 text-sm mb-4 text-center">
                  Setelah transfer, klik tombol di bawah untuk konfirmasi:
                </p>
                <button
                  onClick={handlePaymentConfirm}
                  disabled={loading}
                  className="w-full py-4 text-white font-semibold rounded-xl btn-primary cursor-pointer disabled:opacity-50 relative z-10"
                >
                  {loading ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Mengkonfirmasi...
                    </span>
                  ) : (
                    "✅ Saya Sudah Transfer / Bayar"
                  )}
                </button>
              </div>
            </div>
          </div>

          <p className="text-center text-slate-500 text-xs">
            Butuh bantuan?{" "}
            <a href="https://wa.me/6281234567890" className="text-indigo-300 hover:text-indigo-200">
              Hubungi WhatsApp Support
            </a>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#06060f] pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">
            Checkout <span className="gradient-text">Aman</span>
          </h1>
          <p className="text-slate-400">Lengkapi data di bawah untuk mengakses produk pilihan Anda</p>
        </div>

        {/* Progress steps */}
        <div className="flex items-center justify-center gap-2 mb-10">
          {["Data Diri", "Pembayaran", "Selesai"].map((s, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${i === 0 ? "bg-indigo-500 text-white" : "glass text-slate-500"}`}>
                {i + 1}
              </div>
              <span className={`text-sm hidden sm:block ${i === 0 ? "text-white font-medium" : "text-slate-500"}`}>{s}</span>
              {i < 2 && <div className="w-8 h-px bg-white/10 mx-1" />}
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* Form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Product selection */}
              <div className="glass rounded-xl p-6">
                <h2 className="text-white font-semibold mb-4 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center text-xs font-bold">1</span>
                  Pilih Produk
                </h2>
                <div className="space-y-3">
                  {products.map((p) => (
                    <label
                      key={p.id}
                      className={`flex items-center gap-4 p-4 rounded-xl cursor-pointer transition-all border ${
                        form.selectedProduct === p.id
                          ? "border-indigo-500/50 bg-indigo-500/10"
                          : "border-white/5 hover:border-white/15 glass"
                      }`}
                    >
                      <input
                        type="radio"
                        name="selectedProduct"
                        value={p.id}
                        checked={form.selectedProduct === p.id}
                        onChange={(e) => setForm({ ...form, selectedProduct: e.target.value })}
                        className="sr-only"
                      />
                      <span className="text-2xl">{p.icon}</span>
                      <div className="flex-1 min-w-0">
                        <p className="text-white font-medium text-sm">{p.name}</p>
                        <p className="text-slate-500 text-xs truncate">{p.tagline}</p>
                      </div>
                      <div className="text-right flex-shrink-0">
                        {p.originalPrice && (
                          <p className="text-slate-600 line-through text-xs">{formatPrice(p.originalPrice)}</p>
                        )}
                        <p className="text-indigo-300 font-bold">{formatPrice(p.price)}</p>
                      </div>
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                        form.selectedProduct === p.id ? "border-indigo-500 bg-indigo-500" : "border-slate-600"
                      }`}>
                        {form.selectedProduct === p.id && (
                          <div className="w-2.5 h-2.5 rounded-full bg-white" />
                        )}
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Personal data */}
              <div className="glass rounded-xl p-6">
                <h2 className="text-white font-semibold mb-5 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center text-xs font-bold">2</span>
                  Data Diri
                </h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-slate-400 text-sm mb-2 font-medium">Nama Lengkap *</label>
                    <input
                      type="text"
                      value={form.fullName}
                      onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                      placeholder="Masukkan nama lengkap"
                      className={`w-full bg-white/5 border rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-indigo-500/60 transition-colors ${
                        errors.fullName ? "border-red-500/50" : "border-white/10"
                      }`}
                    />
                    {errors.fullName && <p className="text-red-400 text-xs mt-1">{String(errors.fullName)}</p>}
                  </div>

                  <div>
                    <label className="block text-slate-400 text-sm mb-2 font-medium">Email Aktif *</label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="nama@email.com"
                      className={`w-full bg-white/5 border rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-indigo-500/60 transition-colors ${
                        errors.email ? "border-red-500/50" : "border-white/10"
                      }`}
                    />
                    {errors.email && <p className="text-red-400 text-xs mt-1">{String(errors.email)}</p>}
                    <p className="text-slate-600 text-xs mt-1">Detail akses akan dikirim ke email ini</p>
                  </div>

                  <div>
                    <label className="block text-slate-400 text-sm mb-2 font-medium">Nomor WhatsApp *</label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="08xxxxxxxxxx"
                      className={`w-full bg-white/5 border rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-indigo-500/60 transition-colors ${
                        errors.phone ? "border-red-500/50" : "border-white/10"
                      }`}
                    />
                    {errors.phone && <p className="text-red-400 text-xs mt-1">{String(errors.phone)}</p>}
                    <p className="text-slate-600 text-xs mt-1">Tim kami akan menghubungi via WhatsApp ini</p>
                  </div>
                </div>
              </div>

              {/* Payment method */}
              <div className="glass rounded-xl p-6">
                <h2 className="text-white font-semibold mb-5 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center text-xs font-bold">3</span>
                  Metode Pembayaran
                </h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {paymentMethods.map((method) => (
                    <label
                      key={method.id}
                      className={`flex items-center gap-3 p-4 rounded-xl cursor-pointer transition-all border ${
                        form.paymentMethod === method.id
                          ? "border-indigo-500/50 bg-indigo-500/10"
                          : "border-white/5 hover:border-white/15"
                      }`}
                    >
                      <input
                        type="radio"
                        name="paymentMethod"
                        value={method.id}
                        checked={form.paymentMethod === method.id}
                        onChange={(e) => setForm({ ...form, paymentMethod: e.target.value })}
                        className="sr-only"
                      />
                      <span className="text-xl">{method.icon}</span>
                      <div className="flex-1 min-w-0">
                        <p className="text-white text-sm font-medium">{method.label}</p>
                        <p className="text-slate-500 text-xs truncate">{method.desc}</p>
                      </div>
                      <div className={`w-4 h-4 rounded-full border-2 flex-shrink-0 ${
                        form.paymentMethod === method.id ? "border-indigo-500 bg-indigo-500" : "border-slate-600"
                      }`} />
                    </label>
                  ))}
                </div>
                {errors.paymentMethod && (
                  <p className="text-red-400 text-xs mt-3">{String(errors.paymentMethod)}</p>
                )}
              </div>

              {/* Terms */}
              <label className="flex items-start gap-3 cursor-pointer">
                <div
                  className={`w-5 h-5 rounded flex items-center justify-center flex-shrink-0 mt-0.5 border ${
                    form.agreeTerms ? "bg-indigo-500 border-indigo-500" : "border-slate-600"
                  }`}
                  onClick={() => setForm({ ...form, agreeTerms: !form.agreeTerms })}
                >
                  {form.agreeTerms && (
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </div>
                <span className="text-slate-400 text-sm leading-relaxed">
                  Saya menyetujui{" "}
                  <span className="text-indigo-300">Syarat & Ketentuan</span> dan{" "}
                  <span className="text-indigo-300">Kebijakan Privasi</span> IPI DIGITAL. Saya memahami bahwa trading mengandung risiko.
                </span>
              </label>
              {errors.agreeTerms && <p className="text-red-400 text-xs">{String(errors.agreeTerms)}</p>}

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 text-white font-bold rounded-xl btn-primary cursor-pointer disabled:opacity-50 text-lg relative z-10"
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Memproses...
                  </span>
                ) : (
                  `🔒 Lanjut ke Pembayaran — ${selectedProduct ? formatPrice(selectedProduct.price) : ""}`
                )}
              </button>
            </form>
          </div>

          {/* Order summary sidebar */}
          <div className="lg:col-span-2 lg:sticky lg:top-24 space-y-4">
            <div className="gradient-border p-px">
              <div className="bg-[#0f0f1e] rounded-[14px] p-6">
                <h3 className="text-white font-semibold mb-4">Ringkasan Pesanan</h3>

                {selectedProduct && (
                  <>
                    <div className="flex items-center gap-3 mb-4 pb-4 border-b border-white/5">
                      <span className="text-3xl">{selectedProduct.icon}</span>
                      <div>
                        <p className="text-white font-medium text-sm">{selectedProduct.name}</p>
                        <p className="text-slate-500 text-xs">{selectedProduct.category}</p>
                      </div>
                    </div>

                    <div className="space-y-2 mb-4 pb-4 border-b border-white/5 text-sm">
                      {selectedProduct.features.slice(0, 4).map((f) => (
                        <div key={f} className="flex items-start gap-2 text-slate-400">
                          <svg className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>{f}</span>
                        </div>
                      ))}
                    </div>

                    <div className="space-y-2 text-sm mb-4">
                      {selectedProduct.originalPrice && (
                        <div className="flex justify-between text-slate-400">
                          <span>Harga Normal</span>
                          <span className="line-through">{formatPrice(selectedProduct.originalPrice)}</span>
                        </div>
                      )}
                      {selectedProduct.originalPrice && (
                        <div className="flex justify-between text-emerald-400">
                          <span>Diskon</span>
                          <span>- {formatPrice(selectedProduct.originalPrice - selectedProduct.price)}</span>
                        </div>
                      )}
                      <div className="flex justify-between text-white font-bold text-base pt-2 border-t border-white/5">
                        <span>Total</span>
                        <span>{formatPrice(selectedProduct.price)}</span>
                      </div>
                    </div>
                  </>
                )}

                {/* Trust badges */}
                <div className="space-y-2">
                  {[
                    { icon: "🔒", text: "Pembayaran 100% aman & terenkripsi" },
                    { icon: "✅", text: "Garansi uang kembali 7 hari" },
                    { icon: "⚡", text: "Akses instan setelah pembayaran" },
                  ].map((b) => (
                    <div key={b.text} className="flex items-center gap-2 text-xs text-slate-400">
                      <span>{b.icon}</span>
                      <span>{b.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Support */}
            <div className="glass rounded-xl p-4">
              <p className="text-slate-400 text-xs mb-2">Butuh bantuan?</p>
              <a href="https://wa.me/6281234567890" className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 text-sm font-medium transition-colors">
                <span>💬</span> Chat WhatsApp Support
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CheckoutPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-[#06060f] flex items-center justify-center">
        <div className="text-slate-400">Memuat...</div>
      </div>
    }>
      <CheckoutContent />
    </Suspense>
  );
}
