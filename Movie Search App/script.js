const API_KEY = '67e0461b'; // Replace with your OMDB API key
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const movieGrid = document.getElementById('movieGrid');

// Fetch movies from OMDB API
const fetchMovies = async (query) => {
  const response = await fetch(`https://www.omdbapi.com/?s=${query}&apikey=${API_KEY}`);
  const data = await response.json();
  return data.Search || [];
};

// Fetch detailed movie data
const fetchMovieDetails = async (id) => {
  const response = await fetch(`https://www.omdbapi.com/?i=${id}&apikey=${API_KEY}`);
  return response.json();
};

// Render movies
const renderMovies = (movies) => {
  movieGrid.innerHTML = '';
  movies.forEach(async (movie) => {
    const movieDetails = await fetchMovieDetails(movie.imdbID);
    const movieCard = document.createElement('div');
    movieCard.classList.add('movie-card');
    movieCard.innerHTML = `
      <img src="${movie.Poster !== 'N/A' ? movie.Poster : 'placeholder.jpg'}" alt="${movie.Title}">
      <h3>${movie.Title}</h3>
      <p><strong>Year:</strong> ${movie.Year}</p>
      <p><strong>Rating:</strong> ${movieDetails.imdbRating || 'N/A'}</p>
      <p><strong>Genre:</strong> ${movieDetails.Genre || 'N/A'}</p>
      <p><strong>Plot:</strong> ${movieDetails.Plot || 'N/A'}</p>
    `;
    movieGrid.appendChild(movieCard);
  });
};

// Search button event listener
searchButton.addEventListener('click', async () => {
  const query = searchInput.value.trim();
  if (!query) {
    alert('Please enter a movie title');
    return;
  }
  const movies = await fetchMovies(query);
  if (movies.length === 0) {
    movieGrid.innerHTML = '<p>No movies found.</p>';
  } else {
    renderMovies(movies);
  }
});
