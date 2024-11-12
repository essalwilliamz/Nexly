// Toggle mobile menu visibility
document.getElementById("menu-button").addEventListener("click", function () {
    document.getElementById("mobile-menu").classList.toggle("hidden");
});
document.getElementById("close-menu-button").addEventListener("click", function () {
    document.getElementById("mobile-menu").classList.add("hidden");
});


// Simpel version
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        const navbarHeight = 64; // Sesuaikan dengan tinggi navbar

        window.scrollTo({
            top: target.offsetTop - navbarHeight,
            behavior: 'smooth'
        });
    });
});

