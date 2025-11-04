(function showCurrentTime(){
      const el = document.getElementById('currentTime');
      if(!el) return;
      const now = new Date();
      el.textContent = 'Hora actual: ' + now.toLocaleString('es-MX');
    })();
    
    // Funciones para abrir y cerrar modales
    function openModal(game) {
      document.getElementById(`${game}-modal`).style.display = 'block';
    }

    function closeModal(game) {
      document.getElementById(`${game}-modal`).style.display = 'none';
    }

    // Cerrar modal al hacer clic fuera del contenido
    window.onclick = function(event) {
      const modals = document.getElementsByClassName('modal');
      for (let i = 0; i < modals.length; i++) {
        if (event.target === modals[i]) {
          modals[i].style.display = 'none';
        }
      }
    }

   let indice = 0;

    function moverCarrusel(direccion) {
      const carrusel = document.getElementById('imagenes');
      const totalImagenes = carrusel.children.length;

      indice = (indice + direccion + totalImagenes) % totalImagenes;
      carrusel.style.transform = `translateX(-${indice * 100}%)`;
    }
    
  
  let urlSitio = "";

  function mostrarVideo(videoSrc, sitioUrl) {
    const video = document.getElementById("video");
    const botonSitio = document.getElementById("botonSitio");

    video.src = videoSrc;
    video.play();

    urlSitio = sitioUrl;
    botonSitio.style.display = "inline-block";
  }

  document.getElementById("botonSitio").addEventListener("click", () => {
    if (urlSitio) window.open(urlSitio, "_blank");
  });
