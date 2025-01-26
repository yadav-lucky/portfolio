// Initialize AOS (Animate on Scroll)
AOS.init({
    duration: 1000, // Duration of animations
    easing: 'ease-in-out', // Smooth animation easing
    once: true, // Animate elements only once
});

// Optionally, handle form submission via JavaScript (e.g., email API integration)
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert("Form submitted! We will get back to you soon.");
});

