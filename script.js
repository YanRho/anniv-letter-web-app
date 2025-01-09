document.addEventListener("DOMContentLoaded", function () {
  // Fetch data from the text file for dynamic content
  fetch("info.txt")
    .then((response) => response.json())
    .then((data) => {
      const { anniversaryDate, name, message, personalMessage, signature } =
        data;
      const startDate = new Date(anniversaryDate);

      // Populate the HTML elements with data
      document.querySelector("#recipient").innerText = name;
      const anniversaryYear =
        new Date().getFullYear() - startDate.getFullYear();
      document.querySelector(
        "#title"
      ).innerText = `Happy ${anniversaryYear}${getOrdinalSuffix(
        anniversaryYear
      )} Anniversary,`;
      document.querySelector("#message").innerText = message;
      document.querySelector("#personalMessage").innerText = personalMessage;
      document.querySelector("#signature").innerHTML = signature;

      // Function to update the counter dynamically
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
    })
    .catch((error) =>
      console.error("Error fetching anniversary details:", error)
    );

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

  // Generate hearts at intervals only on the countdown page
  if (document.getElementById("container")) {
    setInterval(createHeart, 500);
  }
});

function openEnvelope() {
  const wrapper = document.querySelector(".wrapper");
  wrapper.classList.add("open");

  // Redirect to the countdown page after a short delay
  setTimeout(() => {
    window.location.href = "letter.html"; // Path to the countdown.html file
  }, 1000); // Adjust delay to match the animation duration
}

// Function to return to the envelope page
function goBack() {
  window.location.href = "index.html"; // Redirect to the envelope page
}

// Function to get the ordinal suffix for a number
function getOrdinalSuffix(number) {
  const lastDigit = number % 10;
  const lastTwoDigits = number % 100;

  if (lastTwoDigits >= 11 && lastTwoDigits <= 13) {
    return "th";
  }

  switch (lastDigit) {
    case 1:
      return "st";
    case 2:
      return "nd";
    case 3:
      return "rd";
    default:
      return "th";
  }
}
