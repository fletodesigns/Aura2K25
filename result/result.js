document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

 
document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.animate-on-scroll');

    function checkViewport() {
      elements.forEach(function(element) {
        if (isElementInViewport(element) && !element.classList.contains('animated')) {
          element.classList.add('animated');
        }
      });
    }

    function isElementInViewport(el) {
      const rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }

    // Initial check when page loads
    checkViewport();

    // Check on scroll
    window.addEventListener('scroll', checkViewport);
  });