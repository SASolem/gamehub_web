import games from "./data/games.js";

document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.querySelector(".searchContainer input");
  const searchButton = document.querySelector(".searchContainer button");
  const resultsContainer = document.querySelector(".searchResults");

  searchButton.addEventListener("click", performSearch);
  searchInput.addEventListener("input", updateResults);

  function performSearch() {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredGames = filterGames(searchTerm);
    displayFilteredGames(filteredGames);
    openModal();
  }

  function filterGames(searchTerm) {
    return games.filter((game) => {
      return game.title.toLowerCase().startsWith(searchTerm);
    });
  }

  function displayFilteredGames(filteredGames) {
    resultsContainer.innerHTML = "";
    if (filteredGames.length === 0) {
      resultsContainer.innerHTML = "<li>No results found.</li>";
      return;
    }

    const resultList = document.createElement("ul");
    filteredGames.forEach((game) => {
      const listItem = document.createElement("li");
      listItem.textContent = game.title;
      resultList.appendChild(listItem);
    });

    resultsContainer.appendChild(resultList);
  }

  function updateResults() {
    const searchTerm = searchInput.value.toLowerCase();
    if (searchTerm === "") {
      resultsContainer.innerHTML = "";
    } else {
      const filteredGames = filterGames(searchTerm);
      displayFilteredGames(filteredGames);
    }
  }

  function openModal() {
    document.getElementById("modalContainer").style.display = "flex";
  }

  function closeModal() {
    document.getElementById("modalContainer").style.display = "none";
  }
});
