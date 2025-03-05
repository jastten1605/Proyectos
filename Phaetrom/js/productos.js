// Base de datos de productos
const productos = [
    // Espadas
    { id: 1, nombre: "Yamato", descripcion: "La katana de Vergil, capaz de separar el hombre del demonio y cortar el espacio.", precio: 200.00, imagen: "images/yamato.webp", categoria: "espadas", tipo:"juegos" },
    { id: 2, nombre: "Rebellion", descripcion: "La espada del legendario caza demonios Dante capaz de unir el hombre con el demonio.", precio: 250.00, imagen: "images/rebelion.webp", categoria: "espadas", tipo:"juegos"  },
    { id: 3, nombre: "Red Queen", descripcion: "La espada del novato Nero, este espadón cuenta con un motor de inyección para causar estragos.", precio: 180.00, imagen: "images/red_queen.webp", categoria: "espadas", tipo:"juegos"  },
    { id: 4, nombre: "Ragnell", descripcion: "Espada del héroe radiante, bendecida por la diosa. Se dice que era para cortar a dioses.", precio: 145.00, imagen: "images/ragnell.webp", categoria: "espadas", tipo:"juegos"  },
    { id: 5, nombre: "Espadas del Caos", descripcion: "Espadas que usó el fantasma de Esparta para acabar con todos los que se le cruzaban.", precio: 180.00, imagen: "images/caos.webp", categoria: "espadas", tipo:"juegos"  },
    { id: 6, nombre: "Espada Plegable", descripcion: "Espada plegable que utilizó Corvo Attano en su cruzada.", precio: 100.00, imagen: "images/corvo.webp", categoria: "espadas", tipo:"juegos"  },
    { id: 7, nombre: "Agonía de Escarcha", descripcion: "Espada de Arthas, el Rey Exánime, para atormentar Azeroth.", precio: 250.00, imagen: "images/agonia_escarcha.webp", categoria: "espadas", tipo:"juegos"  },
    { id: 8, nombre: "Dragon Slayer", descripcion: "Espada de Guts que requiere de una fuerza sobrehumana solo para levantarla.", precio: 230.00, imagen: "images/dragon_slayer.webp", categoria: "espadas", tipo:"anime" },
    { id: 9, nombre: "Espada del Verdugo", descripcion: "Espada del infame verdugo Pyramid Head para atormentar a James Sunderland.", precio: 200.00, imagen: "images/verdugo.webp", categoria: "espadas", tipo:"juegos"  },
    { id: 10, nombre: "Espada de Trunks", descripcion: "Espada del chico del futuro que vino a advertir a los Guerreros Z.", precio: 180.00, imagen: "images/trunks.webp", categoria: "espadas", tipo:"anime" },
    { id: 11, nombre: "Dardo", descripcion: "Espada que utilizaron Bilbo y Frodo Bolsón en su viaje por la Tierra Media.", precio: 150.00, imagen: "images/sting.webp", categoria: "espadas", tipo:"peliculas" },
    { id: 12, nombre: "Zangetsu", descripcion: "Espada de Ichigo que utiliza en su forma de shinigami.", precio: 180.00, imagen: "images/zangetsu.webp", categoria: "espadas", tipo:"anime" },

    // Hachas
    { id: 13, nombre: "Aulla Visceras", descripcion: "Hacha que representa el poder de un líder de la Horda.", precio: 150.00, imagen: "images/AhullaVisceras.webp", categoria: "hachas", tipo:"juegos"  },
    { id: 14, nombre: "Armands", descripcion: "Hacha colosal que llevó el general de Ositia en su aventura.", precio: 120.00, imagen: "images/Armads.webp", categoria: "hachas", tipo:"juegos"  },
    { id: 15, nombre: "Hacha de Batalla de Gimli", descripcion: "Hacha que utilizó Gimli en sus aventuras por la Tierra Media.", precio: 100.00, imagen: "images/battle-axe-of-gimli.webp", categoria: "hachas", tipo:"anime" },
    { id: 16, nombre: "Tomahawk de Connor", descripcion: "Tomahawk que utilizó Connor Kenway para su cruzada contra los templarios.", precio: 100.00, imagen: "images/Tomahack.webp", categoria: "hachas", tipo:"juegos"  },
    { id: 17, nombre: "Hacha Leviatán", descripcion: "Hacha que utilizó Kratos en sus aventuras por las tierras nórdicas.", precio: 120.00, imagen: "images/Leviatan.webp", categoria: "hachas", tipo:"juegos"  },
    { id: 18, nombre: "StormBreaker", descripcion: "Hacha que utilizó el Dios Thor para combatir a Thanos.", precio: 100.00, imagen: "images/StormBreaker.webp", categoria: "hachas", tipo:"anime" },

    // Lanzas
    { id: 19, nombre: "Lanza de Arlechino", descripcion: "Lanza de Arlechino que usa para reducir a sus enemigos a cenizas.", precio: 180.00, imagen: "images/arlechino_11zon_with_bgc_11zon.webp", categoria: "lanzas", tipo:"juegos"  },
    { id: 20, nombre: "Lanza de Draupnir", descripcion: "Lanza que utilizó Kratos para acabar con el Dios Heimdall.", precio: 130.00, imagen: "images/draupnir.webp", categoria: "lanzas", tipo:"juegos"  },
    { id: 21, nombre: "Lanza de Leonidas", descripcion: "Lanza que utilizaba el protagonista de AC Odyssey para acabar con sus enemigos.", precio: 160.00, imagen: "images/Spear_of_Leonidas_2_1500x_with_bgc_11zon.webp", categoria: "lanzas", tipo:"juegos"  },
    { id: 22, nombre: "Guan Dao", descripcion: "Lanza de Guan Yu, el héroe del relato de los Tres Reinos.", precio: 100.00, imagen: "images/Guan_dao_with_bgc_11zon.webp", categoria: "lanzas", tipo:"anime" },
    { id: 23, nombre: "Gae Bold", descripcion: "Lanza emblema de los Dragoon en el juego online Final Fantasy XIV.", precio: 130.00, imagen: "images/gae_bold.webp", categoria: "lanzas", tipo:"juegos"  },
    { id: 24, nombre: "Areadbhar", descripcion: "Lanza emblema de Dimitri que demuestra que es el Rey de Faerghus.", precio: 160.00, imagen: "images/dimitri.webp", categoria: "lanzas", tipo:"juegos"  }
];

// Función para obtener el parámetro "id" de la URL
function obtenerIdProducto() {
    const params = new URLSearchParams(window.location.search);
    return parseInt(params.get('id')); // Convierte el id a número
}

// Función para mostrar los detalles del producto
function mostrarProducto() {
    const id = obtenerIdProducto();
    const producto = productos.find(p => p.id === id); // Busca el producto por id

    if (producto) {
        // Actualiza el contenido de la página
        document.getElementById('producto-imagen').src = producto.imagen;
        document.getElementById('producto-nombre').textContent = producto.nombre;
        document.getElementById('producto-id').textContent = `Código: ${producto.id}`;
        document.getElementById('producto-precio').textContent = `Precio: €${producto.precio.toFixed(2)}`;
        document.getElementById('producto-descripcion').textContent = producto.descripcion;
    } else {
        // Si no se encuentra el producto, muestra un mensaje de error
        document.querySelector('main').innerHTML = '<p>Producto no encontrado.</p>';
    }
}

// Ejecuta la función al cargar la página
document.addEventListener('DOMContentLoaded', mostrarProducto);
