function cambiarImagen() {
    const select = document.getElementById('imagen'); // Cambié a "imagen"
    const backGroundBox = document.getElementById('backGrounBox');
    const selectImagen = select.value;
    if (selectImagen) {
        backGroundBox.style.backgroundImage = `url('${selectImagen}')`;
    } else {
        backGroundBox.style.backgroundImage = 'none';
    }
}
