const toggleButton = document.getElementById('toggle');
const nav = document.querySelector('.nav');

toggleButton.addEventListener('click', () => {
    nav.classList.toggle('active');
});
