const fill = document.querySelector('.fill');
const empties = document.querySelectorAll('.empty');

// Evento cuando se comienza a arrastrar el elemento
fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);

// Agregar eventos a cada área vacía
empties.forEach(empty => {
    empty.addEventListener('dragover', dragOver);
    empty.addEventListener('dragenter', dragEnter);
    empty.addEventListener('dragleave', dragLeave);
    empty.addEventListener('drop', dragDrop);
});

// Función cuando comienza a arrastrar
function dragStart() {
    this.classList.add('hold');
    setTimeout(() => this.classList.add('invisible'), 0); // Hace invisible el elemento mientras se arrastra
}

// Función cuando se suelta el elemento
function dragEnd() {
    this.classList.remove('hold', 'invisible');
}

// Función cuando el elemento se mueve sobre un área vacía
function dragOver(e) {
    e.preventDefault();
}

// Función cuando el elemento entra en un área vacía
function dragEnter(e) {
    e.preventDefault();
    this.classList.add('hovered');
}

// Función cuando el elemento sale de un área vacía
function dragLeave() {
    this.classList.remove('hovered');
}

// Función cuando se suelta el elemento en un área vacía
function dragDrop() {
    this.classList.remove('hovered');
    this.appendChild(fill); // Mueve el elemento al contenedor
}
