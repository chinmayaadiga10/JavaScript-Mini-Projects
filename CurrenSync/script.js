const URL =
  "http://v6.exchangerate-api.com/v6/8085db0e7f5923c434961189/latest/USD";

const dropdown = document.querySelectorAll(".dropdown select");
const button = document.querySelector("button");
const amount = document.querySelector("form input");
const displayText = document.querySelector(".display");
const swapButton = document.getElementById("swap");
const loader = document.querySelector(".loader");

let currency1 = document.querySelector(".from select");
let currency2 = document.querySelector(".to select");

for (let select of dropdown) {
  for (let code in countryList) {
    let newCountry = document.createElement("option");
    newCountry.innerText = code;
    newCountry.value = code;
    if (select.name === "from" && code === "USD") {
      newCountry.selected = "selected";
    }
    if (select.name === "to" && code === "INR") {
      newCountry.selected = "selected";
    }
    select.append(newCountry);
  }

  select.addEventListener("change", (event) => {
    syncFlag(event.target);
  });
}

const syncFlag = (flag) => {
  console.log(flag);
  let currencyCode = flag.value;
  console.log(currencyCode);
  let countryCode = countryList[currencyCode];
  console.log(countryCode);
  let newSource = `https://flagsapi.com/${countryCode}/shiny/64.png`;
  let image = flag.parentElement.querySelector("img");
  image.src = newSource;
};
