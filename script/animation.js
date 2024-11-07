  // Animate hero section on load
  gsap.to('.hero-content h1', {
    opacity: 1,
    y: 0,
    duration: 1,
    delay: 0.5
});

gsap.to('.hero-content p', {
    opacity: 1,
    y: 0,
    duration: 1,
    delay: 0.8
});

// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});