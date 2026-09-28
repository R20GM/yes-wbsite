const penggunaContainer = document.getElementById("pengguna-container");
const penggunaBtn = document.getElementById("pengguna-btn");

function getpengguna() {
    penggunaContainer.innerHTML = '<p class="loading">Memuat pengguna...</p>';


    const randomId = Math.floor(Math.random() * 10) + 1;

    fetch(`https://jsonplaceholder.typicode.com/users/${randomId}`)
    .then(response => {
        if (!response.ok) {
            throw new Error('Gagal mengambil pengguna');
        }
        return response.json();
    })
    .then(data => {
        penggunaContainer.innerHTML = `
            <div class="user">
                <p><strong>Nama:</strong> ${data.name}</p>
                <p><strong>Username:</strong> ${data.username}</p>
                <p><strong>Email:</strong> ${data.email}</p>    
            </div>
        `;
    })
    .catch(error => {
        penggunaContainer.innerHTML = `<p style="color: red">Error: ${error.message}</p>`;
    });
}

penggunaBtn.addEventListener("click", getpengguna);

getpengguna();