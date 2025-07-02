const video = document.getElementById('meuVideo');

  // Quando o mouse entra no vídeo: ativa o som
  video.addEventListener('mouseenter', () => {
    video.muted = false;
  });

  // Quando o mouse sai do vídeo: volta a ficar mudo
  video.addEventListener('mouseleave', () => {
    video.muted = true;
  });