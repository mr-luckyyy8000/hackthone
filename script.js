const prevButton = document.querySelector(".prev-button");
const nextButton = document.querySelector(".next-button");
const sliderImages = document.querySelectorAll(".slider-image");

let currentSlide = 0;

function reset() {
  for (let i = 0; i < sliderImages.length; i++) {
    sliderImages[i].classList.remove("active");
  }
}

function startSlide() {
  reset();
  sliderImages[currentSlide].classList.add("active");
}

function slideLeft() {
  reset();
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = sliderImages.length - 1;
  }
  sliderImages[currentSlide].classList.add("active");
}

function slideRight() {
  reset();
  currentSlide++;
  if (currentSlide > sliderImages.length - 1) {
    currentSlide = 0;
  }
  sliderImages[currentSlide].classList.add("active");
}

prevButton.addEventListener("click", slideLeft);
nextButton.addEventListener("click", slideRight);

startSlide();
