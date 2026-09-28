const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");

hamburger.addEventListener("click", () => {
    menu.classList.toggle("active");
});

document.addEventListener('click', (e) => {
    if (!navbar.contains(e.target)) {
        menu.classList.remove('active');
    }
});
