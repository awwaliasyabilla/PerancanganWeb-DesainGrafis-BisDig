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
