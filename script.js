function showMessage() {
  document.getElementById('homepage').classList.add('hidden');
  document.getElementById('message').classList.remove('hidden');
  document.getElementById('backgroundMusic').play();

  // Add typewriter effect
  const message = document.querySelector('#message h2');
  message.classList.add('typewriter');
}

function showConfetti() {
  document.getElementById('message').classList.add('hidden');
  document.getElementById('confetti').classList.remove('hidden');
  document.getElementById('loveLetter').classList.remove('hidden');
  triggerConfetti();

  // Add floating hearts
  for (let i = 0; i < 20; i++) {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤️';
    heart.style.left = `${Math.random() * 100}vw`;
    heart.style.top = `${Math.random() * 100}vh`;
    document.body.appendChild(heart);
  }
}

function moveButton() {
  const noButton = document.getElementById('noButton');
  const x = Math.random() * (window.innerWidth - noButton.offsetWidth);
  const y = Math.random() * (window.innerHeight - noButton.offsetHeight);
  noButton.style.position = 'absolute';
  noButton.style.left = `${x}px`;
  noButton.style.top = `${y}px`;
}

function triggerConfetti() {
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 },
  });
}

function redirectToMemories() {
  // Save the audio state
  const audio = document.getElementById('backgroundMusic');
  sessionStorage.setItem('audioTime', audio.currentTime);
  sessionStorage.setItem('audioPlaying', !audio.paused);

  // Redirect to memories.html
  window.location.href = 'memories.html';
}