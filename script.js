let intel = 1;
let speed = 1;
let creativity = 1;
let tokens = 0;
let stage = 1;

const intelDisplay = document.getElementById("intel");
const speedDisplay = document.getElementById("speed");
const creativityDisplay = document.getElementById("creativity");
const tokenDisplay = document.getElementById("tokens");
const robotImage = document.getElementById("robot");

function updateDisplay() {
  intelDisplay.textContent = intel;
  speedDisplay.textContent = speed;
  creativityDisplay.textContent = creativity;
  tokenDisplay.textContent = tokens;
}

function evolveCheck() {
  const total = intel + speed + creativity;
  if (total > 10 && stage === 1) {
    stage = 2;
    robotImage.src = "stage2.png";
  } else if (total > 20 && stage === 2) {
    stage = 3;
    robotImage.src = "stage3.png";
  }
}

function train(stat) {
  switch (stat) {
    case "intel":
      intel++;
      break;
    case "speed":
      speed++;
      break;
    case "creativity":
      creativity++;
      break;
  }
  tokens += 2;
  updateDisplay();
  evolveCheck();
}

document.getElementById("trainIntel").addEventListener("click", () => train("intel"));
document.getElementById("trainSpeed").addEventListener("click", () => train("speed"));
document.getElementById("trainCreativity").addEventListener("click", () => train("creativity"));

updateDisplay();
