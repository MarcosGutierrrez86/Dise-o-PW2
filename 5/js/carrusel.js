let indice = 0;
const intervalTime = 3000;
const imagenes = document.getElementById('imagenes');
const totalImagenes = imagenes.children.length;

function actualizarCarrusel() {
    const desplazamiento = -indice * 100;
    imagenes.style.transform = `translateX(${desplazamiento}%)`;
}

function siguiente() {
    indice = (indice + 1) % totalImagenes; // Esto permite que el carrusel sea cíclico
    actualizarCarrusel();
}

function iniciarCarrusel() {
    setInterval(siguiente, intervalTime);
}

iniciarCarrusel();
