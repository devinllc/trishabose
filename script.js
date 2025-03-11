// JavaScript to toggle the navigation menu on small screens
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('nav ul li a'); // Select all nav links

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.setAttribute('aria-expanded',
        hamburger.getAttribute('aria-expanded') === 'false' ? 'true' : 'false');
});

// Function to set the active class on the clicked nav link
navLinks.forEach(link => {
    link.addEventListener('click', function () {
        // Remove active class from all links
        navLinks.forEach(navLink => navLink.classList.remove('active'));
        // Add active class to the clicked link
        this.classList.add('active');

        // Close the mobile menu when a link is clicked
        if (window.innerWidth <= 768) {
            navMenu.classList.remove('active');
            hamburger.setAttribute('aria-expanded', 'false');
        }
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
        'Fashion Editorial',
        'Commercial Campaigns',
        'Product Shoots',
        'Lifestyle Content'
    ],
    acting: [
        'TV Commercials',
        'Music Videos',
        'Short Films',
        'Web Series'
    ],
    influencer: [
        'Social Media Campaigns',
        'Brand Endorsements',
        'Product Promotions',
        'Event Appearances'
    ]
};

// Function to populate the sub-categories dropdown based on the selected category
function populateSubCategories() {
    const categorySelect = document.getElementById('category');
    const subCategorySelect = document.getElementById('sub-category');
    const selectedCategory = categorySelect.value;

    // Clear current sub-category options
    subCategorySelect.innerHTML = '<option value="">Select Service Type</option>';

    // If a valid category is selected, populate sub-category options
    if (selectedCategory && subCategories[selectedCategory]) {
        const subCategoryOptions = subCategories[selectedCategory];
        subCategoryOptions.forEach(function (subCat) {
            const option = document.createElement('option');
            option.value = subCat.toLowerCase().replace(/\s+/g, '-');
            option.text = subCat;
            subCategorySelect.appendChild(option);
        });

        // Enable the sub-category select
        subCategorySelect.disabled = false;
    } else {
        // Disable the sub-category select if no category is selected
        subCategorySelect.disabled = true;
    }
}

// Initialize the form when the page loads
document.addEventListener('DOMContentLoaded', function () {
    // Initially disable the sub-category select until a category is chosen
    const subCategorySelect = document.getElementById('sub-category');
    if (subCategorySelect) {
        subCategorySelect.disabled = true;
    }

    // If the category is pre-selected (e.g., from a page reload), populate the sub-categories
    const categorySelect = document.getElementById('category');
    if (categorySelect && categorySelect.value) {
        populateSubCategories();
    }
});

// gallleriersssss

// Get the modal
var modal = document.getElementById("imageModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var modalImg = document.getElementById("modalImage");
var captionText = document.getElementById("caption");

document.querySelectorAll(".project-image").forEach(image => {
    image.onclick = function () {
        modal.style.display = "block";
        modalImg.src = this.dataset.full;
        captionText.innerHTML = this.alt;
    }
});

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// Form validation and submission
document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.request-callback-form');

    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();

            // Basic validation
            const firstName = document.getElementById('firstName').value.trim();
            const lastName = document.getElementById('lastName').value.trim();
            const companyName = document.getElementById('companyName').value.trim();
            const mobileNumber = document.getElementById('mobileNumber').value.trim();
            const email = document.getElementById('email').value.trim();
            const category = document.getElementById('category').value;
            const subCategory = document.getElementById('sub-category').value;
            const message = document.getElementById('message').value.trim();

            // Validation checks
            let isValid = true;
            let errorMessage = '';

            if (!firstName) {
                isValid = false;
                errorMessage += 'First name is required.\n';
                document.getElementById('firstName').classList.add('error');
            } else {
                document.getElementById('firstName').classList.remove('error');
            }

            if (!lastName) {
                isValid = false;
                errorMessage += 'Last name is required.\n';
                document.getElementById('lastName').classList.add('error');
            } else {
                document.getElementById('lastName').classList.remove('error');
            }

            if (!companyName) {
                isValid = false;
                errorMessage += 'Company name is required.\n';
                document.getElementById('companyName').classList.add('error');
            } else {
                document.getElementById('companyName').classList.remove('error');
            }

            if (!mobileNumber) {
                isValid = false;
                errorMessage += 'Mobile number is required.\n';
                document.getElementById('mobileNumber').classList.add('error');
            } else {
                document.getElementById('mobileNumber').classList.remove('error');
            }

            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!email || !emailRegex.test(email)) {
                isValid = false;
                errorMessage += 'Valid email is required.\n';
                document.getElementById('email').classList.add('error');
            } else {
                document.getElementById('email').classList.remove('error');
            }

            if (!category) {
                isValid = false;
                errorMessage += 'Category is required.\n';
                document.getElementById('category').classList.add('error');
            } else {
                document.getElementById('category').classList.remove('error');
            }

            if (!subCategory) {
                isValid = false;
                errorMessage += 'Sub-category is required.\n';
                document.getElementById('sub-category').classList.add('error');
            } else {
                document.getElementById('sub-category').classList.remove('error');
            }

            if (!message) {
                isValid = false;
                errorMessage += 'Message is required.\n';
                document.getElementById('message').classList.add('error');
            } else {
                document.getElementById('message').classList.remove('error');
            }

            if (!isValid) {
                // Display error message
                alert('Please fix the following errors:\n' + errorMessage);
                return;
            }

            // If form is valid, show success message
            // In a real application, you would send the form data to a server here
            const formData = {
                firstName,
                lastName,
                companyName,
                mobileNumber,
                email,
                category,
                subCategory,
                message
            };

            console.log('Form data:', formData);

            // Show success message
            const successMessage = document.createElement('div');
            successMessage.className = 'success-message';
            successMessage.textContent = 'Thank you for your submission! We will contact you soon.';

            // Insert success message after form
            form.parentNode.insertBefore(successMessage, form.nextSibling);

            // Reset form
            form.reset();

            // Remove success message after 5 seconds
            setTimeout(() => {
                successMessage.remove();
            }, 5000);
        });
    }
});

// Enhanced carousel functionality
document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.getElementById('uniqueCarousel');

    if (carousel) {
        let currentSlide = 0;
        const slides = document.querySelectorAll('.carousel-slide');
        const totalSlides = slides.length;
        const autoSlideInterval = 5000; // 5 seconds
        let autoSlide;
        let touchStartX = 0;
        let touchEndX = 0;

        // Initialize carousel
        function initCarousel() {
            // Add ARIA attributes for accessibility
            carousel.setAttribute('aria-roledescription', 'carousel');
            carousel.setAttribute('aria-label', 'Trisha Bose Portfolio Images');

            slides.forEach((slide, index) => {
                slide.setAttribute('aria-roledescription', 'slide');
                slide.setAttribute('aria-label', `Slide ${index + 1} of ${totalSlides}`);

                if (index === currentSlide) {
                    slide.classList.add('active');
                    slide.setAttribute('aria-hidden', 'false');
                } else {
                    slide.classList.remove('active');
                    slide.setAttribute('aria-hidden', 'true');
                }
            });

            // Create indicators
            createIndicators();

            // Start auto slide
            startAutoSlide();

            // Add touch events for mobile swipe
            addTouchEvents();

            // Add keyboard navigation
            addKeyboardNavigation();
        }

        function createIndicators() {
            const indicatorsContainer = document.createElement('div');
            indicatorsContainer.className = 'carousel-indicators';

            for (let i = 0; i < totalSlides; i++) {
                const indicator = document.createElement('button');
                indicator.className = 'carousel-indicator';
                indicator.setAttribute('aria-label', `Go to slide ${i + 1}`);

                if (i === currentSlide) {
                    indicator.classList.add('active');
                    indicator.setAttribute('aria-current', 'true');
                }

                indicator.addEventListener('click', () => {
                    goToSlide(i);
                });

                indicatorsContainer.appendChild(indicator);
            }

            carousel.appendChild(indicatorsContainer);
        }

        function updateIndicators() {
            const indicators = document.querySelectorAll('.carousel-indicator');

            indicators.forEach((indicator, index) => {
                if (index === currentSlide) {
                    indicator.classList.add('active');
                    indicator.setAttribute('aria-current', 'true');
                } else {
                    indicator.classList.remove('active');
                    indicator.removeAttribute('aria-current');
                }
            });
        }

        function goToSlide(n) {
            slides[currentSlide].classList.remove('active');
            slides[currentSlide].setAttribute('aria-hidden', 'true');

            currentSlide = (n + totalSlides) % totalSlides;

            slides[currentSlide].classList.add('active');
            slides[currentSlide].setAttribute('aria-hidden', 'false');

            updateIndicators();
        }

        function nextSlide() {
            goToSlide(currentSlide + 1);
        }

        function prevSlide() {
            goToSlide(currentSlide - 1);
        }

        function startAutoSlide() {
            autoSlide = setInterval(nextSlide, autoSlideInterval);
        }

        function resetAutoSlide() {
            clearInterval(autoSlide);
            startAutoSlide();
        }

        function addTouchEvents() {
            carousel.addEventListener('touchstart', (e) => {
                touchStartX = e.changedTouches[0].screenX;
            }, { passive: true });

            carousel.addEventListener('touchend', (e) => {
                touchEndX = e.changedTouches[0].screenX;
                handleSwipe();
            }, { passive: true });
        }

        function handleSwipe() {
            const swipeThreshold = 50;

            if (touchEndX < touchStartX - swipeThreshold) {
                // Swipe left, go to next slide
                nextSlide();
                resetAutoSlide();
            } else if (touchEndX > touchStartX + swipeThreshold) {
                // Swipe right, go to previous slide
                prevSlide();
                resetAutoSlide();
            }
        }

        function addKeyboardNavigation() {
            carousel.setAttribute('tabindex', '0');

            carousel.addEventListener('keydown', (e) => {
                if (e.key === 'ArrowLeft') {
                    prevSlide();
                    resetAutoSlide();
                } else if (e.key === 'ArrowRight') {
                    nextSlide();
                    resetAutoSlide();
                }
            });
        }

        // Initialize the carousel
        initCarousel();

        // Add event listeners for navigation buttons
        document.getElementById('nextSlide').addEventListener('click', () => {
            nextSlide();
            resetAutoSlide();
        });

        document.getElementById('prevSlide').addEventListener('click', () => {
            prevSlide();
            resetAutoSlide();
        });
    }
});

// Set minimum date for project date input
document.addEventListener('DOMContentLoaded', function () {
    const projectDateInput = document.getElementById('project-date');
    if (projectDateInput) {
        // Set minimum date to today
        const today = new Date();
        const yyyy = today.getFullYear();
        const mm = String(today.getMonth() + 1).padStart(2, '0');
        const dd = String(today.getDate()).padStart(2, '0');
        const formattedDate = `${yyyy}-${mm}-${dd}`;

        projectDateInput.min = formattedDate;
    }
});

