// const productsContainer = document.querySelector(".product-placing");

// fetch("./products.json")
//   .then((response) => response.json())
//   .then((data) => {

//   })

// async function fetchAndGenerateProducts(category) {
//   fetch(`./${category}.json`)
//     .then((response) => response.json())
//     .then((data) => {
//       productsContainer.innerHTML = "";

//       const limit = 30;
//       const limitedData = data.slice(0, limit);
//       limitedData.forEach(item => {
//         const productDiv = document.createElement("div");
//         productDiv.className = "col-lg-4 col-md-6"; 

//         productDiv.innerHTML = `
          // <div class="card d-flex flex-column align-items-center h-100">
          //   <div class="product-name text-center">${item.name}</div>
          //   <div class="card-img">
          //     <img src="${item.img}" alt="${item.name}" />
          //   </div>
          //   <div class="card-body pt-5">
          //     <div class="d-flex align-items-center price">
          //       <div class="font-weight-bold">${item.price}</div>
          //     </div>
          //   </div>
          //   <div class="card-footer border-0" style="background-color: transparent;">
          //     <button class="btn btn-primary" type="button">Buy Now</button>
          //     <button class="btn btn-primary" type="button">Add to Cart</button>
          //   </div>
          // </div>
//         `;

//         productsContainer.appendChild(productDiv);
//       });
//     })
//     .catch(error => {
//       console.error("Error fetching data:", error);
//     });
// }

// function handleRadioButtonChange() {
//   const selectedCategory = document.querySelector("input[name='product-category']:checked").value;
//   fetchAndGenerateProducts(selectedCategory);
// }

// const radioButtons = document.querySelectorAll("input[name='product-category']");
// radioButtons.forEach(radioButton => {
//   radioButton.addEventListener("change", handleRadioButtonChange);
// });

// handleRadioButtonChange();


function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}
  
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}    

// console.log(window.location.pathname)
// const global = {
//   currentPage: window.location.pathname,

// };

// function init() {
//   switch(global.currentPage) {
//     case "/index.html":
//       console.log("Home");
//       break;
//     case "/cart.html":
//       console.log("Cart");
//       break;
//     case "/categories.html":
//       console.log("Categories");
//       break;
//   }
// }

var current_page = 1;
var records_per_page = 30;
var objJson = []; // To store the fetched JSON data

function prevPage() {
  if (current_page > 1) {
    current_page--;
    changePage(current_page);
  }
}

function nextPage() {
  if (current_page < numPages()) {
    current_page++;
    changePage(current_page);
  }
}

function changePage(page) {
  var btn_next = document.getElementById("btn_next");
  var btn_prev = document.getElementById("btn_prev");
  var page_span = document.getElementById("page_num");

  // Validate page
  if (page < 1) page = 1;
  if (page > numPages()) page = numPages();

  fetchAndGenerateProducts(objJson, page);

  page_span.innerHTML = page;

  btn_prev.style.visibility = page === 1 ? "hidden" : "visible";
  btn_next.style.visibility = page === numPages() ? "hidden" : "visible";
}

function numPages() {
  return Math.ceil(objJson.length / records_per_page);
}

async function fetchAndGenerateProducts(data, page) {
  productsContainer.innerHTML = "";

  const startIdx = (page - 1) * records_per_page;
  const endIdx = startIdx + records_per_page;

  const limitedData = data.slice(startIdx, endIdx);
  limitedData.forEach(item => {
    const productDiv = document.createElement("div");
    productDiv.className = "col-lg-4 col-md-6";

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
          <button class="btn btn-primary" type="button" onclick="addCart('${item.name}', ${item.price}, '${item.img}')">Add to Cart</button>
        </div>
      </div>
    `;

    productsContainer.appendChild(productDiv);
  });
}

function handleRadioButtonChange() {
  const selectedCategory = document.querySelector("input[name='product-category']:checked").value;
  fetch(`./${selectedCategory}.json`)
    .then(response => response.json())
    .then(data => {
      objJson = data;
      current_page = 1; // Reset current page to 1
      changePage(1); // Call changePage after fetching data
    })
    .catch(error => {
      console.error("Error fetching JSON data:", error);
    });
}

const radioButtons = document.querySelectorAll("input[name='product-category']");
radioButtons.forEach(radioButton => {
  radioButton.addEventListener("change", handleRadioButtonChange);
});

const productsContainer = document.querySelector(".product-placing");
handleRadioButtonChange();

var prevButton = document.getElementById("btn_prev");
var nextButton = document.getElementById("btn_next");

prevButton.addEventListener("click", prevPage);
nextButton.addEventListener("click", nextPage);

let cart = [];

if (localStorage.getItem("myCart")){
    cart = JSON.parse(localStorage.getItem("myCart"));
}

function addCart(name, price, img) {
    alert("Sucessfully Added to Cart");
    cart.push({pName: name, pPrice: price, pImg: img});

    localStorage.setItem("myCart", JSON.stringify(cart));

}