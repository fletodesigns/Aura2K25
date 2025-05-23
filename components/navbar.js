document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.getElementById("navbar");

    if (navbar) {
        navbar.innerHTML = `
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css" integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
            <div class="logo-bar">
                <img src="/img/logo.svg" alt="logo" class="logo">
            </div>
            
            <nav>
                <ul class="nav-links">
                    <li class="active"><a href="/index.html"><i class='bx bx-home-alt-2'></i>Home</a></li>
                    <li><a href="/gallery/"><i class='bx bx-images'></i>Gallery</a></li>
                    <li><a href="/profile/"><i class='bx bx-user'></i>Profile</a></li>
                    <li><a href="/result/"><i class='bx bx-minus-back'></i>Result</a></li>
                    <li><a href="/downloads/index.html"><i class="fa-solid fa-download"></i>Download</a></li>
                </ul>
            </nav>
            <div class="burger">
                <div class="line1"></div>
                <div class="line2"></div>
                <div class="line3"></div>
            </div>`;
    }
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href'),rollIntoView({
            behavior: 'smooth'
        }));
    });
});

// Burger menu toggle for mobile view
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('nav-active');
    burger.classList.toggle('toggle');
});

