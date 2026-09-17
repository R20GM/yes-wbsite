// Create animated floating hearts in the background
const bgContainer = document.getElementById('bgHearts');
const heartSymbols = ['♥', '💖', '💕', '💗'];

for (let i = 0; i < 25; i++) {
  const heart = document.createElement('div');
  heart.classList.add('bg-heart');
  heart.innerText = heartSymbols[Math.floor(Math.random() * heartSymbols.length)];
  heart.style.left = Math.random() * 100 + '%';
  heart.style.animationDuration = (Math.random() * 5 + 5) + 's';
  heart.style.animationDelay = (Math.random() * 5) + 's';
  heart.style.fontSize = (Math.random() * 15 + 15) + 'px';
  bgContainer.appendChild(heart);
}

// Function to handle playing audio
function playMusic() {
  const music = document.getElementById('bgMusic');
  if (music && music.paused) {
    music.play().catch(e => console.log("Audio playback waiting for interaction: ", e));
  }
}

// Validate entered name
function checkName() {
  const input = document.getElementById('nameInput').value.trim();
  
  if (input.toLowerCase() === 'yes') {
    playMusic();
    showScreen('screen-heart');
  } else {
    showScreen('screen-wrong');
  }
}

// Go back to input screen if wrong name is typed
function goBack() {
  document.getElementById('nameInput').value = '';
  document.getElementById('error').innerText = '';
  showScreen('screen-name');
}

// Open letter screen and trigger paragraph animations
function openLetter() {
  playMusic();
  showScreen('screen-letter');
}

// Screen switching helper function
function showScreen(screenId) {
  const screens = document.querySelectorAll('.screen');
  screens.forEach(screen => screen.classList.remove('active'));

  document.getElementById(screenId).classList.add('active');
}

// Allow pressing the "Enter" key on the input box to submit
document.getElementById('nameInput').addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
    checkName();
  }
});