const addToCartBtns = document.querySelectorAll('.add-to-cart');
const cartItemList = document.querySelector('.cart-items');

addToCartBtns.forEach((button) => {
  button.addEventListener('click', () => {
    const productName = button.previousElementSibling.previousElementSibling.textContent;
    const productPrice = button.previousElementSibling.textContent;
    addToCart(productName, productPrice);
  });
});

function addToCart(name, price) {
  const cartItem = document.createElement('li');
  cartItem.textContent = `${name} - ${price}`;
  cartItemList.appendChild(cartItem);
}
