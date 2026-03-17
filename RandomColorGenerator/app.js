let changeColor = () => {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);

  let color = `${red},${green},${blue}`;

  let h3 = document.querySelector("h3");
  h3.innerHTML = `The Color Generated is : #rgb(${color})`;

  let addColor = `rgb(${red},${green},${blue})`;

  let box = document.querySelector(".box");
  box.style.backgroundColor = addColor;
  box.style.border = addColor;
};

let button = document.querySelector("button");
button.addEventListener("click", changeColor);
