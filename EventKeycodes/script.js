document.addEventListener('DOMContentLoaded', () => {
    const keyInfo = document.getElementById('key-info');

    document.addEventListener('keydown', (event) => {
        keyInfo.innerHTML = `
            <div>Tecla presionada: <strong>${event.key === ' ' ? 'Espacio' : event.key}</strong></div>
            <div>Código de tecla: <strong>${event.which || event.keyCode}</strong></div>
            <div>Nombre de la tecla: <strong>${event.code}</strong></div>
        `;
    });
});
