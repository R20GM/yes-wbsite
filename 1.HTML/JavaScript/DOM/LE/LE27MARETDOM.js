let darkMode = false;

document.querySelector("#gantiTema").addEventListener("click", function() {
    if (darkMode) {
        document.body.style.backgroundColor = "#2c3e50";
        darkMode = true;
    } else {
        document.body.style.backgroundColor = "#dcdcdc";
        darkMode = false;
    }
});