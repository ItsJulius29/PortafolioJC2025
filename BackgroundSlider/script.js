const slides = document.querySelectorAll('.slide');
const leftBtn = document.getElementById('left');
const rightBtn = document.getElementById('right');

let activeSlide = 0;

function setBackground() {
    document.body.style.backgroundImage = slides[activeSlide].style.backgroundImage;
}

function setActiveSlide() {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[activeSlide].classList.add('active');
}

rightBtn.addEventListener('click', () => {
    activeSlide++;

    if (activeSlide > slides.length - 1) {
        activeSlide = 0;
    }

    setBackground();
    setActiveSlide();
});

leftBtn.addEventListener('click', () => {
    activeSlide--;

    if (activeSlide < 0) {
        activeSlide = slides.length - 1;
    }

    setBackground();
    setActiveSlide();
});

// Inicializar el fondo al cargar la página
setBackground();
setActiveSlide();
