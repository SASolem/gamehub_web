document.addEventListener("DOMContentLoaded", function () {
  displayCartItems();
  addToCart({ id: 1, title: "Product 1", price: 20.0, image: "product1.jpg", quantity: 1 });
});

function displayCartItems() {
  const cartItemsContainer = document.getElementById("cartItems");
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  cartItemsContainer.innerHTML = "";

  let subtotal = 0;

  if (cart.length === 0) {
    const emptyCartMessage = document.createElement("p");
    emptyCartMessage.textContent = "Your cart is empty.";
    cartItemsContainer.appendChild(emptyCartMessage);
  } else {
    cart.forEach((item, index) => {
      const cartItemElement = createCartItemElement(item, index);
      cartItemsContainer.appendChild(cartItemElement);
      subtotal += item.price * item.quantity;
    });
  }

  displayTotal(subtotal);
}

function createCartItemElement(item, index) {
  const cartItemElement = document.createElement("div");
  cartItemElement.classList.add("cart-item");

  const img = document.createElement("img");
  img.src = item.image;

  const details = document.createElement("div");
  details.innerHTML = `<strong>${item.title}</strong><br>Price: $${item.price.toFixed(2)}<br>Quantity: ${item.quantity}`;

  const buttons = document.createElement("div");

  const incrementButton = document.createElement("button");
  incrementButton.textContent = "+";
  incrementButton.addEventListener("click", () => incrementQuantity(item.id));
  buttons.appendChild(incrementButton);

  const decrementButton = document.createElement("button");
  decrementButton.textContent = "-";
  decrementButton.addEventListener("click", () => decrementQuantity(item.id));
  buttons.appendChild(decrementButton);

  const removeButton = document.createElement("button");
  removeButton.textContent = "Remove";
  removeButton.addEventListener("click", () => removeItemFromCart(item.id));
  buttons.appendChild(removeButton);

  cartItemElement.appendChild(img);
  cartItemElement.appendChild(details);
  cartItemElement.appendChild(buttons);

  return cartItemElement;
}

function incrementQuantity(itemId) {
  let cart = getCart();
  let item = cart.find((i) => i.id === itemId);

  if (item) {
    item.quantity += 1;
    item.totalPrice = item.price * item.quantity;
    saveCart(cart);
    displayCartItems();
  }
}

function decrementQuantity(itemId) {
  let cart = getCart();
  let item = cart.find((i) => i.id === itemId);

  if (item && item.quantity > 1) {
    item.quantity -= 1;
    item.totalPrice = item.price * item.quantity;
    saveCart(cart);
    displayCartItems();
  }
}

function removeItemFromCart(itemId) {
  let cart = getCart();
  cart = cart.filter((item) => item.id !== itemId);
  saveCart(cart);
  displayCartItems();
}

function displayTotal(subtotal) {
  const totalContainer = document.getElementById("total");
  totalContainer.innerHTML = `Subtotal: $${subtotal.toFixed(2}`;

  const checkoutButton = document.createElement("button");
  checkoutButton.textContent = "Checkout";
  checkoutButton.addEventListener("click", checkout);
  totalContainer.appendChild(checkoutButton);

  const clearButton = document.createElement("button");
  clearButton.textContent = "Clear Cart";
  clearButton.addEventListener("click", clearCart);
  totalContainer.appendChild(clearButton);
}

function checkout() {
  alert("Redirecting to checkout page...");
}

function clearCart() {
  localStorage.removeItem("cart");
  displayCartItems();
}

function getCart() {
  return JSON.parse(localStorage.getItem("cart")) || [];
}

function saveCart(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
}
