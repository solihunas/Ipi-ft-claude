# IPI Digital

Website statis: beranda, katalog produk, pembayaran manual, dan simulasi AI Battle.

## Menjalankan lokal

```sh
python3 -m http.server 8000
```

Buka http://localhost:8000. Tidak memerlukan build atau Next.js.

## Mengubah produk

Edit `products.js`: sumber nama, harga, gambar, fitur, dan deskripsi untuk halaman katalog, detail, dan pembayaran. Data lama dari panel admin tidak lagi digunakan untuk produk. Panel `admin.html` telah dihapus.

Metode pembayaran dan testimoni masih membaca konfigurasi Firestore yang sudah ada. Data pesanan tidak disimpan di Firestore: bukti dan rincian dikirim langsung ke bot Telegram yang sudah dipakai, sebagai dokumen gambar agar kualitas asli tetap terjaga. Browser memeriksa respons Telegram sebelum menampilkan halaman sukses. Jika respons gagal atau koneksi terputus, pelanggan mendapat pilihan mencoba lagi atau menghubungi WhatsApp admin.

Token bot tetap dipakai di browser sesuai keputusan pemilik. Penghapusan halaman admin tidak mengubah aturan akses Firestore atau menghapus kredensial dari riwayat Git.

## AI Battle

Angka dan aktivitas pada `battle.html` adalah simulasi edukasi, bukan hasil trading nyata.
