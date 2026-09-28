let photoChanged = false;
let darkMode = false;

const nameInput = document.getElementById("nameInput");
const profileName = document.getElementById("profileName");
const body = document.getElementById("body");
const photo = document.getElementById("profilePhoto");

document.querySelector(".ubahNama").addEventListener("click", function() {
    if (nameInput.value.trim() !== "") {
        profileName.textContent = nameInput.value;
    }
});

document.querySelector(".gantiFoto").addEventListener("click", function() {
    if (!photoChanged) {
        photo.src = "C:\\Users\\User\\Downloads\\WhatsApp Image 2025-11-04 at 20.43.51_547abb80.jpg";
        photoChanged = true;
    } else {
        photo.src = "C:\\Users\\User\\Downloads\\WhatsApp Image 2025-09-02 at 11.06.36_2ff81690.jpg";
        photoChanged = false;
    }
});

document.querySelector(".gantiTema").addEventListener("click", function() {
    if (!darkMode) {
        body.style.backgroundColor = "#2c3e50";
        darkMode = true;
    } else {
        body.style.backgroundColor = "#dcdcdc";
        darkMode = false;
    }
});