menuItemsHTML();
let menuItemsInnerText

function menuItemsHTML() {
  let bodyelement = document.querySelector('.menu-items-list');
  pizzaItems.forEach(pizzaitem => {
    bodyelement.innerHTML += `<div class="menu-item-container">
    <div class="item-image-div"><img class="item-image" src="images/main-image.jpg" alt="imagenotfound"></div>
    <div class="item-name">
      ${pizzaitem.productName}
    </div>
    <div class="item-description">${pizzaitem.productDescription}</div>
    <div class="item-rating">⭐${pizzaitem.productRatings}</div>
    <button class="item-order-button">Order Now</button>
  </div>`
  });
 
}