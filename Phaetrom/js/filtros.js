document.addEventListener('DOMContentLoaded', function () {
    const filterButtons = document.querySelectorAll('.filter-button');
    const productCards = document.querySelectorAll('.col-md-4');

    filterButtons.forEach(button => {
        button.addEventListener('click', function () {
            // Remover la clase 'active' de todos los botones
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Agregar la clase 'active' al botón clickeado
            this.classList.add('active');

            const tipo = this.getAttribute('data-tipo'); // Obtener el tipo de filtro

            // Filtrar y mostrar los productos
            productCards.forEach(card => {
                const cardTipo = card.getAttribute('data-tipo'); // Obtener el tipo de la tarjeta
                if (tipo === 'todos' || cardTipo === tipo) {
                    card.style.display = 'block'; // Mostrar el producto
                } else {
                    card.style.display = 'none'; // Ocultar el producto
                }
            });
        });
    });
});
