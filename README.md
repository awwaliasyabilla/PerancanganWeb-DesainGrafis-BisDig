Soal no. 1 
# PerancanganWeb-DesainGrafis-BisDig

## 📱 Studi Kasus
Website portofolio mahasiswa terlihat tidak rapi saat dibuka di smartphone. Masalah yang muncul:
- Gambar terlalu besar
- Teks meluber ke luar layar

## 🎯 Solusi: Responsive Web Design

### Konsep
Responsive Design adalah metode desain web agar tampilan dapat menyesuaikan ukuran layar perangkat pengguna. Tujuan utamanya adalah menciptakan antarmuka yang nyaman dibaca dan digunakan di berbagai perangkat.

### Media Queries
Media queries digunakan untuk menerapkan CSS berdasarkan kondisi perangkat seperti lebar layar. Contohnya:

```css
@media (max-width: 768px) {
  .portfolio-img {
    width: 100%;
  }
}


Soal No 2.
# PerancanganWeb-DesainGrafis-BisDig

## 🎯 Studi Kasus
Membuat halaman profil untuk seorang fotografer profesional yang memuat:
- Gambar hasil karya
- Deskripsi pribadi
- Tautan media sosial

## 📄 Struktur HTML5

### Elemen yang Digunakan:
- `<header>`: Judul dan deskripsi singkat
- `<main>`: Konten utama
  - `<section>`: Bio, Galeri, dan Kontak
- `<footer>`: Informasi hak cipta

## 🧩 Contoh File HTML
Lihat file `index.html` di repositori ini. Halaman menampilkan profil fotografer dengan layout yang semantik dan terstruktur.

### Contoh:
```html
<header>
  <h1>Raka Aditama</h1>
  <p>Fotografer Profesional</p>
</header>

Soal No.3
# PerancanganWeb-DesainGrafis-BisDig

## 🧩 Studi Kasus
Perusahaan ingin membuat landing page promosi menggunakan framework. Sebelum implementasi, diminta prototipe dalam Figma.

## ✅ Manfaat Prototipe Desain (Figma)
- Visualisasi awal sebelum implementasi
- Revisi desain cepat dan hemat biaya
- Kolaborasi lintas tim lebih efektif
- Komponen dan gaya dapat dijadikan panduan developer
- Meningkatkan efisiensi proses pengembangan

## 💻 Komponen PromoCard

### Fitur:
- Gambar promosi
- Judul promosi
- Tombol CTA “Daftar Sekarang”

### Contoh HTML:
Lihat file `index.html` dan `style.css` dalam repositori ini.

## 📂 Struktur Folder
- `index.html` – Struktur HTML komponen PromoCard
- `style.css` – Styling komponen
- `promo.jpg` – Gambar dummy untuk promo
- `README.md` – Dokumentasi proyek

## 📦 Catatan
Untuk demo lebih lanjut, komponen ini bisa dikembangkan lebih lanjut menggunakan framework seperti React atau Tailwind CSS.

Soal No.4
# PerancanganWeb-DesainGrafis-BisDig

## 🧩 Studi Kasus
Blog ingin menambahkan tombol "Tampilkan Komentar" agar komentar tidak langsung terlihat tetapi bisa muncul saat diklik.

## ✅ Solusi dengan JavaScript

### Kenapa JavaScript?
JavaScript memungkinkan kita menambah **interaktivitas** tanpa memuat ulang halaman. Dalam kasus ini, kita dapat:
- Menyembunyikan komentar dengan CSS
- Mengubah tampilan komentar secara **dinamis** saat tombol ditekan

## 💻 Contoh Kode
Lihat file `index.html` di repositori ini.

```html
<button onclick="toggleComments()">Tampilkan Komentar</button>

<div id="comments" style="display: none;">
  <ul>
    <li>Contoh komentar pengguna</li>
  </ul>
</div>

<script>
  function toggleComments() {
    const comments = document.getElementById("comments");
    // Menampilkan atau menyembunyikan komentar
  }
</script>


