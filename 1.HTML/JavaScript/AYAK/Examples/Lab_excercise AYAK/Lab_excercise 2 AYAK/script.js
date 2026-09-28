// Menyimpan semua data user dari API
let users = [];

// ===============================
// 1. FETCH DATA DARI API (AJAX)
// ===============================

// Mengambil data dari API (tanpa reload halaman)
fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json()) // ubah response jadi JSON
  .then(data => {
    users = data;          // simpan data ke variable global
    displayUsers(users);   // tampilkan semua data pertama kali
  })
  .catch(err => console.error(err)); // handle error kalau gagal

// ===============================
// 2. AMBIL INPUT SEARCH
// ===============================

// Ambil element input dari HTML
const searchInput = document.getElementById('search');

// Event: setiap user mengetik
searchInput.addEventListener('input', function () {

  // Ambil value input dan ubah ke lowercase
  const keyword = this.value.toLowerCase();

  // ===============================
  // 3. FILTER DATA
  // ===============================

  // Filter data berdasarkan nama
  const filtered = users.filter(user =>
    user.name.toLowerCase().includes(keyword)
  );

  // ===============================
  // 4. TAMPILKAN HASIL
  // ===============================

  displayUsers(filtered);
});

// ===============================
// 5. FUNCTION UNTUK RENDER DATA
// ===============================

function displayUsers(data) {

  // Ambil container hasil
  const container = document.getElementById('results');

  // Kosongkan isi sebelumnya (biar tidak numpuk)
  container.innerHTML = '';

  // Kalau tidak ada hasil
  if (data.length === 0) {
    container.innerHTML = `<p class="empty">Tidak ada hasil</p>`;
    return;
  }

  // Loop setiap user
  data.forEach(user => {

    // Buat element div baru
    const div = document.createElement('div');
    div.classList.add('user');

    // Isi HTML dalam div
    div.innerHTML = `
      <strong>${user.name}</strong><br>
      <small>${user.email}</small>
    `;

    // Masukkan ke dalam container
    container.appendChild(div);
  });
}