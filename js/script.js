document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".perso-bouton");
    const contents = document.querySelectorAll(".perso-content");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const target = button.dataset.tab;

            buttons.forEach(b => b.classList.remove("active"));
            contents.forEach(c => c.classList.remove("active"));

            button.classList.add("active");
            document.getElementById(target).classList.add("active");
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".pro-bouton");
    const contents = document.querySelectorAll(".pro-content");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const target = button.dataset.tab;

            buttons.forEach(b => b.classList.remove("active"));
            contents.forEach(c => c.classList.remove("active"));

            button.classList.add("active");
            document.getElementById(target).classList.add("active");
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const sliders = document.querySelectorAll(".slider");

    sliders.forEach(slider => {
        const slides = slider.querySelectorAll(".slide");
        let index = 0;

        function showSlide(n) {
            slides.forEach((slide, i) => {
                if (i === n) {
                    slide.classList.add("active");
                } else {
                    slide.classList.remove("active");
                }
            });
        }

        showSlide(index);

        setInterval(() => {
            index = (index + 1) % slides.length;
            showSlide(index);
        }, 3000);
    });
});
const burger = document.querySelector('.burger');
const nav = document.querySelector('header nav');
const navLinks = document.querySelectorAll('header nav a');

burger.addEventListener('click', () => {
    nav.classList.toggle('active');
});
document.addEventListener('click', (e) => {
    if (!nav.contains(e.target) && !burger.contains(e.target)) {
        nav.classList.remove('active');
    }
});
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
    });
});