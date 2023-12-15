menuItemsHTML();
reviewsHTML();

function menuItemsHTML() {
  let bodyelement = document.querySelector('.menu-items-list');
  pizzaItems.forEach(pizzaitem => {
    bodyelement.innerHTML += `<div class="menu-item-container">
    <div class="item-image-div"><img class="item-image" src=${pizzaitem.image} alt="imagenotfound"></div>
    <div class="item-name">
      ${pizzaitem.productName}
    </div>
    <div class="item-description">${pizzaitem.productDescription}</div>
    <div class="item-rating">⭐${pizzaitem.productRatings}</div>
    <button class="item-order-button">Order Now</button>
  </div>`
  });
 
}

function reviewsHTML() {
  let bodyelement = document.querySelector('.reviews');
  pizzaReviews.forEach(pizzareview => {
    bodyelement.innerHTML += `<div class="review-container">
    <div class="review-text">${pizzareview.reviewText}</div>
    <div>
    <div class="review-stars">⭐${pizzareview.rating}</div>
    <div class="review-customer">${pizzareview.name}</div>
    </div>
  </div>`
  });
 
}