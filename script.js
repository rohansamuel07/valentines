function showMessage() {
  document.getElementById('homepage').classList.add('hidden');
  document.getElementById('message').classList.remove('hidden');
  document.getElementById('backgroundMusic').play();
}

function showConfetti() {
  document.getElementById('message').classList.add('hidden');
  document.getElementById('confetti').classList.remove('hidden');
  document.getElementById('gallery').classList.remove('hidden');
  document.getElementById('countdown').classList.remove('hidden');
  triggerConfetti();
  startCountdown();
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
  const confettiSettings = { target: 'confetti', size: 2, animate: true, props: ['circle', 'square', 'triangle'] };
  const confetti = new ConfettiGenerator(confettiSettings);
  confetti.render();
}

function startCountdown() {
  const valentinesDay = new Date('February 14, 2024 00:00:00').getTime();
  const timer = setInterval(() => {
    const now = new Date().getTime();
    const distance = valentinesDay - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('days').innerText = days;
    document.getElementById('hours').innerText = hours;
    document.getElementById('minutes').innerText = minutes;
    document.getElementById('seconds').innerText = seconds;

    if (distance < 0) {
      clearInterval(timer);
      document.getElementById('countdown').innerHTML = "<h2>Happy Valentine's Day! ❤️</h2>";
    }
  }, 1000);
}
