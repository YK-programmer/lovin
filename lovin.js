const correctPassword = "toshi"; // change this
const passwordScreen = document.getElementById("passwordScreen");
const mainContent = document.getElementById("mainContent");
const envelope = document.querySelector(".envelope");
const letter = document.getElementById("letter");
const music = document.getElementById("bgMusic");

function checkPassword() {
  const input = document.getElementById("passwordInput").value;
  if (input === correctPassword) {
    passwordScreen.classList.add("hidden");
    mainContent.classList.remove("hidden");
  } else {
    alert("Wrong password 😢");
  }
}

function openLetter() {
  envelope.classList.add("open");
  letter.classList.remove("hidden");
  startHearts();
}

function closeLetter() {
  envelope.classList.remove("open");
  letter.classList.add("hidden");
}

function toggleNight() {
  document.body.classList.toggle("night");
}

function toggleMusic() {
  if (music.paused) {
    music.play();
  } else {
    music.pause();
  }
}

function surprise() {
  confetti({
    particleCount: 200,
    spread: 100,
    origin: { y: 0.6 }
  });
  alert("Forever and Always ❤️");
}

function startHearts() {

  const envelope = document.querySelector(".envelope");
  const rect = envelope.getBoundingClientRect();

  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;

  for (let i = 0; i < 50; i++) {   // more hearts = more chaos
    const heart = document.createElement("div");
    heart.innerHTML = "❤️";

    heart.style.position = "fixed";
    heart.style.left = centerX + "px";
    heart.style.top = centerY + "px";
    heart.style.fontSize = Math.random() * 20 + 15 + "px";
    heart.style.pointerEvents = "none";

    // random explosion direction
    const x = (Math.random() - 0.5) * 800;
    const y = (Math.random() - 0.5) * 800;

    heart.style.transition = "transform 1s ease-out, opacity 1s ease-out";
    document.body.appendChild(heart);

    requestAnimationFrame(() => {
      heart.style.transform = `translate(${x}px, ${y}px) scale(1.8)`;
      heart.style.opacity = "0";
    });

    setTimeout(() => heart.remove(), 1000);
  }
}


/* Floating animation */
const style = document.createElement('style');
style.innerHTML = `
@keyframes float {
  to {
    transform: translateY(-100vh);
    opacity: 0;
  }
}`;
document.head.appendChild(style);