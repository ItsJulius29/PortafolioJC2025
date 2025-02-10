const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', checkBoxes);

checkBoxes(); // Llamamos a la función al cargar la página

function checkBoxes() {
  const triggerBottom = window.innerHeight * 0.9; // Punto de activación

  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      box.classList.add('show'); // Se activa la animación
    } else {
      box.classList.remove('show'); // Se oculta nuevamente si se hace scroll hacia arriba
    }
  });
}
