const button = document.getElementById("like");
const countSpan = document.getElementById("count");

let count=0;

button.addEventListener("click", () => {
    count++;
    countSpan.textContent = count;
});