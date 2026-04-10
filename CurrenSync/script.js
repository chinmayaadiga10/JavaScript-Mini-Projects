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

// button.addEventListener("click", async (event) => {
//   event.preventDefault();
//   console.log("button was clicked");
//   let value = amount.value;
//   if (value === "" || value < 1) {
//     value = 1;
//     amount.value = "1";
//   }
//   console.log(currency1.value, currency2.value);

//   let url = `https://v6.exchangerate-api.com/v6/8085db0e7f5923c434961189/latest/${currency1.value}`;
//   fetch(url)
//     .then((response) => {
//       // console.log(response.json());
//       return response.json();
//     })
//     .then((result) => {
//       let exchangeRate = result.conversion_rates[currency2.value];
//       let totalExchangeRate = (value * exchangeRate).toFixed(2);
//       displayText.innerText = `${value} ${currency1.value} = ${totalExchangeRate} ${currency2.value}`;
//     });
// });

swapButton.addEventListener("click", () => {
  // console.log("swap was clicked");
  let temp = currency1.value;
  currency1.value = currency2.value;
  currency2.value = temp;
  syncFlag(currency1);
  syncFlag(currency2);

  button.click();
});

button.addEventListener("click", async (event) => {
  event.preventDefault();
  let value = amount.value;
  if (value === "" || value < 1) {
    value = 1;
    amount.value = "1";
  }
  let url = `https://v6.exchangerate-api.com/v6/8085db0e7f5923c434961189/latest/${currency1.value}`;
  try {
    loader.classList.remove("hidden");
    displayText.innerText = "";

    let response = await fetch(url);
    let result = await response.json();

    console.log(result);

    if (!response.ok) {
      throw new Error("Network Response Failed");
    }

    if (result.result === "error") {
      throw new Error("API Error");
    }
    if (!result.conversion_rates) {
      throw new Error("Invalid API Data");
    }

    let exchangeRate = result.conversion_rates[currency2.value];
    let totalExchangeRate = (value * exchangeRate).toFixed(2);

    displayText.innerText = `${value} ${currency1.value} = ${totalExchangeRate} ${currency2.value}`;
  } catch (error) {
    console.log(error);
    // displayText.innerText = "Something Went Wrong";
    displayText.innerText = "⚠️ Failed to fetch exchange rate. Try again.";
  } finally {
    loader.classList.add("hidden");
  }
});
