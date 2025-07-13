
  // Create the audio object
  const hoverSound = new Audio('images/noisy-whooshes-88507.mp3');

  // Select elements that should play sound on hover
  const elements = document.querySelectorAll('.hover-sound-button');

  elements.forEach(el => {
    el.addEventListener('mouseenter', () => {
      hoverSound.currentTime = 1; // rewind to start
      hoverSound.play();
    });
  });
