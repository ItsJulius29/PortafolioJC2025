// Seleccionamos los elementos del DOM
const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('joke-btn');

// Agregamos un evento al botón para generar un nuevo chiste al hacer clic
jokeBtn.addEventListener('click', generateJoke);

// Llamamos a la función para mostrar un chiste al cargar la página
generateJoke();

async function generateJoke() {
    try {
        // Realizamos la solicitud a la API
        const response = await fetch('https://icanhazdadjoke.com/', {
            headers: {
                'Accept': 'application/json',
                'User-Agent': 'TuAplicacion (https://tuaplicacion.com)'
            }
        });

        // Verificamos si la respuesta es exitosa
        if (!response.ok) {
            throw new Error(`Error: ${response.status} ${response.statusText}`);
        }

        // Convertimos la respuesta a JSON
        const data = await response.json();

        // Mostramos el chiste en el elemento correspondiente
        jokeEl.innerText = data.joke;
    } catch (error) {
        // Manejamos cualquier error que ocurra durante la solicitud
        console.error('Ocurrió un error al obtener el chiste:', error);
        jokeEl.innerText = 'Lo siento, no pude obtener un chiste en este momento.';
    }
}
