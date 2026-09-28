function ubahTeks() {
  document.getElementById("judul").innerText = "Judul Diubah";
}

function ubahHTML() {
  document.getElementById("judul").innerHTML = "<i>Judul Diubah dan italic</i>";
}

function ubahGaya() {
  const judul = document.getElementById("judul");
  judul.style.color = "red";
  judul.style.fontSize = "22px";
}

function ubahGambar() {
  document.getElementById("gambar").src ="C:/Users/User/Downloads/A_small_cup_of_coffee.jpg";
}