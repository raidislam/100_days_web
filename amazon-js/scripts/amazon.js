import { cart, addToCart } from "../data/cart.js";
import { products } from "../data/products.js";

let productHTML = "";

products.forEach((product) => {
  productHTML += `
  
  <div class="product-container">
  <div class="product-image-container">
    <img class="product-image"
      src="${product.image}">
  </div>

  <div class="product-name limit-text-to-2-lines">
    ${product.name}
  </div>

  <div class="product-rating-container">
    <img class="product-rating-stars"
      src="images/ratings/rating-${product.rating.stars * 10}.png">
    <div class="product-rating-count link-primary">
      ${product.rating.count}
    </div>
  </div>

  <div class="product-price">
    $${(product.priceCents / 100).toFixed(2)}
  </div>

  <div class="product-quantity-container">
    <select>
      <option selected value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
      <option value="6">6</option>
      <option value="7">7</option>
      <option value="8">8</option>
      <option value="9">9</option>
      <option value="10">10</option>
    </select>
  </div>

  <div class="product-spacer"></div>

  <div class="added-to-cart">
    <img src="images/icons/checkmark.png">
    Added
  </div>

  <button class="add-to-cart-button button-primary js-add-to-cart"
  data-product-id="${product.id}" data-product-name="${product.name}">
    Add to Cart
  </button>
</div>  
  `;
});

const productGrid = (document.querySelector(".js-products-grid").innerHTML =
  productHTML);

const updateCartQuantity = function () {
  const jsCartQuantity = document.querySelector(".js-cart-quantity");

  let totalCartItem = 0;
  cart.forEach((cartItem) => {
    totalCartItem = totalCartItem + cartItem.quantity;
  });
  jsCartQuantity.innerHTML = totalCartItem;
};

function handleCartFunction(btnElement) {
  const productId = btnElement.dataset.productId;
  const productName = btnElement.dataset.productName;

  // ADD TO CART PRODUCT
  addToCart(productName, productId);

  // Call Calculate Function
  updateCartQuantity();
}

// addEventListener to Button

document.querySelectorAll(".js-add-to-cart").forEach((button) => {
  console.log(button);
  button.setAttribute("type", "button");
  button.addEventListener("click", () => handleCartFunction(button));
});
