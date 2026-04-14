let move_speed = 3;
let gravity = 0.5;

const bird = document.querySelector(".bird");
const image = document.getElementById("bird-1");

let bird_props = bird.getBoundingClientRect();

let background = document.querySelector(".background").getBoundingClientRect();

let score_val = document.querySelector(".score-value");

let message = document.querySelector(".message");
let score_title = document.querySelector(".score-title");

document.addEventListener("keydown", (e) => {
  if (e.key == "ArrowUp" && game_state === "Play") {
    image.src = "Resources/Bird-2.png";
    bird_dy = -7.6;
  }
});

document.addEventListener("keyup", (e) => {
  if (e.key == "ArrowUp") {
    image.src = "Resources/Bird.png";
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key == "Enter" && game_state != "Play") {
    document.querySelectorAll(".pipe").forEach((el) => {
      el.remove();
    });
    image.style.display = "block";
    bird.style.top = "40vh";
    game_state = "Play";
    message.innerHTML = "";
    score_title.innerHTML = "Score : ";
    score_val.innerHTML = "0";
    message.classList.remove("message-style");
    play();
  }
});
