let judul = document.getElementById("judul");
judul.style.color = "blue";
judul.innerHTML += " (diubah dengan getElementById)";

let tombol = document.querySelector(".btn");
tombol.addEventListener("click", function(){
    this.textContent = "Tombol Telah Diklik!";
    this.style.backgroundColor = "lightgreen";
});

let semuaParagraf = document.querySelectorAll("p");
semuaParagraf.forEach((paragraf, index) => {
    paragraf.classList.add("highlight");
    paragraf.innerHTML = `Paragraf ${index + 1} (disorot)
    `;
});