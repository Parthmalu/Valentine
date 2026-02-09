function openEnvelope() {
  document.querySelector(".envelope-wrapper").classList.add("open");
}

function nextPage(event) {
  event.stopPropagation();
  const p1 = document.getElementById("page1");
  const p2 = document.getElementById("page2");

  // Simple transition
  p1.style.transition = "0.5s";
  p1.style.transform = "translateX(-100%)";
  setTimeout(() => {
    p1.classList.remove("active");
    p2.classList.add("active");
  }, 500);
}

function moveNo() {
  const btn = document.getElementById("noBtn");
  // Calculate random position within screen bounds
  const x = Math.random() * (window.innerWidth - btn.offsetWidth);
  const y = Math.random() * (window.innerHeight - btn.offsetHeight);

  btn.style.left = x + "px";
  btn.style.top = y + "px";
}

function celebrate() {
  const yay = document.getElementById("yayText");
  yay.style.display = "block";
  document.getElementById("noBtn").style.display = "none";

  // Confetti explosion
  const duration = 5 * 1000;
  const animationEnd = Date.now() + duration;
  const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

  function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }

  const interval = setInterval(function () {
    const timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      return clearInterval(interval);
    }

    const particleCount = 50 * (timeLeft / duration);
    confetti({
      ...defaults,
      particleCount,
      origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
    });
    confetti({
      ...defaults,
      particleCount,
      origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
    });
  }, 250);
}
