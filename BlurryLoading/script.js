const loadingText = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');

let load = 0;

let interval = setInterval(blurring, 30); // Se ejecuta cada 30ms

function blurring() {
  load++;

  if (load > 99) {
    clearInterval(interval); // Detiene la animación cuando llega al 100%
  }

  loadingText.innerText = `${load}%`;
  loadingText.style.opacity = scale(load, 0, 100, 1, 0); // Hace que el texto desaparezca
  bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`; // Reduce el desenfoque
}

// Función para mapear un rango de valores a otro
function scale(num, in_min, in_max, out_min, out_max) {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
}
