// JavaScript to toggle the navigation menu on small screens
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('nav ul li a'); // Select all nav links

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Function to set the active class on the clicked nav link
navLinks.forEach(link => {
    link.addEventListener('click', function () {
        // Remove active class from all links
        navLinks.forEach(navLink => navLink.classList.remove('active'));
        // Add active class to the clicked link
        this.classList.add('active');
    });
});



// carosalsssssss
// Carousel JavaScript
let currentSection = 1;

document.addEventListener('scroll', function () {
    let scrollPosition = window.scrollY;
    let viewportHeight = window.innerHeight;

    if (scrollPosition > (viewportHeight * currentSection)) {
        // Move to the next section
        document.querySelector(`#section${currentSection}`).classList.remove('show');
        currentSection++;
        document.querySelector(`#section${currentSection}`).classList.add('show');
    } else if (scrollPosition < (viewportHeight * (currentSection - 1))) {
        // Move to the previous section
        document.querySelector(`#section${currentSection}`).classList.remove('show');
        currentSection--;
        document.querySelector(`#section${currentSection}`).classList.add('show');
    }
});
