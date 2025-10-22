// ---------- LOGIN PAGE FUNCTIONALITY ----------
const loginForm = document.querySelector("form");

if (loginForm) {
  loginForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent page reload

    const emailInput = document.getElementById("email");
    const pattern = /^[a-zA-Z0-9._%+-]+@student\.hau\.edu\.ph$/;

    // Validate email format
    if (!pattern.test(emailInput.value)) {
      alert("Please use your HAU student email (e.g., name@student.hau.edu.ph).");
      return;
    }

    // Redirect to home.html after valid login
    window.location.href = "home.html";
  });
}

// ---------- COURSES PAGE FUNCTIONALITY ----------
const professorCards = document.querySelectorAll(".professor-card");

if (professorCards.length > 0) {
  professorCards.forEach(card => {
    card.addEventListener("click", () => {
      // Redirect to review.html when a card is clicked
      window.location.href = "review.html";
    });
  });
}

// Hamburger Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const navGroup = document.getElementById('navGroup');

    if (hamburger && navGroup) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navGroup.classList.toggle('active');
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!hamburger.contains(event.target) && !navGroup.contains(event.target)) {
                hamburger.classList.remove('active');
                navGroup.classList.remove('active');
            }
        });

        // Close menu when clicking a nav link
        const navLinks = navGroup.querySelectorAll('nav a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                hamburger.classList.remove('active');
                navGroup.classList.remove('active');
            });
        });
    }
});

        // Tab functionality
        const tabButtons = document.querySelectorAll('.tab-btn');
        const tabContents = document.querySelectorAll('.tab-content');

        tabButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Remove active class from all buttons and contents
                tabButtons.forEach(btn => btn.classList.remove('active'));
                tabContents.forEach(content => content.classList.remove('active'));

                // Add active class to clicked button
                button.classList.add('active');

                // Show corresponding tab content
                const tabName = button.getAttribute('data-tab');
                document.getElementById(tabName + '-tab').classList.add('active');
            });
        });

        // Star rating functionality
        document.querySelectorAll('.rating-category').forEach(category => {
            const stars = category.querySelectorAll('.star');
            let selectedRating = 0;

            stars.forEach(star => {
                // Hover effect
                star.addEventListener('mouseenter', () => {
                    const rating = star.getAttribute('data-rating');
                    highlightStars(stars, rating);
                });

                // Click to select
                star.addEventListener('click', () => {
                    selectedRating = star.getAttribute('data-rating');
                    highlightStars(stars, selectedRating);
                });
            });

            // Reset on mouse leave if no rating selected
            category.addEventListener('mouseleave', () => {
                highlightStars(stars, selectedRating);
            });

            function highlightStars(stars, rating) {
                stars.forEach(star => {
                    if (star.getAttribute('data-rating') <= rating) {
                        star.innerHTML = '&#9733;'; // Filled star
                        star.classList.add('filled');
                    } else {
                        star.innerHTML = '&#9734;'; // Empty star
                        star.classList.remove('filled');
                    }
                });
            }
            document.getElementById('reviewForm').addEventListener('submit', function (e) {
        e.preventDefault(); // Stop default form action
        // process or validate form here
        window.location.href = "home.html"; // Then redirect
    });
        });