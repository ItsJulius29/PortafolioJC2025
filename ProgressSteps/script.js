const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

let currentStep = 1; // Estado inicial

next.addEventListener('click', () => {
  currentStep++;
  if (currentStep > circles.length) {
    currentStep = circles.length;
  }
  update();
});

prev.addEventListener('click', () => {
  currentStep--;
  if (currentStep < 1) {
    currentStep = 1;
  }
  update();
});

function update() {
  // Actualizar clases activas en los círculos
  circles.forEach((circle, idx) => {
    if (idx < currentStep) {
      circle.classList.add('active');
    } else {
      circle.classList.remove('active');
    }
  });

  // Actualizar barra de progreso
  const activeCircles = document.querySelectorAll('.circle.active');
  const progressPercentage = ((activeCircles.length - 1) / (circles.length - 1)) * 100;
  progress.style.setProperty('--progress', `${progressPercentage}%`);

  // Habilitar o deshabilitar botones
  prev.disabled = currentStep === 1;
  next.disabled = currentStep === circles.length;
}
