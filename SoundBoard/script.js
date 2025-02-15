const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        stopSounds(); // Detiene cualquier sonido en reproducción antes de iniciar uno nuevo
        const soundId = button.getAttribute('data-sound');
        const sound = document.getElementById(soundId);
        sound.play();
    });
});

function stopSounds() {
    const sounds = document.querySelectorAll('audio');
    sounds.forEach(sound => {
        sound.pause();
        sound.currentTime = 0; // Reinicia el sonido
    });
}
