

function openMenu() {

    const menu = document.querySelector('.navbar');

    if (menu.classList.contains('visable')) {
        menu.classList.remove('visable')
    }
    else {
        menu.classList.add('visable')
    }

}

document.addEventListener("DOMContentLoaded", () => {
    const reveals = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("active");
                    observer.unobserve(entry.target); // Stops observing after animation
                }
            });
        },
        { threshold: 0.1 } // Trigger when 10% of the element is visible
    );

    reveals.forEach(reveal => {
        observer.observe(reveal);
    });
});


AOS.init({
    easing: 'ease-out',
    duration: 1000
});


document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".navbar-menu-toggle");
    const primaryLinks = document.querySelector(".navbar-primary-links");
    const secondaryLinks = document.querySelector(".navbar-secondary-links");
    const sectionContainer = document.querySelector(".navbar-section-container:last-child");

    menuToggle.addEventListener("click", function () {
        primaryLinks.classList.toggle("active");
        secondaryLinks.classList.toggle("active");
        sectionContainer.classList.toggle('active')
        menuToggle.classList.toggle("fa-times");
    });
});