const messageText = "Nuvvu ‘No’ ani anadam option laga pettanu... ala ani no ante sasthavv 😌. So.. andhukanii.... Nannu pelli cheskuntavaa..? ❤️";

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

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

let noClickCount = 0;
let noScale = 1;

const funnyTexts = [
  "Are you sure? 🤨",
  "Think again 😏",
  "Last chance 👀",
  "Really? 😂",
  "Don't do this 💔",
  "You can't escape 😈",
  "Testing my patience huh? 😭",
  "Okay okay try again 😌"
];

// YES button
yesBtn.addEventListener("click", function () {

  confetti({
    particleCount: 180,
    spread: 110,
    origin: { y: 0.6 }
  });

  setTimeout(function () {
    document.body.innerHTML = `
      <div class="final-screen">
        <h1>I knew you'd say YES 😌💖</h1>
        <p>Now you're officially stuck with me 😎</p>
      </div>
    `;
  }, 700);
});

// NO button (Funny mode)
noBtn.addEventListener("click", function () {

  noClickCount++;

  noBtn.innerText = funnyTexts[noClickCount % funnyTexts.length];

  noScale -= 0.08;
  if (noScale > 0.4) {
    noBtn.style.transform ='scale(${noScale})';
  }

  const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
  const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);

  noBtn.style.position = "absolute";
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
});