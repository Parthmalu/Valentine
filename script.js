function openEnvelope() {
  document.querySelector(".envelope-wrapper").classList.add("open");
}

function nextPage(event) {
  // Prevent click from bubbling to the envelope trigger
  event.stopPropagation();

  const p1 = document.getElementById("page1");
  const p2 = document.getElementById("page2");

  p1.classList.remove("active");
  p2.classList.add("active");
}

function moveNo() {
  const btn = document.getElementById("noBtn");
  const x = Math.random() * (window.innerWidth - 100);
  const y = Math.random() * (window.innerHeight - 50);

  btn.style.left = x + "px";
  btn.style.top = y + "px";
}

function celebrate() {
  document.getElementById("yayText").style.display = "block";
  confetti({
    particleCount: 150,
    spread: 70,
    origin: { y: 0.6 },
    colors: ["#ff69b4", "#ff1493", "#ffffff"],
  });
}