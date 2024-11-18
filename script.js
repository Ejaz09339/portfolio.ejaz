// JavaScript for toggling the navigation menu
document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.getElementById('menu-icon');
    const navbar = document.querySelector('.navbar');

    menuIcon.addEventListener('click', () => {
        navbar.classList.toggle('active');
        menuIcon.classList.toggle('fa-times'); // Change icon when menu is active
    });

    // Close the menu when a link is clicked (for mobile)
    document.querySelectorAll('.navbar a').forEach(link => {
        link.addEventListener('click', () => {
            navbar.classList.remove('active');
            menuIcon.classList.remove('fa-times');
        });
    });
});

// JavaScript for smooth scrolling when clicking on navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Form validation script
document.querySelector('form').addEventListener('submit', function(e) {
    const name = this.querySelector('input[placeholder="Full Name"]');
    const email = this.querySelector('input[placeholder="Email Address"]');
    const message = this.querySelector('textarea');

    if (!name.value || !email.value || !message.value) {
        alert('Please fill out all required fields.');
        e.preventDefault(); // Prevent form submission
    } else if (!/^\S+@\S+\.\S+$/.test(email.value)) {
        alert('Please enter a valid email address.');
        e.preventDefault(); // Prevent form submission
    }
});

// JavaScript for "back to top" button functionality
const topButton = document.querySelector('.footer-iconTop a');
topButton.addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});