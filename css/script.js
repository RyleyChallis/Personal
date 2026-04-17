// Create the overlay element
const overlay = document.createElement('div');
overlay.id = 'sidebar-overlay';
overlay.className = 'overlay';
document.body.appendChild(overlay);

const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

// Toggle function
function toggleMenu() {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
    overlay.classList.toggle('active');
    
    // Optional: Prevent background scrolling when menu is open
    document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
}

hamburger.addEventListener('click', toggleMenu);
overlay.addEventListener('click', toggleMenu);

// Close when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', toggleMenu);
});