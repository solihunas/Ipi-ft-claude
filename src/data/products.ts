export interface Product {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  price: number;
  originalPrice?: number;
  category: string;
  badge?: string;
  icon: string;
  color: string;
  features: string[];
  benefits: string[];
  targetAudience: string[];
  faqs: { question: string; answer: string }[];
  testimonials?: { name: string; role: string; text: string; rating: number }[];
  caseStudy?: { title: string; result: string; description: string };
}

export const products: Product[] = [
  {
    id: "a",
    slug: "a",
    name: "IPI Signal Pro",
    tagline: "Sinyal Trading Akurat Berbasis AI",
    description:
      "Sistem sinyal trading algoritmik canggih yang menganalisis pasar kripto dan forex secara real-time. Didukung machine learning untuk akurasi tertinggi dan notifikasi instan ke perangkat Anda.",
    price: 297000,
    originalPrice: 597000,
    category: "Trading Tools",
    badge: "TERLARIS",
    icon: "📡",
    color: "indigo",
    features: [
      "Sinyal real-time via Telegram & WhatsApp",
      "Analisis 50+ pasang mata uang & kripto",
      "Win rate historis 78.5%",
      "Dashboard analytics premium",
      "Backtesting otomatis 3 tahun data",
      "Support komunitas eksklusif 24/7",
      "Update algoritma setiap bulan",
      "Risk management otomatis",
    ],
    benefits: [
      "Tidak perlu keahlian analisis teknikal mendalam",
      "Hemat waktu — sinyal siap pakai langsung",
      "Diversifikasi strategi dengan AI",
      "Manajemen risiko otomatis melindungi modal",
      "Akses ke komunitas trader profesional",
    ],
    targetAudience: [
      "Trader pemula yang ingin hasil konsisten",
      "Trader aktif yang ingin mengoptimalkan portofolio",
      "Investor yang ingin passive income dari trading",
      "Profesional sibuk yang tidak punya waktu analisis manual",
    ],
    faqs: [
      {
        question: "Berapa akurasi sinyal IPI Signal Pro?",
        answer:
          "Berdasarkan backtesting 3 tahun data historis, win rate rata-rata kami mencapai 78.5%. Namun perlu diingat bahwa trading selalu mengandung risiko dan past performance tidak menjamin hasil di masa depan.",
      },
      {
        question: "Platform trading apa yang didukung?",
        answer:
          "IPI Signal Pro mendukung semua broker MetaTrader 4/5, Binance, OKX, Bybit, serta platform forex dan kripto mayor lainnya.",
      },
      {
        question: "Berapa sinyal yang dikirim per hari?",
        answer:
          "Rata-rata 3–8 sinyal berkualitas tinggi per hari. Kami mengutamakan kualitas daripada kuantitas untuk menjaga win rate tetap tinggi.",
      },
      {
        question: "Apakah ada garansi?",
        answer:
          "Ya! Kami memberikan garansi uang kembali 7 hari jika Anda tidak puas dengan layanan kami. Tidak ada pertanyaan, tidak ada syarat.",
      },
    ],
    testimonials: [
      {
        name: "Rizki Pratama",
        role: "Full-time Trader, Jakarta",
        text: "Dalam 2 bulan pertama, portofolio saya naik 34%. Sinyalnya akurat dan responnya cepat banget. Worth every penny!",
        rating: 5,
      },
      {
        name: "Sari Dewi",
        role: "Ibu Rumah Tangga & Investor",
        text: "Saya bukan trader profesional, tapi dengan IPI Signal Pro saya bisa dapat passive income konsisten setiap bulannya.",
        rating: 5,
      },
    ],
  },
  {
    id: "b",
    slug: "b",
    name: "IPI Academy Elite",
    tagline: "Kursus Trading Komprehensif dari Nol sampai Pro",
    description:
      "Program pendidikan trading terlengkap di Indonesia. Dari fundamental analisis teknikal hingga strategi institutional level. Dibimbing langsung oleh trader berpengalaman 10+ tahun.",
    price: 1497000,
    originalPrice: 2997000,
    category: "Education",
    badge: "PREMIUM",
    icon: "🎓",
    color: "purple",
    features: [
      "80+ video pembelajaran HD seumur hidup",
      "Modul dari level pemula hingga profesional",
      "Sesi live trading mingguan bersama mentor",
      "Komunitas eksklusif 5.000+ member aktif",
      "Sertifikat resmi IPI DIGITAL",
      "Template strategi siap pakai",
      "E-book panduan trading eksklusif",
      "1-on-1 coaching session (3x per bulan)",
    ],
    benefits: [
      "Kuasai trading dari dasar hingga strategi advanced",
      "Belajar dari kesalahan mentor berpengalaman",
      "Network dengan trader sukses Indonesia",
      "Sertifikat yang diakui industri keuangan",
      "Akses seumur hidup — belajar kapan saja",
    ],
    targetAudience: [
      "Pemula yang ingin mulai trading dengan benar",
      "Trader yang ingin meningkatkan skill ke level berikutnya",
      "Mahasiswa ekonomi/keuangan yang ingin praktik nyata",
      "Karyawan yang ingin memiliki penghasilan tambahan",
    ],
    caseStudy: {
      title: "Dari Karyawan Bergaji 5 Juta menjadi Full-time Trader",
      result: "+Rp 45 Juta/Bulan dalam 8 Bulan",
      description:
        "Ahmad Fauzi, mantan karyawan retail di Bandung, bergabung IPI Academy Elite tanpa pengalaman trading sama sekali. Setelah 4 bulan belajar dan 4 bulan praktek, ia berhasil keluar dari pekerjaan dan kini full-time trading dengan penghasilan konsisten 45 juta per bulan.",
    },
    faqs: [
      {
        question: "Apakah cocok untuk pemula total?",
        answer:
          "Sangat cocok! Kurikulum kami dirancang mulai dari nol. Anda tidak perlu latar belakang keuangan atau trading sebelumnya.",
      },
      {
        question: "Berapa lama akses ke materi?",
        answer:
          "Seumur hidup. Sekali bayar, akses selamanya termasuk semua update konten di masa depan.",
      },
      {
        question: "Apakah ada sesi live dengan mentor?",
        answer:
          "Ya! Setiap minggu ada sesi live trading 2 jam bersama mentor senior. Anda bisa bertanya langsung dan melihat proses analisis real-time.",
      },
      {
        question: "Bagaimana sistem 1-on-1 coaching?",
        answer:
          "Setiap member mendapat 3 sesi coaching 1-on-1 per bulan selama 3 bulan pertama. Jadwal bisa diatur sesuai ketersediaan Anda.",
      },
    ],
    testimonials: [
      {
        name: "Budi Santoso",
        role: "Ex-Karyawan Bank, Surabaya",
        text: "IPI Academy mengubah cara pandang saya tentang trading. Dalam 6 bulan, saya sudah bisa menghasilkan lebih dari gaji kantoran saya!",
        rating: 5,
      },
      {
        name: "Maya Kusuma",
        role: "Mahasiswi Akuntansi, Yogyakarta",
        text: "Materi sangat terstruktur dan mentor sangat sabar. Saya yang tadinya tidak tahu apa-apa tentang trading, sekarang sudah konsisten profit.",
        rating: 5,
      },
    ],
  },
  {
    id: "c",
    slug: "c",
    name: "IPI AutoBot",
    tagline: "Bot Trading Otomatis 24/7 Tanpa Campur Tangan",
    description:
      "Solusi trading otomatis berbasis algoritma yang bekerja untuk Anda 24 jam sehari, 7 hari seminggu. Hubungkan ke akun trading Anda dan biarkan AI kami mengelola portofolio secara cerdas.",
    price: 797000,
    originalPrice: 1497000,
    category: "Automation",
    badge: "NEW",
    icon: "🤖",
    color: "cyan",
    features: [
      "Fully automated trading 24/7",
      "Integrasi API dengan 15+ exchange",
      "Multi-strategy: scalping, swing, grid",
      "Auto risk management & stop-loss",
      "Dashboard monitoring real-time",
      "Laporan performa otomatis harian",
      "Notifikasi transaksi via Telegram",
      "Mode simulasi sebelum go-live",
    ],
    benefits: [
      "Trading berjalan otomatis tanpa perlu monitor terus-menerus",
      "Eliminasi emosi dalam keputusan trading",
      "Eksekusi order lebih cepat dari manusia",
      "Diversifikasi strategi secara bersamaan",
      "Konsistensi strategi 24/7 tanpa lelah",
    ],
    targetAudience: [
      "Investor yang ingin passive income tanpa waktu",
      "Trader yang ingin mengotomasi strategi manual",
      "Tech-savvy individuals yang tertarik AI trading",
      "Pengusaha yang ingin diversifikasi aset",
    ],
    faqs: [
      {
        question: "Apakah dana saya aman?",
        answer:
          "IPI AutoBot hanya menggunakan API key trading (bukan withdrawal). Dana Anda tetap di exchange Anda dan tidak bisa ditarik oleh bot.",
      },
      {
        question: "Exchange apa yang didukung?",
        answer:
          "Mendukung Binance, OKX, Bybit, KuCoin, Gate.io, dan 10+ exchange lainnya. Support broker forex MT4/MT5 dalam pipeline Q2 2025.",
      },
      {
        question: "Berapa modal minimum?",
        answer:
          "Modal minimum yang kami rekomendasikan adalah Rp 5 juta (≈ $300 USDT) untuk hasil yang optimal dengan strategi diversifikasi.",
      },
      {
        question: "Bagaimana jika market crash?",
        answer:
          "Bot dilengkapi circuit breaker otomatis yang akan menghentikan trading jika kerugian melebihi threshold yang Anda tentukan. Capital protection adalah prioritas utama.",
      },
    ],
    testimonials: [
      {
        name: "Hendro Wijaya",
        role: "Pengusaha Properti, Bali",
        text: "Saya tidak punya waktu untuk trading manual. IPI AutoBot mengelola portofolio saya dan hasilnya konsisten +8-12% per bulan.",
        rating: 5,
      },
      {
        name: "Citra Andini",
        role: "IT Manager, Bandung",
        text: "Setup mudah, dashboard informatif, dan hasilnya nyata. Ini investasi terbaik yang pernah saya buat tahun ini.",
        rating: 5,
      },
    ],
  },
];

export function getProduct(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export const testimonials = [
  {
    name: "Rizki Pratama",
    role: "Full-time Trader, Jakarta",
    text: "IPI DIGITAL mengubah cara saya trading. Dalam 3 bulan, portofolio naik 67%. Platform terbaik yang pernah saya coba!",
    rating: 5,
    product: "Signal Pro",
    avatar: "RP",
  },
  {
    name: "Sari Dewi",
    role: "Ibu Rumah Tangga & Investor",
    text: "Saya ibu rumah tangga tanpa latar belakang trading. Dengan IPI Signal Pro, kini saya bisa dapat tambahan 8-15 juta per bulan.",
    rating: 5,
    product: "Signal Pro",
    avatar: "SD",
  },
  {
    name: "Budi Santoso",
    role: "Ex-Karyawan Bank, Surabaya",
    text: "Academy-nya luar biasa. Materi terstruktur, mentor responsif, dan komunitas sangat supportive. 10/10 recommended!",
    rating: 5,
    product: "Academy Elite",
    avatar: "BS",
  },
  {
    name: "Maya Kusuma",
    role: "Mahasiswi, Yogyakarta",
    text: "Dari modal 2 juta, dalam 4 bulan belajar di IPI Academy, kini trading dengan modal 15 juta dan profit konsisten.",
    rating: 5,
    product: "Academy Elite",
    avatar: "MK",
  },
  {
    name: "Hendro Wijaya",
    role: "Pengusaha, Bali",
    text: "AutoBot IPI berjalan 24/7 tanpa saya harus monitor. Profit rata-rata 9% per bulan. Ini passive income sesungguhnya!",
    rating: 5,
    product: "AutoBot",
    avatar: "HW",
  },
  {
    name: "Citra Andini",
    role: "IT Manager, Bandung",
    text: "Setup 15 menit, langsung running. Dashboard sangat informatif. Hasil nyata dalam minggu pertama sudah terasa.",
    rating: 5,
    product: "AutoBot",
    avatar: "CA",
  },
];

export const globalFaqs = [
  {
    question: "Apakah IPI DIGITAL terdaftar dan legal?",
    answer:
      "IPI DIGITAL beroperasi sesuai peraturan yang berlaku di Indonesia. Kami adalah perusahaan teknologi finansial yang menyediakan tools dan edukasi trading. Seluruh produk kami dirancang untuk membantu trader membuat keputusan lebih baik.",
  },
  {
    question: "Bagaimana cara pembayaran?",
    answer:
      "Kami menerima transfer bank (BCA, Mandiri, BNI, BRI), QRIS, dompet digital (GoPay, OVO, Dana), dan kartu kredit/debit VISA/Mastercard.",
  },
  {
    question: "Apakah ada garansi uang kembali?",
    answer:
      "Ya! Semua produk IPI DIGITAL dilengkapi garansi uang kembali 7 hari tanpa syarat. Jika tidak puas, dana dikembalikan 100%.",
  },
  {
    question: "Berapa lama akses produk berlaku?",
    answer:
      "Signal Pro & AutoBot berbasis langganan bulanan. Academy Elite memberikan akses seumur hidup sekali bayar.",
  },
  {
    question: "Apakah ada support setelah pembelian?",
    answer:
      "Tim support kami tersedia 24/7 via live chat, WhatsApp, dan komunitas Discord eksklusif untuk semua member IPI DIGITAL.",
  },
  {
    question: "Bisakah saya mencoba sebelum membeli?",
    answer:
      "Ya! Daftar akun gratis dan dapatkan trial 3 hari untuk semua produk. Tidak perlu kartu kredit untuk memulai trial.",
  },
];
