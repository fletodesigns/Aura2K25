const slides = document.querySelectorAll('.slide');
let currentIndex = 0;
const totalSlides = slides.length;

function showNextSlide() {
  slides[currentIndex].classList.remove('active');
  currentIndex = (currentIndex + 1) % totalSlides;
  slides[currentIndex].classList.add('active');
}

// Auto slide every 3 seconds
setInterval(showNextSlide, 3000);
