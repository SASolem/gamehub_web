function toggleNav() {
  var nav = document.querySelector(".navContainer ul");
  nav.classList.toggle("show");
}

document.addEventListener("DOMContentLoaded", function () {
  var hamburgerButton = document.getElementById("hamburgerButton");
  if (hamburgerButton) {
    hamburgerButton.addEventListener("click", toggleNav);
  }
});
