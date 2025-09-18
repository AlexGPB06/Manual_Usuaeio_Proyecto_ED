document.addEventListener('DOMContentLoaded', function() {
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', function() {
            // Alterna la clase 'active' en el botón presionado
            this.classList.toggle('active');
            
            const content = this.nextElementSibling;

            // Comprueba si el panel está abierto para ajustar su altura
            if (content.style.maxHeight) {
                // Si ya tiene altura (está abierto), lo cierra
                content.style.maxHeight = null;
                content.style.padding = '0 1.5rem';
            } else {
                // Si está cerrado, calcula la altura necesaria y lo abre
                content.style.padding = '1.5rem';
                content.style.maxHeight = content.scrollHeight + 'px';
            }
        });
    });
});