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


// Sub-category data for each category
const subCategories = {
    photoshoot: [
        'Garments',
        'Lifestyle',
        'BrandShoots',
        'Fashion',
        'Portrait',
        'Staycations'
    ],
    acting: [
        'Music Videos',
        'Films',
        'Shortfilms',
        'Series',
        'Shows',
        'Advertisements'
    ],
    influencer: [
        'Promotions',
        'Paid Collabs'
    ]
};

// Function to populate the sub-categories dropdown based on the selected category
function populateSubCategories() {
    const categorySelect = document.getElementById('category');
    const subCategorySelect = document.getElementById('sub-category');
    const selectedCategory = categorySelect.value;

    // Clear current sub-category options
    subCategorySelect.innerHTML = '<option value="">Select Sub-Category</option>';

    // If a valid category is selected, populate sub-category options
    if (selectedCategory && subCategories[selectedCategory]) {
        const subCategoryOptions = subCategories[selectedCategory];
        subCategoryOptions.forEach(function (subCat) {
            const option = document.createElement('option');
            option.value = subCat.toLowerCase().replace(/\s+/g, '-');
            option.text = subCat;
            subCategorySelect.appendChild(option);
        });
    }
}



// gallleriersssss

// Get the modal
var modal = document.getElementById("imageModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var modalImg = document.getElementById("modalImage");
var captionText = document.getElementById("caption");

document.querySelectorAll(".project-image").forEach(image => {
    image.onclick = function(){
        modal.style.display = "block";
        modalImg.src = this.dataset.full;
        captionText.innerHTML = this.alt;
    }
});

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
    modal.style.display = "none";
}
