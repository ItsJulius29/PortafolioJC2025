const cardHeader = document.querySelector('.card-header');
const placeholders = document.querySelectorAll('.placeholder-text');

setTimeout(() => {
    // Reemplazar imagen de carga con una real
    cardHeader.classList.remove('placeholder');
    cardHeader.style.background = "url('https://picsum.photos/350/180?random=1') center/cover no-repeat";

    // Reemplazar textos de carga con contenido real
    placeholders[0].classList.remove('placeholder-text');
    placeholders[0].innerHTML = "<h3>Explorando la Naturaleza</h3>";

    placeholders[1].classList.remove('placeholder-text');
    placeholders[1].innerHTML = "Descubre los paisajes más hermosos del mundo con nuestra galería de imágenes.";

    placeholders[2].classList.remove('placeholder-text');
    placeholders[2].innerHTML = "Fotografía, aventura y viajes en un solo lugar.";
}, 3000); // Simula un tiempo de carga de 3 segundos
