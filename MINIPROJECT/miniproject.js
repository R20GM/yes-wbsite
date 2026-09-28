const skills = document.querySelectorAll(".skills span");

skills.forEach(skill => {
    skill.addEventListener("click", () => {
        alert("Kamu klik skill: " + skill.innerText);
    });
});

const projects = document.querySelectorAll(".box");

projects.forEach((box, index) => {
    box.addEventListener("click", () => { 
        alert("ini adalah project" + (index + 1))
    });
});

// ===== DARK / LIGHT MODE =====
const toggleBtn = document.getElementById("themeToggle");

// cek theme sebelumnya
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
  toggleBtn.textContent = "☀️";
}

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
    toggleBtn.textContent = "☀️";
  } else {
    localStorage.setItem("theme", "light");
    toggleBtn.textContent = "🌙";
  }
});

// ===== FORM VALIDATION =====
const form = document.getElementById("contactForm");
const statusText = document.getElementById("formStatus");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    statusText.textContent = "❌ Please fill all fields!";
    statusText.style.color = "red";
    return;
  }

  if (!email.includes("@")) {
    statusText.textContent = "❌ Invalid email!";
    statusText.style.color = "red";
    return;
  }

  statusText.textContent = "✅ Message sent successfully!";
  statusText.style.color = "green";

  form.reset();
});