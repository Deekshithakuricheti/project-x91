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
  "Don’t do this 💔",
  "You can't escape 😈",
  "Okay now you're testing me 😭",
  "Fine. Try again 😌"
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
      <div style="
        height:100vh;
        display:flex;
        justify-content:center;
        align-items:center;
        background:linear-gradient(135deg, #ff758c, #ff7eb3);
        color:white;
        text-align:center;
        font-size:2rem;
        padding:20px;
      ">
        I knew you'd say YES 😌💖 <br><br>
        Now you're officially stuck with me 😎
      </div>
    `;
  }, 700);
});

// NO button (Funny Mode)
noBtn.addEventListener("click", function () {

  noClickCount++;

  // Change text every click
  noBtn.innerText = funnyTexts[noClickCount % funnyTexts.length];

  // Shrink button gradually
  noScale -= 0.08;
  if (noScale > 0.4) {
    noBtn.style.transform = 'scale(${noScale})';
  }

  // Move randomly
  const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
  const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);

  noBtn.style.position = "absolute";
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
});