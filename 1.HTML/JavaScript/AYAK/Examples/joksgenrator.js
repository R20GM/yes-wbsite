const jokeContainer = document.getElementById("joke-container");
const jokeBtn = document.getElementById("joke-btn");

function getJoke() {
    jokeContainer.innerHTML = '<p class="loading">Memuat lelucon...</p>';
    fetch("https://v2.jokeapi.dev/joke/Programming?type=twopart")

    ``  .then(response => {
        if (!response.ok) {
            throw new Error('Gagal mengambil lelucon');
        }
        return response.json();
    })
    .then(data => {
        if (data.type === "twopart") {
            jokeContainer.innerHTML = `
                <div class="two-part">
                    <p><strong>Pertanyaan:</strong> ${data.setup}</p>
                    <p><strong>Jawaban:</strong> ${data.delivery}</p>
                </div>
            `;
        } else {
            jokeContainer.textContent = data.joke;
        }
    })
    .catch(error => {
        jokeContainer.innerHTML = `<p style="color: red">Error: ${error.message}</p>`;
    });
}

jokeBtn.addEventListener("click", getJoke);

getJoke();
