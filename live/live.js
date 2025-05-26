const slides = document.querySelectorAll('.slide');
let currentIndex = 0;
const totalSlides = slides.length;

const SLIDE_INTERVAL = 6000; // total time each slide is visible
const LINE_DELAY = 100;      // Reduced delay for quick stagger effect

function slideOutCurrentSlide(callback) {
  const currentSlide = slides[currentIndex];
  const rankLines = currentSlide.querySelectorAll('.rank-line');

  rankLines.forEach((line, i) => {
    setTimeout(() => {
      line.style.transform = 'translateX(150%)';
      line.style.opacity = '0';
    }, i * LINE_DELAY);
  });

  setTimeout(() => {
    callback();
  }, (rankLines.length - 1) * LINE_DELAY + 800);
}

function slideInNextSlide() {
  currentIndex = (currentIndex + 1) % totalSlides;
  const nextSlide = slides[currentIndex];

  slides.forEach(slide => slide.classList.remove('active'));
  nextSlide.classList.add('active');

  const rankLines = nextSlide.querySelectorAll('.rank-line');
  rankLines.forEach(line => {
    line.style.transition = 'none';
    line.style.transform = 'translateX(-150%)';
    line.style.opacity = '0';
  });

  void nextSlide.offsetWidth; // Force reflow

  rankLines.forEach((line, i) => {
    setTimeout(() => {
      line.style.transition = 'transform 0.8s ease, opacity 0.8s ease';
      line.style.transform = 'translateX(0)';
      line.style.opacity = '1';
    }, i * LINE_DELAY);
  });
}

window.onload = () => {
  const firstSlide = slides[currentIndex];
  const rankLines = firstSlide.querySelectorAll('.rank-line');
  rankLines.forEach(line => {
    line.style.transform = 'translateX(0)';
    line.style.opacity = '1';
  });
};

function cycleSlides() {
  slideOutCurrentSlide(() => {
    slideInNextSlide();
  });
}

setInterval(cycleSlides, SLIDE_INTERVAL);
