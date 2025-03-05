// =============================================
// Funcionalidades Globales
// =============================================

// 1. Modo Claro/Oscuro
function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', body.classList.contains('dark-mode'));
}

// Aplicar el modo guardado al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('darkMode') === 'true') {
        document.body.classList.add('dark-mode');
    }
});

// Botón para cambiar el modo (puedes agregar un botón en el HTML)
const darkModeButton = document.getElementById('dark-mode-button');
if (darkModeButton) {
    darkModeButton.addEventListener('click', toggleDarkMode);
}

// =============================================
// Validación del Formulario de Contacto
// =============================================
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Validar nombre (solo letras y espacios)
        const nombre = document.getElementById('nombre').value;
        const nombreRegex = /^[a-zA-Z\s]+$/;
        if (!nombreRegex.test(nombre)) {
            alert('El nombre solo puede contener letras y espacios.');
            return;
        }

        // Validar email
        const email = document.getElementById('email').value;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Por favor, introduce un correo electrónico válido.');
            return;
        }

        // Validar mensaje (no vacío)
        const mensaje = document.getElementById('mensaje').value;
        if (mensaje.trim() === '') {
            alert('El mensaje no puede estar vacío.');
            return;
        }

        // Si todo está correcto, enviar el formulario
        alert('Formulario enviado correctamente.');
        contactForm.reset();
    });
}

// =============================================
// Integración de API (Clima)
// =============================================
const clima = () => {
    fetch(`https://www.el-tiempo.net/api/json/v2/provincias/29`)
        .then(respuesta => respuesta.json())
        .then(data => {
            const ciudad = data.ciudades[0];  // Accede a la primera ciudad (Málaga)
            
            // Actualiza los elementos HTML con la información del clima
            document.getElementById("ciudad").textContent = ciudad.name;
            document.getElementById("temp-min").textContent = ciudad.temperatures.min;
            document.getElementById("temp-max").textContent = ciudad.temperatures.max;
            document.getElementById("prediccion").textContent = data.today.p;
        })
        .catch(error => console.error('Error al obtener datos del clima:', error));
}

// Llamamos a la función cuando cargue la página
document.addEventListener('DOMContentLoaded', clima);

// =============================================
// Manipulación del DOM con Eventos
// =============================================

// 1. Cambiar el texto de un elemento al hacer clic
const productTitles = document.querySelectorAll('.card-title');
productTitles.forEach(title => {
    title.addEventListener('click', () => {
        title.textContent = '¡Producto seleccionado!';
    });
});

// 2. Mostrar un mensaje al pasar el mouse sobre una imagen
const productImages = document.querySelectorAll('.card-img-top');
productImages.forEach(image => {
    image.addEventListener('mouseover', () => {
        alert('¡Haz clic para ver más detalles!');
    });
});

// 3. Cambiar el color de fondo del botón de "Agregar al carrito" en la página de producto individual
const agregarCarritoButton = document.getElementById('agregar-carrito');
if (agregarCarritoButton) {
    agregarCarritoButton.addEventListener('click', () => {
        agregarCarritoButton.style.backgroundColor = 'green';
        agregarCarritoButton.textContent = 'Agregado ✔️';
    });
}

// 4. Ocultar un elemento al hacer doble clic
const footer = document.querySelector('footer');
if (footer) {
    footer.addEventListener('dblclick', () => {
        footer.style.display = 'none';
    });
}

// =============================================
// Funciones Adicionales
// =============================================

// Función para mostrar un mensaje en la consola al cargar la página
console.log('Página cargada correctamente.');

// Función asíncrona de ejemplo
async function ejemploAsincrono() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Operación completada.');
        }, 2000);
    });
}

ejemploAsincrono().then((mensaje) => {
    console.log(mensaje);
});

// Selecciona el botón y el menú de redes sociales
const toggleButton = document.getElementById('toggle-sidebar-button');
const socialSidebar = document.querySelector('.social-sidebar');

// Función para mostrar/ocultar el menú y mover el botón
function toggleSocialSidebar() {
    socialSidebar.classList.toggle('visible');
    toggleButton.classList.toggle('visible'); // Mueve el botón junto con el menú
}

// Evento para mostrar/ocultar el menú al hacer clic en el botón
if (toggleButton) {
    toggleButton.addEventListener('click', toggleSocialSidebar);
}

// =============================================
// Comentarios Adicionales
// =============================================

/*
Este archivo `scripts.js` incluye:
- Validación de formularios con expresiones regulares.
- Integración de una API para mostrar el clima.
- Manipulación del DOM con eventos como clic, doble clic y hover.
- Funcionalidad de modo claro/oscuro con almacenamiento en localStorage.
- Uso de funciones asíncronas, promesas, arrays, objetos y bucles.
*/
