// function addToCart(element) {
// 	let productParent = $(element).closest('div.product-item');

// 	let price = $(productParent).find('.price span').text();
// 	let productName = $(productParent).find('.productname').text();
// 	let quantity = $(productParent).find('.product-quantity').val();

// 	let cartItem = {
// 		productName: productName,
// 		price: price,
// 		quantity: quantity
// 	};
// 	let cartItemJSON = JSON.stringify(cartItem);

// let cartArray = new Array();
// 	// If javascript shopping cart session is not empty
// 	if (sessionStorage.getItem('shopping-cart')) {
// 		cartArray = JSON.parse(sessionStorage.getItem('shopping-cart'));
// 	}
// 	cartArray.push(cartItemJSON);

// 	let cartJSON = JSON.stringify(cartArray);
// 	sessionStorage.setItem('shopping-cart', cartJSON);
// 	showCartTable();

//     console.log(addToCart);
// }

// let cart = [];
        
// // Function to add an item to the cart
// function addToCart() {
//     const itemName = "Example Product";
//     const itemPrice = 19.99;

//     // Create an object representing the item
//     const item = {
//         name: itemName,
//         price: itemPrice
//     };

//     // Add the item to the cart array
//     cart.push(item);

//     // Update the cart display
//     updateCart();
// }

// // Function to update the cart display
// function updateCart() {
//     const cartList = document.getElementById("cart-items");
//     const cartTotal = document.getElementById("cart-total");
    
//     // Clear the existing cart items
//     cartList.innerHTML = "";

//     // Initialize the total price
//     let total = 0;

//     // Loop through the items in the cart and display them
//     cart.forEach(item => {
//         const listItem = document.createElement("li");
//         listItem.textContent = `${item.name} - $${item.price.toFixed(2)}`;
//         cartList.appendChild(listItem);
//         total += item.price;
//     });

//     // Update the total price
//     cartTotal.textContent = total.toFixed(2);
// }




const quantityInputs = document.querySelectorAll('input[name="quantity"]');


quantityInputs.forEach(input => {
  const incrementButton = input.nextElementSibling;
  const decrementButton = input.previousElementSibling;

  incrementButton.addEventListener('click', () => {
    input.stepUp();
    updateTotalPrice();
  });

  decrementButton.addEventListener('click', () => {
    input.stepDown();
    updateTotalPrice();
  });

  
  input.addEventListener('input', () => {
    updateTotalPrice();
  });
});


function updateTotalPrice() {
  const itemRows = document.querySelectorAll('.row.mb-4');
  let totalPrice = 0;

  itemRows.forEach(row => {
    const quantity = parseInt(row.querySelector('input[name="quantity"]').value, 10);
    const priceString = row.querySelector('.col-md-3.col-lg-2.col-xl-2.offset-lg-1 h6').textContent;
    const price = parseFloat(priceString.replace('₱', '').trim());

    totalPrice += quantity * price;

  });

  
  const totalPriceElement = document.querySelector('.d-flex.justify-content-between.mb-5 h5:last-child');
  totalPriceElement.textContent = '₱' + totalPrice.toFixed(2);

  
}


// let cart = [];

// // Function to add an item to the cart
// function addToCart() {
//     const itemName = "Example Product";
//     const itemPrice = 19.99;

//     // Check if the item is already in the cart
//     const existingItem = cart.find(item => item.name === itemName);

//     if (existingItem) {
//         // If the item exists, increase its quantity
//         existingItem.quantity += 1;
//     } else {
//         // If the item is not in the cart, add it
//         cart.push({
//             name: itemName,
//             price: itemPrice,
//             quantity: 1
//         });
//     }

//     // Update the cart display
//     updateCart();
// }

// // Function to remove an item from the cart
// function removeFromCart(itemName) {
//     const itemIndex = cart.findIndex(item => item.name === itemName);

//     if (itemIndex !== -1) {
//         // Remove the item from the cart
//         cart.splice(itemIndex, 1);
//     }

//     // Update the cart display
//     updateCart();
// }

// // Function to update the cart display
// function updateCart() {
//     const cartList = document.getElementById("cart-items");
//     const cartTotal = document.getElementById("cart-total");

//     // Clear the existing cart items
//     cartList.innerHTML = "";

//     // Initialize the total price
//     let total = 0;

//     // Loop through the items in the cart and display them
//     cart.forEach(item => {
//         const listItem = document.createElement("li");
//         listItem.textContent = `${item.name} x${item.quantity} - $${(item.price * item.quantity).toFixed(2)} `;
//         const removeButton = document.createElement("button");
//         removeButton.textContent = "Remove";
//         removeButton.addEventListener("click", () => removeFromCart(item.name));
//         listItem.appendChild(removeButton);
//         cartList.appendChild(listItem);
//         total += item.price * item.quantity;
//     });

//     // Update the total price
//     cartTotal.textContent = total.toFixed(2);
// }

function displayCart(){
  let totalPrice = 0;
  let getCart = JSON.parse(localStorage.getItem("myCart"));
  let showItems = "";
  let items = JSON.parse(localStorage.getItem("myCart"));
  document.getElementById('itemcount').innerHTML = items.length;
  getCart.forEach(
      function(items, index){
          let price = items.pPrice.toLocaleString('en-PH', {
              style: 'currency',
              currency: 'PHP'
          });
          showItems = 
          <div class="cartitem" id="cartitem">
          <img src=${items.pImg} id="itemimage">
          <h3 id="itemname">${items.pName}</h3>
          <p id="itemprice"> ${price}</p>
          <hr>
          </div> + showItems ;

          totalPrice += items.pPrice;
      }
  );
  let finalPrice = Number(totalPrice).toLocaleString('en-PH', {
      style: 'currency',
      currency: 'PHP'
      });
  document.getElementById('cartlist').innerHTML = showItems;
  document.getElementById('total').innerHTML = finalPrice;
  document.getElementById('subtotal').innerHTML = finalPrice;
}
displayCart();