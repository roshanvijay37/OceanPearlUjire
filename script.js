const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            initializeParallax(entry.target);
        }
    });
}, {
    threshold: 0.1
});

function initializeParallax(element) {
    window.addEventListener('mousemove', (e) => {
        const { clientX, clientY } = e;
        const xAxis = (window.innerWidth / 2 - clientX) / 25;
        const yAxis = (window.innerHeight / 2 - clientY) / 25;
        element.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const parallaxElements = document.querySelectorAll('.parallax-section');
    parallaxElements.forEach(element => observer.observe(element));
});

// Add this to your existing JavaScript
document.querySelector('.hamburger').addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('active');
});
