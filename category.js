import games from "../data/games.js";

document.addEventListener("DOMContentLoaded", function () {
  const categorySelect = document.getElementById("category");

  const categories = [...new Set(games.flatMap((game) => game.categories))];
  categories.unshift("all");

  categories.forEach((category) => {
    const option = document.createElement("option");
    option.value = category;
    option.text = category.charAt(0).toUpperCase() + category.slice(1);
    categorySelect.add(option);
  });

  categorySelect.addEventListener("change", () => {
    console.log("Category changed!");
    const selectedCategory = categorySelect.value;
    console.log(`Selected category: ${selectedCategory}`);
    displayGamesByCategory(selectedCategory);
  });

  displayGames();
});

function displayGamesByCategory(category) {
  const gameListContainer = document.getElementById("gameList");

  const filteredGames =
    category === "all"
      ? games
      : games.filter((game) =>
          game.categories.includes(category.toLowerCase())
        );

  gameListContainer.innerHTML = "";

  filteredGames.forEach((game) => {
    const gameCard = createGameCard(game);
    gameListContainer.appendChild(gameCard);
  });

  displayPagination();
}

function createGameCard(game) {
  const gameCard = document.createElement("div");
  gameCard.classList.add("game-card");

  const titleElement = document.createElement("h2");
  titleElement.textContent = game.title;

  const priceElement = document.createElement("p");
  priceElement.textContent = `Price: $${game.price.toFixed(2)}`;

  const categoryElement = document.createElement("p");
  categoryElement.textContent = `Category: ${game.categories.join(", ")}`;

  const imageElement = document.createElement("img");
  imageElement.src = game.image;
  imageElement.alt = game.title;

  const detailsLink = document.createElement("a");
  detailsLink.href = `gameDetails.html?id=${game.id}`;
  detailsLink.textContent = "View";
  detailsLink.classList.add("view-button");

  const buyButton = document.createElement("buy-button");
  buyButton.textContent = "Buy";
  buyButton.addEventListener("click", () => viewOrBuy(game.id, "buy"));

  gameCard.appendChild(titleElement);
  gameCard.appendChild(imageElement);
  gameCard.appendChild(priceElement);
  gameCard.appendChild(categoryElement);
  gameCard.appendChild(detailsLink);
  gameCard.appendChild(buyButton);

  return gameCard;
}

function viewOrBuy(gameId, action) {
  if (action === "view") {
    window.location.href = `gameDetails.html?id=${gameId}`;
  } else if (action === "buy") {
    const cartCountElement = document.getElementById("cartCount");
    if (cartCountElement) {
      let currentCount = parseInt(cartCountElement.textContent, 10) || 0;
      currentCount += 1;

      cartCountElement.textContent = currentCount;
    }
  }
}

function displayPagination() {
  const totalPages = Math.ceil(games.length / gamesPerPage);
  const paginationContainer = document.getElementById("pagination");
  paginationContainer.innerHTML = "";

  const prevButton = document.createElement("prev-button");
  prevButton.textContent = "Previous";
  prevButton.addEventListener("click", () => goToPage(currentPage - 1));
  paginationContainer.appendChild(prevButton);

  const nextButton = document.createElement("next-button");
  nextButton.textContent = "Next";
  nextButton.addEventListener("click", () => goToPage(currentPage + 1));
  paginationContainer.appendChild(nextButton);

  prevButton.disabled = currentPage === 1;

  nextButton.disabled = currentPage === totalPages;
}

function goToPage(page) {
  const totalPages = Math.ceil(games.length / gamesPerPage);
  if (page >= 1 && page <= totalPages) {
    currentPage = page;
    displayGames();
  }
}
