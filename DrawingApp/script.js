const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const colorPicker = document.getElementById('color');
const sizePicker = document.getElementById('size');
const sizeValue = document.getElementById('size-value');
const clearBtn = document.getElementById('clear');

let isDrawing = false;
let x = 0;
let y = 0;
let color = colorPicker.value;
let size = sizePicker.value;

// Ajustar el tamaño del canvas
canvas.width = window.innerWidth * 0.8;
canvas.height = window.innerHeight * 0.6;

// Función para comenzar el dibujo
canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    [x, y] = [e.offsetX, e.offsetY];
});

// Función para dibujar en el canvas
canvas.addEventListener('mousemove', (e) => {
    if (!isDrawing) return;

    const x2 = e.offsetX;
    const y2 = e.offsetY;

    drawCircle(x2, y2);
    drawLine(x, y, x2, y2);

    [x, y] = [x2, y2];
});

// Función para detener el dibujo
canvas.addEventListener('mouseup', () => {
    isDrawing = false;
});

// Función para dibujar un círculo en la posición del cursor
function drawCircle(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, size / 2, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
}

// Función para dibujar una línea entre dos puntos
function drawLine(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = color;
    ctx.lineWidth = size;
    ctx.stroke();
}

// Actualizar el color del pincel
colorPicker.addEventListener('change', (e) => {
    color = e.target.value;
});

// Actualizar el tamaño del pincel
sizePicker.addEventListener('input', (e) => {
    size = e.target.value;
    sizeValue.textContent = size;
});

// Limpiar el canvas
clearBtn.addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});
