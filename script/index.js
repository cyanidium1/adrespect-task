// gradient removal

const grad = document.querySelector("#grad");
const hide = document.querySelector("#hide");

hide.addEventListener("click", hideFn);

function hideFn() {
  grad.style.display = "none";
  hide.style.display = "none";
  hide.removeEventListener("click", hideFn);
}

// navbar

const btn = document.querySelector("button.mobile-menu-button");
const menu = document.querySelector(".mobile-menu");

btn.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});

// search

const backdrop = document.querySelector("#backdrop");
const search = document.querySelector("#search");
const searchBtn = document.querySelector("#searchBtn");
const openSearch = document.querySelector("#openSearch");
const openSearchMob = document.querySelector("#openSearchMob");

searchBtn.addEventListener("click", toggleBackdrop);
openSearch.addEventListener("click", toggleBackdrop);
openSearchMob.addEventListener("click", toggleBackdrop);

function toggleBackdrop() {
  backdrop.style.display === "none"
    ? (backdrop.style.display = "block")
    : (backdrop.style.display = "none");
}

// slider

// const images = [
//   "/images/main.jpg",
//   "/images/Photo-2.jpg",
//   "/images/Photo-3.jpg",
// ];

const sliderImage = document.getElementById("sliderImage");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const images = [
  "/images/main.jpg",
  "/images/Photo-2.jpg",
  "/images/Photo-3.jpg",
];
let currentIndex = 0;

function updateImage() {
  sliderImage.src = images[currentIndex];
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % images.length;
  updateImage();
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateImage();
}

nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);

updateImage();
