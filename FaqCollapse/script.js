const toggles = document.querySelectorAll('.faq-toggle');

toggles.forEach(toggle =>{
    toggle.addEventListener('click', ()=>{
        const faq = toggle.parentElement.parentElement; //Accede al contenedor .faq
        faq.classList.toggle('active');
    });
});