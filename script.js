document.addEventListener("DOMContentLoaded", function () {
  const startDate = new Date("2023-01-09T00:00:00");

  function updateCounter() {
    const now = new Date();
    const diff = now - startDate;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    document.getElementById(
      "counter"
    ).innerText = `${days} days, ${hours} hours, ${minutes} minutes, and ${seconds} seconds`;
  }

  setInterval(updateCounter, 1000);
  updateCounter();

  // Floating Hearts Animation
  function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";
    document.body.appendChild(heart);

    // Randomize size and position
    const size = Math.random() * 30 + 20; // Between 20px and 50px
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = size + "px";
    heart.style.animationDuration = Math.random() * 3 + 5 + "s";

    // Remove heart after animation
    setTimeout(() => {
      heart.remove();
    }, 6000);
  }

  // Generate hearts at intervals
  setInterval(createHeart, 500);
});

function openEnvelope() {
  const wrapper = document.querySelector(".wrapper");
  wrapper.classList.add("open");

  // Redirect to the countdown page after a short delay
  setTimeout(() => {
    window.location.href = "countdown.html"; // Path to the countdown.html file
  }, 1000); // Adjust delay to match the animation duration
}

function goBack() {
  window.location.href = "index.html"; // Redirect to the envelope page
}
