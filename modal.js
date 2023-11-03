const background = document.getElementById("modal-background");

function backgroundClickHandler() {
  overlay.classList.remove("open");
}

background.addEventListener("click", backgroundClickHandler);
