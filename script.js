
function mostrarInfo(elemento) {
  // Cierra todas las info-box
  document.querySelectorAll('.info-box').forEach(box => {
    box.style.display = 'none';
  });

  // Muestra la caja correspondiente a la imagen clickeada
  const infoBox = elemento.nextElementSibling;
  if (infoBox && infoBox.classList.contains('info-box')) {
    infoBox.style.display = 'block';
  }
}

// Sonido
const audio = document.getElementById('audioZen');
const btnToggle = document.getElementById('toggleSonido');

btnToggle.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
    btnToggle.textContent = '⏸️';
  } else {
    audio.pause();
    btnToggle.textContent = '▶️';
  }
});
function mostrarInfo(elemento) {
  const infoBox = elemento.nextElementSibling;

  // Si ya está visible, ocúltala
  if (infoBox.style.display === 'block') {
    infoBox.style.display = 'none';
  } else {
    // Cierra todas las demás
    document.querySelectorAll('.info-box').forEach(box => {
      box.style.display = 'none';
    });
    // Abre solo la relacionada
    infoBox.style.display = 'block';
  }
}
