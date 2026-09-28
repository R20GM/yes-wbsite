function fetchData() {
    const container = document.getElementById('data-container');
    container.innerHTML = '<p class="loading">Memuat data . . . </p>';


    // Menggunakan API publik dari JSONPlaceholder
    fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => {
            if (!response.ok) {
                throw new Error('Gagal mengambil data');
            }
            return response.json();
        })
        .then(data => {
            container.innerHTML = `
                <h3>${data.title}</h3>
                <p>${data.body}</p>
                <small>ID; ${data.id}</small>
            `;
        })
        .catch(error => {
            container.innerHTML = `<p style="color: red">Error: ${error.message}</p>`;
        });
}