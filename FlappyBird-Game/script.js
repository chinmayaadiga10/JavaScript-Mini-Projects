let move_speed = 3;
let gravity = 0.5;

const bird = document.querySelector(".bird");
const image = document.getElementById("bird-1");

let bird_props = bird.getBoundingClientRect();

let background = document.querySelector(".background").getBoundingClientRect();

let score_val = document.querySelector(".score-value");

let message = document.querySelector(".message");
let score_title = document.querySelector(".score-title");
