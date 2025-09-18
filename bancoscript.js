// --- Script para el Acordeón Dinámico ---
const accordionHeaders = document.querySelectorAll('.accordion-header');

accordionHeaders.forEach(header => {
    header.addEventListener('click', function() {
        // Primero, añade o quita la clase 'active' al encabezado
        this.classList.toggle('active');
        
        const content = this.nextElementSibling;

        // Ahora, revisa si el encabezado TIENE la clase 'active' para decidir
        if (this.classList.contains('active')) {
            // Si está activo, expande el contenido
            content.style.padding = '1.5rem';
            content.style.maxHeight = content.scrollHeight + 'px';
        } else {
            // Si no está activo, colapsa el contenido
            content.style.maxHeight = null;
            content.style.padding = '0 1.5rem';
        }
    });
});