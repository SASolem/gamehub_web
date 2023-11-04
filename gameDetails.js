import games from "../data/games.js";

document.addEventListener("DOMContentLoaded", function () {
  function getGameIdFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    return parseInt(urlParams.get("id"), 10);
  }

  function displayGameDetails() {
    const gameId = getGameIdFromUrl();
    const game = getGameById(gameId);

    if (game) {
      const gameDetailsContainer = document.getElementById(
        "gameDetailsContainer"
      );

      const titleElement = document.createElement("h2");
      titleElement.textContent = game.title;

      const imageElement = document.createElement("img");
      imageElement.src = game.image;
      imageElement.alt = `Cover for ${game.title}`;

      const releaseDateElement = document.createElement("p");
      releaseDateElement.textContent = `Date Release: ${
        game.releaseDate || "Not Available"
      }`;

      const categoriesElement = document.createElement("p");
      categoriesElement.textContent = `Categories: ${game.categories.join(
        ", "
      )}`;

      const descriptionElement = document.createElement("p");
      descriptionElement.textContent = `Description: ${game.description}`;

      const priceElement = document.createElement("p");
      priceElement.textContent = `Price: $${game.price.toFixed(2)}`;

      const addToCartButton = document.createElement("button");
      addToCartButton.classList.add("add-to-cart-button");
      addToCartButton.textContent = "Get";
      addToCartButton.addEventListener("click", () => addToCart(game.id));

      const likeButton = document.createElement("span");
      likeButton.id = "likeButton";
      likeButton.classList.add("like-button");
      likeButton.textContent = "👍 Like";
      likeButton.addEventListener("click", toggleLike);

      gameDetailsContainer.appendChild(titleElement);
      gameDetailsContainer.appendChild(imageElement);
      gameDetailsContainer.appendChild(releaseDateElement);
      gameDetailsContainer.appendChild(categoriesElement);
      gameDetailsContainer.appendChild(descriptionElement);
      gameDetailsContainer.appendChild(priceElement);
      gameDetailsContainer.appendChild(addToCartButton);
      gameDetailsContainer.appendChild(likeButton);
    } else {
      console.error("Game not found");
    }
  }

  function getGameById(gameId) {
    return games.find((game) => game.id === gameId);
  }

  function addToCart(gameId) {
    const cartCountElement = document.getElementById("cartCount");
    if (cartCountElement) {
      let currentCount = parseInt(cartCountElement.textContent, 10) || 0;
      currentCount += 1;

      cartCountElement.textContent = currentCount;
    }

    console.log(`Added game with ID ${gameId} to cart`);
  }

  function toggleLike() {
    var likeButton = document.getElementById("likeButton");
    likeButton.classList.toggle("liked");
    if (likeButton.classList.contains("liked")) {
      likeButton.innerHTML = "❤ Liked";
    } else {
      likeButton.innerHTML = "👍 Like";
    }
  }

  function goBack() {
    window.location.href = "/";
  }

  displayGameDetails();

  const backButton = document.querySelector(".backButton");
  if (backButton) {
    backButton.addEventListener("click", goBack);
  }
});
