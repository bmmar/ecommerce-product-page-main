const hamburger = document.querySelector(".hamburger");
const overlay = document.querySelector(".overlay");
const whiteOverlay = document.querySelector(".white-overlay");
const closeMenu = document.querySelector(".close-menu-icon");

const cartIcon = document.querySelector(".cart-icon");
const cartOverlay = document.querySelector(".cart-overlay");
const numOfItems = document.querySelector(".number-of-items");
const purchaseDescription = document.querySelector(".purchase-description");
const emptyCart = document.querySelector(".empty-cart");
const totalInBold = document.querySelector(".total-in-bold");


const mainPics = document.querySelectorAll(".product-image");
const modal = document.querySelector(".modal");
const modalContent = document.querySelector(".modal-content");
const mainImage = document.querySelectorAll(".main-image");
const closePointer = document.querySelector(".close-pointer");
const row = document.querySelector(".row");
const cols = document.querySelectorAll(".col");
const whiteOuts = document.querySelectorAll(".white-out-container");
const whiteCircles = document.querySelectorAll(".white-circle");
const selectionArrows = document.querySelectorAll(".selection-arrows");


let itemsInCart = 1;
const emptyCartText = "Your cart is empty."
let slideIndex = 0;
let mainPicIndex = 0;
changeMainPic(0);
let lightboxOn = true;
mainPics[0].classList.add("display-active");

hamburger.addEventListener("click", () => {
  overlay.classList.add("overlay-active");
  // whiteOverlay.classList.add(".overlay-active");
});

closeMenu.addEventListener("click", () => {
  overlay.classList.remove("overlay-active");
});

cartIcon.addEventListener("click", (e) => {
  cartOverlay.classList.add("display-active");
  e.preventDefault();
  e.stopPropagation();
  if (itemsInCart > 0) {
    purchaseDescription.classList.add("display-active-flex");
    numOfItems.textContent = itemsInCart;
    totalInBold.textContent = "  $" + itemsInCart * 125;
    totalInBold.classList.add("display-inline");
  } else { 
    emptyCart.classList.add("display-active");
  }
});

window.addEventListener("click", function (e) {
  if (cartOverlay.classList.contains("display-active")) {
    if (!cartOverlay.contains(e.target)) {
      cartOverlay.classList.remove("display-active");
    }
  }
});

for (let i = 0; i < whiteCircles.length; i++) {
  whiteCircles[i].addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log("Next arrow pressed");
    lightboxOn = false;
    mainPicIndex++;
    if (mainPicIndex > 3) {
      mainPicIndex = 0;
    }
    changeMainPic(mainPicIndex);
  });
}

for (let i = 0; i < mainPics.length; i++)
  mainPics[i].addEventListener("click", () => {
    openModalWindow();
    showSlide(slideIndex);
  });

for (let i = 0; i < cols.length; i++) {
  cols[i].addEventListener("click", () => {
    whiteOuts[slideIndex].classList.remove("display-active");
    whiteOuts[i].classList.add("display-active");
    removeSlide(slideIndex);
    slideIndex = i;
    showSlide(slideIndex);
  });
}

whiteOuts[0].classList.add("display-active");

closePointer.addEventListener("click", () => {
  modal.classList.remove("display-active");
  modalContent.classList.remove("display-active-flex");
  row.classList.remove("display-active-flex");
  for (let i = 0; i < cols.length; i++) {
    cols[i].classList.remove("display-active");
  }
});

function openModalWindow() {
  modal.classList.add("display-active");
  modalContent.classList.add("display-active-flex");
  row.classList.add("display-active-flex");
  for (let i = 0; i < cols.length; i++) {
    cols[i].classList.add("display-active");
  }
}

function showSlide(slideIndex) {
  mainImage[slideIndex].classList.add("display-active");
}
function removeSlide(slideIndex) {
  mainImage[slideIndex].classList.remove("display-active");
}

function changeMainPic(mainPicIndex) {
  let previousPicIndex = mainPicIndex - 1;
  console.log("Main Pic Index: " + mainPicIndex);
  console.log("Previous Pic Index: " + previousPicIndex);

  if (previousPicIndex < 0) {
    previousPicIndex = 3;
  }
  if (mainPicIndex > 3) {
    mainPicIndex = 0;
  }
  console.log("Main Pic Index: " + mainPicIndex);
  console.log("Previous Pic Index: " + previousPicIndex);

  mainPics[previousPicIndex].classList.remove("display-active");
  mainPics[mainPicIndex].classList.add("display-active");
}
