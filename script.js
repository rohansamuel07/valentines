/*
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
  document.getElementById('gallery').classList.remove('hidden');
  document.getElementById('countdown').classList.remove('hidden');
  document.getElementById('loveLetter').classList.remove('hidden');
  triggerConfetti();
  startCountdown();

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

function startCountdown() {
  const valentinesDay = new Date('February 14, 2024 00:00:00').getTime();
  const timer = setInterval(() => {
    const now = new Date().getTime();
    const distance = valentinesDay - now;

    if (distance < 0) {
      clearInterval(timer);
      document.getElementById('countdown').innerHTML = "<h2>Happy Galentine's Day! ❤️</h2>";
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('days').innerText = days;
    document.getElementById('hours').innerText = hours;
    document.getElementById('minutes').innerText = minutes;
    document.getElementById('seconds').innerText = seconds;
  }, 1000);
}

function showGallery() {
  document.getElementById('loveLetter').classList.add('hidden');
  document.getElementById('gallery').classList.remove('hidden');
}
*/
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