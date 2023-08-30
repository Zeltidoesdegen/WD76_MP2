function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}
  
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}    

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