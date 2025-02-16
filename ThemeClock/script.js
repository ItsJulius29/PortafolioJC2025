const hourEl = document.querySelector('.needle.hour');
const minuteEl = document.querySelector('.needle.minute');
const secondEl = document.querySelector('.needle.second');
const timeEl = document.getElementById('time');
const dateEl = document.getElementById('date');
const toggle = document.getElementById('toggle');

const days = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
const months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

// Función para actualizar la hora
function updateClock() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const day = now.getDay();
    const month = now.getMonth();
    const date = now.getDate();

    const hoursForClock = hours % 12;
    const ampm = hours >= 12 ? 'PM' : 'AM';

    const hourDeg = (hoursForClock / 12) * 360;
    const minuteDeg = (minutes / 60) * 360;
    const secondDeg = (seconds / 60) * 360;

    hourEl.style.transform = `rotate(${hourDeg}deg)`;
    minuteEl.style.transform = `rotate(${minuteDeg}deg)`;
    secondEl.style.transform = `rotate(${secondDeg}deg)`;

    timeEl.innerHTML = `${hoursForClock === 0 ? 12 : hoursForClock}:${minutes < 10 ? `0${minutes}` : minutes} ${ampm}`;
    dateEl.innerHTML = `${days[day]}, ${date} ${months[month]}`;
}

// Cambiar tema claro/oscuro
toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
});

// Actualizar reloj cada segundo
setInterval(updateClock, 1000);

// Iniciar el reloj al cargar la página
updateClock();
