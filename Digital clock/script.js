const digitalClock = document.getElementById('digitalClock');
const analogClock = document.getElementById('analogClock');
const hourHand = document.querySelector('.hour-hand');
const minuteHand = document.querySelector('.minute-hand');
const secondHand = document.querySelector('.second-hand');
const digitalViewButton = document.getElementById('digitalView');
const analogViewButton = document.getElementById('analogView');
const dayModeButton = document.getElementById('dayMode');
const nightModeButton = document.getElementById('nightMode');

// Initialize Day Theme
document.body.classList.add('day');

// Update Clock
const updateClock = () => {
  const now = new Date();

  // Digital Clock
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');
  digitalClock.textContent = `${hours}:${minutes}:${seconds}`;

  // Analog Clock
  const hourDegrees = (now.getHours() % 12) * 30 + (now.getMinutes() / 2);
  const minuteDegrees = now.getMinutes() * 6;
  const secondDegrees = now.getSeconds() * 6;

  hourHand.style.transform = `translateX(-50%) rotate(${hourDegrees}deg)`;
  minuteHand.style.transform = `translateX(-50%) rotate(${minuteDegrees}deg)`;
  secondHand.style.transform = `translateX(-50%) rotate(${secondDegrees}deg)`;
};

// Toggle Views
digitalViewButton.addEventListener('click', () => {
  digitalClock.style.display = 'block';
  analogClock.style.display = 'none';
});

analogViewButton.addEventListener('click', () => {
  analogClock.style.display = 'block';
  digitalClock.style.display = 'none';
});

// Toggle Themes
dayModeButton.addEventListener('click', () => {
  document.body.classList.remove('night');
  document.body.classList.add('day');
});

nightModeButton.addEventListener('click', () => {
  document.body.classList.remove('day');
  document.body.classList.add('night');
});

// Update Clock Every Second
setInterval(updateClock, 1000);
