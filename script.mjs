// script.mjs
import { apiKey } from "./config.js";

const searchButton = document.getElementById("search-button");
const overlay = document.getElementById("modal-overlay");
const movieName = document.getElementById("movie-name");
const movieYear = document.getElementById("movie-year");

async function searchButtonClickHandler() {
  let url = `http://www.omdbapi.com/?apikey=${apiKey}&t=${movieName.value
    .split(" ")
    .join("+")}&y=${movieYear.value}`;

  const response = await fetch(url);
  const data = await response.json();
  overlay.classList.add("open");
}

searchButton.addEventListener("click", searchButtonClickHandler);
