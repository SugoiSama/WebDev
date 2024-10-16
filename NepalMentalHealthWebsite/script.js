// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(anchor.getAttribute('href'));
        
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Add a scroll-to-top button
const scrollToTopButton = document.getElementById('scrollToTopButton');

// Show/hide scroll-to-top button based on scroll position
window.addEventListener('scroll', () => {
    scrollToTopButton.style.display = (document.documentElement.scrollTop > 200) ? 'block' : 'none';
});

// Scroll to top functionality
scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Lazy load images
document.querySelectorAll('img').forEach(img => {
    img.setAttribute('loading', 'lazy');
});
