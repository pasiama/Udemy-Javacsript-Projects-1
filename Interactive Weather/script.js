const API_KEY = 'fd01f7d191e64e705023a40be04229ed'; // Replace with your OpenWeather API key
const searchButton = document.getElementById('searchButton');
const cityInput = document.getElementById('cityInput');
const weatherDisplay = document.getElementById('weatherDisplay');
const tempToggle = document.getElementById('tempToggle');
const lat = 33.44;

let lon = 90; // Replace with your desired longitude if available
let isFahrenheit = false;

const fetchWeather = async (city) => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${API_KEY}`
    );
    if (!response.ok) throw new Error('City not found');
    const data = await response.json();
    displayWeather(data);
  } catch (error) {
    weatherDisplay.innerHTML = `<p class="error">${error.message}</p>`;
  }
};

const displayWeather = (data) => {
  const { name, main, weather, wind } = data;
  const temperature = isFahrenheit
    ? (main.temp * 9) / 5 + 32
    : main.temp;
  const tempUnit = isFahrenheit ? '°F' : '°C';

  weatherDisplay.innerHTML = `
    <div class="weather-card">
      <h2>${name}</h2>
      <img src="https://openweathermap.org/img/wn/${weather[0].icon}@2x.png" alt="${weather[0].description}">
      <p>${weather[0].description.toUpperCase()}</p>
      <p><strong>Temperature:</strong> ${temperature.toFixed(1)} ${tempUnit}</p>
      <p><strong>Humidity:</strong> ${main.humidity}%</p>
      <p><strong>Wind Speed:</strong> ${wind.speed} m/s</p>
    </div>
  `;
};

searchButton.addEventListener('click', () => {
  const city = cityInput.value.trim();
  if (city) fetchWeather(city);
});

tempToggle.addEventListener('change', () => {
  isFahrenheit = tempToggle.checked;
  const city = cityInput.value.trim();
  if (city) fetchWeather(city);
});
