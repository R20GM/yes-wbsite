function kirim() {
    let nama = document.getElementById("nama").value;
    let hasil = document.getElementById("hasil");

    if (nama === "") {
        hasil.innerHTML = "Nama tidak boleh kosong!";
    } else {
        hasil.innerHTML = "Berhasil! Nama: " + nama;
    }
}