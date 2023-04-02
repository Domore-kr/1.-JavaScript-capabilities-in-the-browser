const timer = document.getElementById('timer');

timer.textContent = 15;

const interval = setInterval(() => {
  timer.textContent -= 1;
  if (timer.textContent < 1) {
    alert('Вы победили в конкурсе!');
    clearInterval(interval);
  }
}, 1000);
