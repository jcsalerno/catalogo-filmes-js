const searchButton = document.getElementById("search-button");
const overlay = document.getElementById("modal-overlay");

function searchButtonClickHandler() {
  overlay.classList.add("open");
}

searchButton.addEventListener("click", searchButtonClickHandler);
