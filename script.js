const messageText = "ikkada 'NO' anedhi option matrame😒,so inko option ledhu yes click chey,,cheyyakapothe sasthav... Nannu pelli chesko maa! ❤️";

const messageElement = document.getElementById("message");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

let index = 0;
let noScale = 1;
let noClickCount = 0;

const funnyTexts = [
  "Are you sure? 😏",
  "Think again 😜",
  "You can't escape 😂",
  "Nice try 😎",
  "Click Yes already 😌",
  "Accept your fate 😁"
];

// Typing effect
function typeEffect() {
  if (index < messageText.length) {
    messageElement.innerHTML += messageText.charAt(index);
    index++;
    setTimeout(typeEffect, 50);
  }
}
typeEffect();


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
        <p>Now you're officially stuck with me Vinay 😎</p>
      </div>
    `;
  }, 700);

});


// NO button (stable version)
noBtn.addEventListener("click", function () {

  noClickCount++;

  // Change text
  noBtn.innerText = funnyTexts[noClickCount % funnyTexts.length];

  // Shrink + rotate
  noScale -= 0.05;
  if (noScale > 0.4) {
    noBtn.style.transform = `scale(${noScale}) rotate(${noClickCount * 5}deg)`;
  }

  // Safe movement boundaries (prevents disappearing)
  const safeWidth = 120;
  const safeHeight = 60;

  const x = Math.random() * (window.innerWidth - safeWidth);
  const y = Math.random() * (window.innerHeight - safeHeight);

  noBtn.style.position = "fixed";
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";

});


// Floating hearts
function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = "❤️";

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 20 + 10 + "px";

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 6000);
}

setInterval(createHeart, 700);