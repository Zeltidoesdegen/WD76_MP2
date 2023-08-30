const productsContainer = document.querySelector(".product-placing");

fetch("./mobile.json")
  .then((response) => response.json())
  .then((data) => {
    console.log(data); // Log the fetched JSON data

    // Loop through each item in the fetched JSON data
    data.forEach(item => {
      const productDiv = document.createElement("div");
      productDiv.className = "col-lg-4 col-md-6"; // Set the class name for styling
      
      // Create the card structure
      productDiv.innerHTML = `
        <div class="card d-flex flex-column align-items-center h-100">
          <div class="product-name text-center">${item.name}</div>
          <div class="card-img">
            <img src="${item.img}" alt="${item.name}" />
          </div>
          <div class="card-body pt-5">
            <div class="d-flex align-items-center price">
              <div class="font-weight-bold">${item.price}</div>
            </div>
          </div>
          <div class="card-footer border-0" style="background-color: transparent;">
            <button class="btn btn-primary" type="button">Buy Now</button>
            <button class="btn btn-primary" type="button">Add to Cart</button>
          </div>
        </div>
      `;
      
      // Append the created card to the products container
      productsContainer.appendChild(productDiv);
    });
  })
  .catch(error => {
    console.error("Error fetching data:", error);
  });



function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}
  
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}    

console.log(window.location.pathname)
const global = {
  currentPage: window.location.pathname,

};

function init() {
  switch(global.currentPage) {
    case "/index.html":
      console.log("Home");
      break;
    case "/cart.html":
      console.log("Cart");
      break;
    case "/categories.html":
      console.log("Categories");
      break;
  }
}

document.addEventListener("DOMContentLoaded", init)