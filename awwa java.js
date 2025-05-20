<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Blog dengan Komentar Dinamis</title>
  <style>
    #comments {
      display: none;
      margin-top: 20px;
      padding: 10px;
      background-color: #f3f3f3;
      border-left: 3px solid #ccc;
    }

    button {
      padding: 10px 15px;
      font-size: 1rem;
      cursor: pointer;
    }
  </style>
</head>
<body>

  <article>
    <h1>Judul Artikel</h1>
    <p>Ini adalah isi artikel blog. Komentar pembaca dapat ditampilkan di bawah dengan tombol.</p>

    <button onclick="toggleComments()">Tampilkan Komentar</button>

    <div id="comments">
      <h3>Komentar:</h3>
      <ul>
        <li>Artikel ini sangat membantu, terima kasih!</li>
        <li>Saya setuju dengan poin yang disampaikan.</li>
        <li>Ada referensi lain yang bisa dibaca?</li>
      </ul>
    </div>
  </article>

  <script>
    function toggleComments() {
      const comments = document.getElementById("comments");
      const button = document.querySelector("button");

      if (comments.style.display === "none" || comments.style.display === "") {
        comments.style.display = "block";
        button.textContent = "Sembunyikan Komentar";
      } else {
        comments.style.display = "none";
        button.textContent = "Tampilkan Komentar";
      }
    }
  </script>

</body>
</html>
