document.addEventListener("DOMContentLoaded", function () {
    var filterBtn = document.getElementById('filter-btn');
    var btnTxt = document.getElementById('btn-txt');
    var filterAngle = document.getElementById('filter-angle');
    var icon = document.getElementById('icon');

    const outerButton = document.getElementById('out');
    const innerBox = document.getElementById('inner-box');

    const seasonButton = document.querySelector('#inner-box2 + .box-label button');
    const innerBox2 = document.getElementById('inner-box2');

    const priceButton = document.getElementById('priceButton');
    const priceCollapse = document.getElementById('price');

    outerButton.addEventListener('click', function () {
      if (innerBox.classList.contains('show')) {
        innerBox.classList.remove('show');
      } else {
        innerBox.classList.add('show');
      }
    });

    seasonButton.addEventListener('click', function () {
      if (innerBox2.classList.contains('show')) {
        innerBox2.classList.remove('show');
      } else {
        innerBox2.classList.add('show');
      }
    });

    priceButton.addEventListener('click', function () {
      if (priceCollapse.classList.contains('show')) {
        priceCollapse.classList.remove('show');
      } else {
        priceCollapse.classList.add('show');
      }
    });

    $('#filterbar').collapse('hide');
    var count = 0,
      count2 = 0;

    function changeBtnTxt() {
      $('#filterbar').collapse('show');
      count++;
      if (count % 2 !== 0) {
        filterAngle.classList.add("fa-angle-right");
        btnTxt.innerText = "Show filters";
        filterBtn.style.backgroundColor = "#36a31b";
      } else {
        filterAngle.classList.remove("fa-angle-right");
        btnTxt.innerText = "Hide filters";
        filterBtn.style.backgroundColor = "#ff935d";
      }
    }

    // For Applying Filters
    $('#inner-box').collapse('hide');
    $('#inner-box2').collapse('hide');

    function chnageIcon() {
      count2++;
      if (count2 % 2 !== 0) {
        icon.innerHTML = '<span class="far fa-times-circle" style="width:100%"></span>';
        icon.style.paddingTop = "5px";
        icon.style.paddingBottom = "5px";
        icon.style.fontSize = "1.8rem";
      } else {
        icon.innerHTML = '<span class="navbar-toggler-icon"></span>';
        icon.style.paddingTop = "5px";
        icon.style.paddingBottom = "5px";
        icon.style.fontSize = "1.2rem";
      }
    }

    // Showing tooltip for AVAILABLE COLORS
    $('[data-tooltip="tooltip"]').tooltip();

    // For Range Sliders
    var inputLeft = document.getElementById("input-left");
    var inputRight = document.getElementById("input-right");

    var thumbLeft = document.querySelector(".slider > .thumb.left");
    var thumbRight = document.querySelector(".slider > .thumb.right");
    var range = document.querySelector(".slider > .range");

    var amountLeft = document.getElementById('amount-left');
    var amountRight = document.getElementById('amount-right');

    function setLeftValue() {
      var _this = inputLeft,
        min = parseInt(_this.min),
        max = parseInt(_this.max);

      _this.value = Math.min(parseInt(_this.value), parseInt(inputRight.value) - 1);

      var percent = ((_this.value - min) / (max - min)) * 100;

      thumbLeft.style.left = percent + "%";
      range.style.left = percent + "%";
      amountLeft.innerText = parseInt(percent * 100);
    }
    setLeftValue();

    function setRightValue() {
      var _this = inputRight,
        min = parseInt(_this.min),
        max = parseInt(_this.max);

      _this.value = Math.max(parseInt(_this.value), parseInt(inputLeft.value) + 1);

      var percent = ((_this.value - min) / (max - min)) * 100;

      amountRight.innerText = parseInt(percent * 100);
      thumbRight.style.right = (100 - percent) + "%";
      range.style.right = (100 - percent) + "%";
    }
    setRightValue();

    inputLeft.addEventListener("input", setLeftValue);
    inputRight.addEventListener("input", setRightValue);

    inputLeft.addEventListener("mouseover", function () {
      thumbLeft.classList.add("hover");
    });
    inputLeft.addEventListener("mouseout", function () {
      thumbLeft.classList.remove("hover");
    });
    inputLeft.addEventListener("mousedown", function () {
      thumbLeft.classList.add("active");
    });
    inputLeft.addEventListener("mouseup", function () {
      thumbLeft.classList.remove("active");
    });

    inputRight.addEventListener("mouseover", function () {
      thumbRight.classList.add("hover");
    });
    inputRight.addEventListener("mouseout", function () {
      thumbRight.classList.remove("hover");
    });
    inputRight.addEventListener("mousedown", function () {
      thumbRight.classList.add("active");
    });
    inputRight.addEventListener("mouseup", function () {
      thumbRight.classList.remove("active");
    });
  });

  // Price Slider
  const inputLeft = document.getElementById("input-left");
  const inputRight = document.getElementById("input-right");

  const thumbLeft = document.querySelector(".slider > .thumb.left");
  const thumbRight = document.querySelector(".slider > .thumb.right");
  const range = document.querySelector(".slider > .range");

  const amountLeft = document.getElementById('amount-left');
  const amountRight = document.getElementById('amount-right');

  function updatePriceSlider() {
    const min = parseInt(inputLeft.min);
    const max = parseInt(inputLeft.max);
    const rangeValue = max - min;
    const percentLeft = ((parseInt(inputLeft.value) - min) / rangeValue) * 100;
    const percentRight = ((parseInt(inputRight.value) - min) / rangeValue) * 100;

    thumbLeft.style.left = percentLeft + "%";
    thumbRight.style.right = (100 - percentRight) + "%";
    range.style.left = percentLeft + "%";
    range.style.right = (100 - percentRight) + "%";

    amountLeft.innerText = parseInt(percentLeft);
    amountRight.innerText = parseInt(percentRight);
  }

  updatePriceSlider();

  inputLeft.addEventListener("input", updatePriceSlider);
  inputRight.addEventListener("input", updatePriceSlider);

  inputLeft.addEventListener("mouseover", function () {
    thumbLeft.classList.add("hover");
  });
  inputLeft.addEventListener("mouseout", function () {
    thumbLeft.classList.remove("hover");
  });
  inputLeft.addEventListener("mousedown", function () {
    thumbLeft.classList.add("active");
  });
  inputLeft.addEventListener("mouseup", function () {
    thumbLeft.classList.remove("active");
  });

  inputRight.addEventListener("mouseover", function () {
    thumbRight.classList.add("hover");
  });
  inputRight.addEventListener("mouseout", function () {
    thumbRight.classList.remove("hover");
  });
  inputRight.addEventListener("mousedown", function () {
    thumbRight.classList.add("active");
  });
  inputRight.addEventListener("mouseup", function () {
    thumbRight.classList.remove("active");
  });

