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

const play = () => {
  const move = () => {
    if (game_state != "Play") return;

    let pipe = document.querySelectorAll(".pipe");
    pipe.forEach((el) => {
      let pipe_sprite_props = el.getBoundingClientRect();
      bird_props = bird.getBoundingClientRect();

      if (pipe_sprite_props.right <= 0) {
        el.remove();
      } else {
        if (
          bird_props.left < pipe_sprite_props.left + pipe_sprite_props.width &&
          bird_props.left + bird_props.width > pipe_sprite_props.left &&
          bird_props.top < pipe_sprite_props.top + pipe_sprite_props.height &&
          bird_props.top + bird_props.height > pipe_sprite_props.top
        ) {
          game_state = "End";
          message.innerHTML =
            "<span style='color:red'>Game Over</span>" +
            "<br><b>Press Enter To Restart</b>";
          message.classList.add("message-style");
          image.style.display = "none";
          return;
        } else {
          if (
            pipe_sprite_props.right < bird_props.left &&
            pipe_sprite_props.right + move_speed >= bird_props.left &&
            el.increase_score == "1"
          ) {
            score_val.innerHTML = +score_val.innerHTML + 1;

            el.increase_score = "0";
          }
          el.style.left = pipe_sprite_props.left - move_speed + "px";
        }
      }
    });
    requestAnimationFrame(move);
  };
  requestAnimationFrame(move);
};
