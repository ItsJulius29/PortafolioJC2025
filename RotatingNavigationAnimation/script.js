const open = document.getElementById('open');
const close = document.getElementById('close');
const container = document.querySelector('.container');

open.addEventListener('click', () => {
    console.log('Botón abrir clicado');
    document.body.classList.add('show-nav');
    console.log('Clase show-nav añadida al body');
});

close.addEventListener('click', () => {
    console.log('Botón cerrar clicado');
    document.body.classList.remove('show-nav');
    console.log('Clase show-nav eliminada del body');
});
