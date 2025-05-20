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
