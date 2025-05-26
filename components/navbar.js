document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.getElementById("navbar");

    if (navbar) {
        navbar.innerHTML = `
        <link href='https://cdn.boxicons.com/fonts/basic/boxicons.min.css' rel='stylesheet'>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css" integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
            <div class="logo-bar">
                <img src="/img/logo.svg" alt="logo" class="logo">
            </div>
            
            <nav>
                <ul class="nav-links">
                    <li class="active"><a href="/">Home</a></li>
                    <li><a href="/result">Result</a></li>
                    <!-- <li><a href="/programmes">Programmes</a></li> -->
                    <li><a href="/gallery">Gallery</a></li>
                </ul>
            </nav>
            <ul class="nav-links icon-nav">
                <li><a href="/live"><i class='bx  bx-loader-dots'></i></a></li> 
                <li><a href="/downloads"><i class="fa-solid fa-download"></i></a></li>
                <li><a href="/profile"><i class='bx bx-user'></i></a></li>
            </ul>
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

