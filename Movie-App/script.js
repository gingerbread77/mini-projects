const API_KEY = "api_key=c36be69df6e4a467ab2ce010cd9813d9";
const API_URL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&${API_KEY}`;
const IMG_URL = "https://image.tmdb.org/t/p/w500";
const searchURL = `https://api.themoviedb.org/3/search/movie?${API_KEY}&query="`;

const mainContent = document.querySelector(".main-content");
const form = document.getElementById("form");
const input = document.querySelector(".search");

async function getMovies(url) {
  try {
    const res = await fetch(url);
    const data = await res.json();
    displayMovies(data.results);
  } catch (error) {
    console.error("Error:", error);
  }
}

function displayMovies(data) {
  // clear the content before rendering
  mainContent.textContent = "";

  // display message when no movies found
  if (data.length === 0) {
    const resultMessage = document.createElement("div");
    resultMessage.innerHTML = "<p>Sorry, no result found!</p>";
    resultMessage.classList.add("result-message");
    mainContent.appendChild(resultMessage);
  } else {
    data.forEach((movie) => {
      // object destructure
      const { title, poster_path, vote_average, overview } = movie;
      const movieEle = document.createElement("div");
      movieEle.classList.add("movie");
      movieEle.innerHTML = `
      <img src=${IMG_URL + poster_path} alt="movie-image">
      <div class="movie-info">
        <h3>${title}</h3>
        <span class="${getMovieRatingColor(
          vote_average
        )}">${vote_average}</span>
      </div>
      <div class="overview">
      <h3>Overview</h3>
      <p id="description">${overview}</p>
      </div>
    `;
      mainContent.appendChild(movieEle);
    });
  }
}

function getMovieRatingColor(vote) {
  if (vote >= 8) {
    return "green";
  } else if (vote >= 5) {
    return "orange";
  } else {
    return "red";
  }
}

getMovies(API_URL);

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const searchContent = input.value;
  if (searchContent && searchContent.trim() !== "") {
    getMovies(searchURL + searchContent.trim());
  } else {
    getMovies(API_URL);
  }
  // clear the input bar
  input.value = "";
});
