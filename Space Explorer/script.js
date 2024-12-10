const API_KEY = 'i4KHg2OGNh5UHJA0JQ1RDNWXbuQKAeYQgjtLY7y9'; // Replace with your NASA API key
const planets = document.querySelectorAll('.planet');
const planetName = document.getElementById('planetName');
const planetFact = document.getElementById('planetFact');

// Fetch fun facts from NASA API
const fetchPlanetFacts = async (planet) => {
  try {
    const response = await fetch(
      `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`
    );
    const data = await response.json();
    return `Did you know? ${data.explanation}`;
  } catch (error) {
    return `Oops! We couldn't fetch data for ${planet}. Please try again later.`;
  }
};

// Update fact section
const displayFact = async (planet) => {
  planetName.textContent = planet;
  planetFact.textContent = 'Loading...';
  const fact = await fetchPlanetFacts(planet);
  planetFact.textContent = fact;
};

// Add event listeners to planets
planets.forEach((planet) => {
  planet.addEventListener('click', () => {
    const planetName = planet.dataset.planet;
    displayFact(planetName);
  });
});
