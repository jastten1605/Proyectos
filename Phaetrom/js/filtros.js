document.addEventListener('DOMContentLoaded', function () {
    const filterButtons = document.querySelectorAll('.filter-button');
    const productosContainer = document.getElementById('productos-container');

    filterButtons.forEach(button => {
        button.addEventListener('click', function () {
            const tipo = this.getAttribute('data-tipo');

            // Remover la clase 'active' de todos los botones
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Agregar la clase 'active' al botón seleccionado
            this.classList.add('active');

            // Filtrar y mostrar productos
            productosContainer.innerHTML = ''; // Limpiar el contenedor
            productos.forEach(producto => {
                if (tipo === 'todos' || producto.tipo === tipo) {
                    const productoHTML = `
                        <div class="col-md-4 mb-4">
                            <div class="card">
                                <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
                                <div class="card-body">
                                    <h5 class="card-title">${producto.nombre}</h5>
                                    <p class="card-text">${producto.descripcion}</p>
                                    <p class="card-text">${producto.precio}€</p>
                                    <a href="producto-individual.html?id=${producto.id}" class="btn btn-primary">Ver detalles</a>
                                </div>
                            </div>
                        </div>
                    `;
                    productosContainer.innerHTML += productoHTML;
                }
            });
        });
    });
});
