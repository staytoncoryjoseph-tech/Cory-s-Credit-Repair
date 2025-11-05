// script.js

// Voice greeting on page load
window.addEventListener('DOMContentLoaded', () => {
  const message = "Welcome to Cory's Credit Repair. The World's Best Credit Repair Service!";
  speak(message);
});

// Speech synthesis function
function speak(text) {
  if ('speechSynthesis' in window) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    utterance.rate = 1;
    utterance.pitch = 1;
    speechSynthesis.speak(utterance);
  } else {
    console.log("Speech synthesis not supported.");
  }
}

// Drop-down menu toggle
function toggleMenu() {
  const menu = document.getElementById('dropdown');
  if (menu) {
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
  }
}

// Optional: Hide menu when clicking outside
window.addEventListener('click', function(event) {
  const menu = document.getElementById('dropdown');
  const button = document.getElementById('menuButton');
  if (menu && button && !button.contains(event.target) && !menu.contains(event.target)) {
    menu.style.display = 'none';
  }
});
