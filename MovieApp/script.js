const API_KEY = '8ef02afd65549f4dedcd4bf69621307b'; // Reemplaza con tu API Key real
const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=es-ES&page=1`;
const IMG_PATH = 'https://image.tmdb.org/t/p/w500';
const SEARCH_URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=es-ES&query=`;

const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');

// Función para obtener películas populares
async function getMovies(url) {
    try {
        const res = await fetch(url);
        if (!res.ok) {
            throw new Error(`Error HTTP: ${res.status}`);
        }
        const data = await res.json();
        if (!data.results) {
            throw new Error("No se encontraron resultados");
        }
        showMovies(data.results);
    } catch (error) {
        console.error("Error obteniendo películas:", error);
        main.innerHTML = `<p style="color: red; text-align: center;">Error al cargar películas. Verifica tu API Key.</p>`;
    }
}

// Función para mostrar las películas en el DOM
function showMovies(movies) {
    main.innerHTML = '';

    movies.forEach(movie => {
        const { title, poster_path, vote_average } = movie;

        const movieEl = document.createElement('div');
        movieEl.classList.add('movie');

        movieEl.innerHTML = `
            <img src="${poster_path ? IMG_PATH + poster_path : 'https://via.placeholder.com/300'}" alt="${title}">
            <div class="movie-info">
                <h3>${title}</h3>
                <span class="${getClassByRate(vote_average)}">${vote_average ? vote_average.toFixed(1) : 'N/A'}</span>
            </div>
        `;

        main.appendChild(movieEl);
    });
}

// Función para asignar colores a la calificación
function getClassByRate(vote) {
    if (vote >= 8) {
        return 'green';
    } else if (vote >= 5) {
        return 'orange';
    } else {
        return 'red';
    }
}

// Evento para la barra de búsqueda
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const searchTerm = search.value.trim();

    if (searchTerm) {
        getMovies(SEARCH_URL + encodeURIComponent(searchTerm));
        search.value = '';
    } else {
        window.location.reload();
    }
});

// Cargar películas populares al inicio
getMovies(API_URL);
