const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
    counter.innerText = '0';

    const updateCounter = () => {
        const target = +counter.getAttribute('data-target');
        const current = +counter.innerText;
        const increment = target / 100; // Define la velocidad del incremento

        if (current < target) {
            counter.innerText = `${Math.ceil(current + increment)}`;
            setTimeout(updateCounter, 20); // Ajusta la velocidad de la animación
        } else {
            counter.innerText = target; // Asegura que el contador finaliza exactamente en el número objetivo
        }
    };

    updateCounter();
});
