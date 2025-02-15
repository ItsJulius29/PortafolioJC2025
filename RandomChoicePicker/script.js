const textarea = document.getElementById('input');
const button = document.getElementById('pick');
const choicesContainer = document.getElementById('choices');

button.addEventListener('click', () => {
    const text = textarea.value.trim();

    if (text === '') {
        alert('Por favor, ingresa algunas opciones separadas por comas.');
        return;
    }

    const choices = text.split(',').map(choice => choice.trim()).filter(choice => choice !== '');
    
    if (choices.length === 0) {
        alert('Debes ingresar al menos una opción válida.');
        return;
    }

    choicesContainer.innerHTML = ''; // Limpiar opciones previas

    choices.forEach(choice => {
        const span = document.createElement('span');
        span.classList.add('choice');
        span.innerText = choice;
        choicesContainer.appendChild(span);
    });

    pickRandomChoice();
});

function pickRandomChoice() {
    const choices = document.querySelectorAll('.choice');

    if (choices.length === 0) return;

    let times = 30;
    let interval = setInterval(() => {
        const randomChoice = choices[Math.floor(Math.random() * choices.length)];

        choices.forEach(choice => choice.classList.remove('selected'));
        randomChoice.classList.add('selected');
    }, 100);

    setTimeout(() => {
        clearInterval(interval);
        setTimeout(() => {
            const finalChoice = choices[Math.floor(Math.random() * choices.length)];
            choices.forEach(choice => choice.classList.remove('selected'));
            finalChoice.classList.add('selected');
        }, 100);
    }, times * 100);
}
