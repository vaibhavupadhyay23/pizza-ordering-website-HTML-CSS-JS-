let cartvisibility=0;
loadcartQuantityObjects();
displayCartItems();
cartHeadingElement();
cartTotalAmount();
function showCart(){
 if (cartvisibility===0){
  document.querySelector('.cart-box').style.visibility='visible';
  document.querySelector('.cart-box').style.opacity=1;
  cartvisibility = 1}
  else{
    document.querySelector('.cart-box').style.visibility='hidden';
    document.querySelector('.cart-box').style.opacity=0;
    cartvisibility=0;
  }
  cartHeadingElement();
}

function loadcartQuantityObjects(){
  cartQuantityObjects = cartQuantity.map(itemid =>{
    for(let i=0; i<pizzaItems.length;i++){
      if(itemid == pizzaItems[i].productId){
        return pizzaItems[i];
      }
    }
  })
  console.log(cartQuantityObjects);
}

function displayCartItems(){
  let i=0;
  let innerhtmlcode='';
  let bodyelement = document.querySelector('.cart-box-elements')
  cartQuantityObjects.forEach(element => {
        console.log(i);
        innerhtmlcode += `<div class="cart-box-elements-item">
        <div class="cart-box-elements-item-imageContainer">
          <img class="cart-box-elements-item-image" src="${element.image}" alt="">
        </div>
        <div class="cart-box-elements-item-itemdetails">
          <div class="cart-box-elements-item-name">${element.productName}</div>
          <div class="cart-box-elements-item-price">Price-₹${element.productPrice}</div>
          <div class="cart-box-elements-item-quantity">Quantity-1</div>
          <div class="cart-box-elements-item-finalamount">
            <div class="cart-item-finalprice">₹${element.productPrice}</div>
            <div class="cart-item-addremove">
              <div class="cart-item-add"><i class="plus-circle"  data-lucide="plus-circle"></i>
                <i class="minus-circle" data-lucide="minus-circle"></i></div>
              <div><button class="cart-item-remove" onclick="removeItem(${i}); cartTotalAmount();">Remove Item</button></div>
            </div>
          </div>
        </div>
      </div>`;
      i++;
  }
  );
  bodyelement.innerHTML = innerhtmlcode;
}

function removeItem(index){
  cartQuantity.splice(index,1);
  localStorage.removeItem('cartQuantity');
  localStorage.setItem('cartQuantity',JSON.stringify(cartQuantity));
  loadcartQuantityObjects();
  displayCartItems();
  cartUpdate();
  cartHeadingElement();
}

function cartHeadingElement(){
  let cartnumber = cartQuantity.length;
  if(!cartnumber){
    document.querySelector('.cart-box-heading').innerText='Wow! So Empty!';
    document.querySelector('.cart-total').style.visibility='hidden';
  } else {
    document.querySelector('.cart-box-heading').innerText='Wow! Your Cart Looks Tasty';
    document.querySelector('.cart-total').style.visibility='visible';
  }
}

function cartTotalAmount(){
  let totalCartValue = 0
  let i=0
  cartQuantityObjects.forEach(element => {
    i=element.productPrice*1000
    totalCartValue += i;
  });
  totalCartValue=totalCartValue/1000;
  document.querySelector('.cart-total-amount').innerText=`₹${totalCartValue}`;
}
