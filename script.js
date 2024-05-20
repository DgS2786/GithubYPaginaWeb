function mostrarFechaHora() {
    const ahora = new Date();
    const fecha = ahora.toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' });
    const hora = ahora.toLocaleTimeString('es-ES');
    document.getElementById('fechaHoraActual').innerText = `Fecha y hora: ${fecha}, ${hora}`;
}
setInterval(mostrarFechaHora, 1000);

function cambiarColorFondo() {
    const colores = ['#f09481', '#5dcf71', '#6babc7', '#dee34d', '#ffffff'];
    const colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
    document.body.style.backgroundColor = colorAleatorio;
}

window.onload = function() {
    alert('¡Bienvenido a la portada de Programación Web!');
};
