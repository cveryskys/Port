// filepath: /roblox-luau-portfolio/roblox-luau-portfolio/src/scripts/main.js
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');

    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
    smoothScrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            targetElement.scrollIntoView({ behavior: 'smooth' });
        });
    });

    const skillBars = document.querySelectorAll('.skill-bar');
    skillBars.forEach(bar => {
        const value = bar.getAttribute('data-value');
        bar.style.width = value;
    });
});