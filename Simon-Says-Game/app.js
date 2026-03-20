let userSequence = [];
let gameSequence = [];
let buttons = ["red", "yellow", "blue", "green"];

let initialState = false;
let level = 0;

let h3 = document.querySelector("h3");
let body = document.querySelector("body");
// document.addEventListener("keypress", () => {
//   if (initialState == false) {
//     console.log("game has started");
//     initialState = true;
//     h3.textContent = "Game has started - LEVEL 0";
//   }
// });

const gameState = () => {
  if (initialState == false) {
    // h3.textContent = "Game has started - LEVEL 0";
    initialState = true;

    levelUp();
  }
};
document.addEventListener("keypress", gameState);

const gameFlashButton = (btn) => {
  btn.classList.add("game-flash");
  setTimeout(() => {
    btn.classList.remove("game-flash");
  }, 400);
};

const userFlashButton = (btn) => {
  btn.classList.add("user-flash");
  setTimeout(() => {
    btn.classList.remove("user-flash");
  }, 400);
};

let levelUp = () => {
  userSequence = [];
  level++;
  h3.innerText = `Level ${level}`;

  let randomIndex = Math.floor(Math.random() * 4);
  let randomColor = buttons[randomIndex];

  let randomButton = document.querySelector(`.${randomColor}`);

  console.log(randomIndex);
  console.log(randomColor);
  console.log(randomButton);

  gameSequence.push(randomColor);
  console.log(gameSequence);

  gameFlashButton(randomButton);
};

const checkStatus = (index) => {
  if (userSequence[index] == gameSequence[index]) {
    if (userSequence.length == gameSequence.length) {
      setTimeout(levelUp, 1000);
    }
  } else {
    body.classList.add("error-flash");
    setTimeout(() => {
      body.classList.remove("error-flash");
    }, 1000);
    h3.innerHTML = `Game Over! Your Score was <b>${level}</b><br> Press any key to start the game`;
    resetGameState();
  }
};

function buttonPress() {
  let btn = this;
  userFlashButton(btn);

  userColor = btn.getAttribute("id");
  console.log(userColor);
  userSequence.push(userColor);

  checkStatus(userSequence.length - 1);
}
let allButtons = document.querySelectorAll(".btn");
for (btn of allButtons) {
  btn.addEventListener("click", buttonPress);
}

const resetGameState = () => {
  initialState = false;
  gameSequence = [];
  userSequence = [];
  level = 0;
};
