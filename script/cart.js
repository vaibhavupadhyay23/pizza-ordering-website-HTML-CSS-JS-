let cartvisibility=0;
function showCart(){

 if (cartvisibility===0){
  document.querySelector('.cart-box').style.opacity=1;
  cartvisibility = 1}
  else{
    document.querySelector('.cart-box').style.opacity=0;
    cartvisibility=0;
  }

}
