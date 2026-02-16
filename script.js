const messageText = "From the moment I met you, my world became brighter. Your smile is my favorite sight. Will you be my Valentine? ❤️";

let index = 0;
const speed = 40;
const messageElement = document.getElementById("message");

// Typing effect
function typeWriter() {
  if (index < messageText.length) {
    messageElement.innerHTML += messageText.charAt(index);
    index++;
    setTimeout(typeWriter, speed);
  }
}

typeWriter();

// No button movement (Laptop + Mobile compatible)
const noBtn = document.getElementById("noBtn");

function moveButton() {
  const x = Math.random() * (window.innerWidth - 100);
  const y = Math.random() * (window.innerHeight - 50);

  noBtn.style.position = "absolute";
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
}

noBtn.addEventListener("mouseover", moveButton);
noBtn.addEventListener("click", moveButton);
noBtn.addEventListener("touchstart", moveButton);

// Yes button with controlled confetti
document.getElementById("yesBtn").addEventListener("click", function () {

  confetti({
    particleCount: 120,
    spread: 80,
    startVelocity: 40,
    gravity: 0.8,
    ticks: 200,
    origin: { y: 0.6 }
  });

  setTimeout(function () {
    document.body.innerHTML = `
      <div style="
        height:100vh;
        display:flex;
        justify-content:center;
        align-items:center;
        background:linear-gradient(135deg, #ff758c, #ff7eb3);
        color:white;
        text-align:center;
        font-size:2rem;
      ">
        You just made me the happiest person alive 💕
      </div>
    `;
  }, 1000);

});