
//Ejercicio1 
window.onload = function() {
    // Seleccionamos el contenedor donde irá la imagen
    const imagenContainer = document.querySelector("#imagen-dinamica");

    if (!imagenContainer) {
        console.error("El contenedor #imagen-dinamica no existe en el HTML.");
        return;
    }

    // Creamos la imagen
    const imagen = document.createElement("img");
    imagen.src= "ciudad.jpg";
    imagen.alt = "Imagen generada dinámicamente";
    imagen.style.display = "block";
    imagen.style.margin = "20px auto";
    imagen.style.borderRadius = "10px";
    imagen.style.width = "100%"; // Para que se ajuste al contenedor
    imagen.style.maxWidth = "400px"; // Evita que sea demasiado grande

    // Creamos el título
    const titulo = document.createElement("h3");
    titulo.textContent = "Haz clic para cambiar el título";
    titulo.style.textAlign = "center";
    titulo.style.cursor = "pointer";

    // Evento para cambiar el título
    titulo.addEventListener("click", function() {
        titulo.textContent = "¡Título cambiado con JavaScript!";
    });

    // Agregamos la imagen y el título al contenedor
    imagenContainer.appendChild(imagen);
    imagenContainer.appendChild(titulo);
};


//Ejercicio 3
window.addEventListener("load", function() {
    const header = document.querySelector("header");

    if (!header) {
        console.error("No se encontró el <header> en el documento.");
        return;
    }

    window.addEventListener("scroll", function() {
        if (window.scrollY < 50) {
            header.style.backgroundColor = "#ff0000"; // Color oscuro
        } else {
            header.style.backgroundColor = "#555"; // Color original
        }
    });
});
