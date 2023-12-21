menuItemsHTML();
reviewsHTML();
cartUpdate();

console.log(cartQuantity.length);

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
    <div class="item-price">₹${pizzaitem.productPrice}</div>
    <button class="item-order-button" onclick="cartUpdateQuantity(${pizzaitem.productId}); loadcartQuantityObjects(); displayCartItems(); cartHeadingElement(); cartTotalAmount();">Order Now</button>
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

function cartUpdate(){
  let cartQuantityLength = cartQuantity.length;
  cartQuantity = JSON.parse(localStorage.getItem('cartQuantity')) || 0;
  let cartQuantityElement = document.querySelector('.cart-quantity');
  if(cartQuantityLength){
    cartQuantityElement.style.opacity=1;
  } if(cartQuantityLength===0){
    cartQuantityElement.style.opacity=0;
  }
  cartQuantityElement.innerHTML=cartQuantityLength;

}

function cartUpdateQuantity(id){
  cartQuantity = JSON.parse(localStorage.getItem('cartQuantity')) || [];
  cartQuantity.push(id);
  let cartQuantityElement = document.querySelector('.cart-quantity');
  cartQuantityElement.innerHTML=cartQuantity;
  localStorage.setItem('cartQuantity',JSON.stringify(cartQuantity));
  cartUpdate();
  console.log(cartQuantity);
}

