// Mostrar detalles del producto en un modal
function mostrarDetalles(titulo, descripcion) {
    // Mostrar el modal con los detalles
    document.getElementById('modal-titulo').textContent = titulo;
    document.getElementById('modal-descripcion').textContent = descripcion;
    document.getElementById('modal').style.display = "block";
}

// Cerrar el modal
function cerrarModal() {
    document.getElementById('modal').style.display = "none";
}

// Mostrar la sección de productos y contacto
document.getElementById('productos-link').addEventListener('click', function() {
    document.getElementById('productos').classList.remove('oculto');
    document.getElementById('contacto').classList.add('oculto');
});

document.getElementById('contacto-link').addEventListener('click', function() {
    document.getElementById('contacto').classList.remove('oculto');
    document.getElementById('productos').classList.add('oculto');
});

// Ocultar la sección de productos por defecto
window.onload = function() {
    // Ocultar las secciones por defecto
    document.getElementById('productos').classList.add('oculto');
    document.getElementById('contacto').classList.add('oculto');

    // Llamar a la función para crear copos de nieve al cargar la página
    crearCoposDeNieve();

    // Asignar el evento hover a cada imagen del producto
    agregarEventosHover();
}

// Función para crear copos de nieve animados
function crearCoposDeNieve() {
    const numeroCopos = 50; // Cantidad de copos de nieve
    const contenedor = document.body;

    for (let i = 0; i < numeroCopos; i++) {
        const copo = document.createElement('span');
        copo.classList.add('snow');

        // Generar una posición aleatoria para cada copo
        copo.style.left = `${Math.random() * 100}vw`;
        copo.style.animationDuration = `${Math.random() * 2 + 3}s`;
        copo.style.animationDelay = `${Math.random() * 5}s`;

        contenedor.appendChild(copo);
    }
}

// Función para agregar el evento hover sobre las imágenes de los productos
function agregarEventosHover() {
    // Obtener todos los elementos de producto (las imágenes)
    const productos = document.querySelectorAll('.producto');

    // Para cada producto, agregar el evento de hover
    productos.forEach(function(producto) {
        const titulo = producto.querySelector('h3').textContent; // Obtener el título del producto
        const descripcion = producto.querySelector('h3').textContent; // Aquí puedes poner una descripción de ejemplo o modificarla

        // Al pasar el mouse sobre la imagen, mostrar los detalles
        const imagen = producto.querySelector('img');
        imagen.addEventListener('mouseenter', function() {
            mostrarDetalles(titulo, descripcion);
        });

        // Al quitar el mouse, ocultar el modal
        imagen.addEventListener('mouseleave', function() {
            cerrarModal();
        });
    });
}
