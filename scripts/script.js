
let slideIndex = 0;
const slides = document.querySelectorAll('.carousel-item');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.transform = `translateX(${-index * 100}%)`;
    });
}

function nextSlide() {
    slideIndex = (slideIndex + 1) % slides.length;
    showSlide(slideIndex);
}

function autoSlide() {
    nextSlide();
    setTimeout(autoSlide, 3000); // Change image every 3 seconds
}

document.addEventListener('DOMContentLoaded', () => {
    autoSlide();
});
