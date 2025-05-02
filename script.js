// Función para mostrar u ocultar la caja de información relacionada con la imagen
function mostrarInfo(elemento) {
  const infoBox = elemento.nextElementSibling;

  if (infoBox.style.display === 'block') {
    // Si ya está visible, la oculta
    infoBox.style.display = 'none';
  } else {
    // Cierra todas las demás cajas
    document.querySelectorAll('.info-box').forEach(box => {
      box.style.display = 'none';
    });
    // Muestra solo la relacionada
    infoBox.style.display = 'block';
  }
}

// Control de sonido
const audio = document.getElementById('Naturaleza.mp3');
const btnToggle = document.getElementById('toggleSonido');

// Asegura que los elementos existen antes de asignar eventos
if (audio && btnToggle) {
  btnToggle.addEventListener('click', () => {
    if (audio.paused) {
      audio.play();
      btnToggle.textContent = '⏸️';
    } else {
      audio.pause();
      btnToggle.textContent = '▶️';
    }
  });
}

