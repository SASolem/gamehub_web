import games from "../data/games.js";

document.addEventListener("DOMContentLoaded", function () {
  function displayGames() {
    const gameListContainer = document.getElementById("gameList");

    const sixGames = games.slice(0, 6);

    sixGames.forEach((game) => {
      const gameCard = createGameCard(game);
      gameListContainer.appendChild(gameCard);
    });
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

  document.addEventListener("DOMContentLoaded", function () {
    // Your code here
    function viewOrBuy(gameId, action) {
      console.log("Action: " + action); // Log the action
      if (action === "view") {
        console.log("Redirecting to ./pages/gameDetails.html");
        window.location.href = `./pages/gameDetails.html?id=${gameId}`;
      } else if (action === "buy") {
        const cartCountElement = document.getElementById("cartCount");
        if (cartCountElement) {
          let currentCount = parseInt(cartCountElement.textContent, 10) || 0;
          currentCount += 1;
          cartCountElement.textContent = currentCount;
        }
      }
    }
    
  });
  

  displayGames();
});
