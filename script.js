function openLetter() {
  const p1 = document.getElementById("page1");
  const p2 = document.getElementById("page2");

  // Add a quick "flip" animation feel
  document.querySelector(".top-flap").style.transform = "rotateX(180deg)";

  setTimeout(() => {
    p1.classList.remove("active");
    p2.classList.add("active");
  }, 600);
}

function goToProposal() {
  document.getElementById("page2").classList.remove("active");
  document.getElementById("page3").classList.add("active");
}

function moveNo() {
  const btn = document.getElementById("noBtn");
  // Change to absolute so it can fly anywhere on screen
  btn.style.position = "fixed";

  const x = Math.random() * (window.innerWidth - btn.offsetWidth);
  const y = Math.random() * (window.innerHeight - btn.offsetHeight);

  btn.style.left = x + "px";
  btn.style.top = y + "px";
}

function celebrate() {
  document.getElementById("yayText").style.display = "block";
  document.getElementById("noBtn").style.display = "none";

  const duration = 10 * 1000;
  const animationEnd = Date.now() + duration;

  const interval = setInterval(function () {
    const timeLeft = animationEnd - Date.now();
    if (timeLeft <= 0) return clearInterval(interval);

    confetti({
      particleCount: 40,
      startVelocity: 30,
      spread: 360,
      origin: { x: Math.random(), y: Math.random() - 0.2 },
      colors: ["#ff69b4", "#ff1493", "#ffffff"],
    });
  }, 250);
}
