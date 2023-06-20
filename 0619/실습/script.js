
const addToCartBtn = document.querySelectorAll(".add-to-cart");
const cartItemsList = document.querySelector(".cart-items");

//console.log(addToCartBtn);

// 반복문으로 버튼을 구분한다.
addToCartBtn.forEach((button) => {
  button.addEventListener("click", () => {
      const productName = button.previousElementSibling.previousElementSibling.textContent;
      const productPrice = button.previousElementSibling.textContent;
      addToCart(productName, productPrice);
    } 
  )
})

function addToCart(name, price) {
  const cartItem = document.createElement("li");
  cartItem.textContent = `${name} - ${price}`
  cartItemsList.appendChild(cartItem)
}

////////////////////////////////
