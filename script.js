document.addEventListener('DOMContentLoaded', () => {
    console.log("¡El portafolio de Egledis está listo!");

    // Efecto visual: Al hacer clic en el nombre, cambia de color
    const nombre = document.querySelector('h1');
    nombre.addEventListener('click', () => {
        nombre.style.color = '#3498db';
    });
});

