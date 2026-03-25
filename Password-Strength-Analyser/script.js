let resultSection = document.querySelector(".result");
let initialized = false;

let form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  resultSection.style.display = "block";
  console.log("form was submitted");

  let email = document.querySelector("#email");
  //   console.dir(email);
  console.log(email.value);

  let password = document.querySelector("#password");
  //   console.dir(password);
  let userPassword = password.value;
  console.log(`The password entered by the user is :${userPassword}`);

  //   let score = 0;
  //   let digits = /[0-9]/.test(userPassword);
  //   let upperCase = /[A-Z]/.test(userPassword);
  //   let lowerCase = /[a-z]/.test(userPassword);
  //   let symbols = /[^A-Za-z0-9\s]/.test(userPassword);
  //   if (userPassword.length > 8) {
  //     score += 1;
  //     console.log(score);
  //   }
  //   if (digits == true) {
  //     score += 1;
  //     console.log(score);
  //   }
  //   if (upperCase == true) {
  //     score += 1;
  //     console.log(score);
  //   }
  //   if (lowerCase == true) {
  //     score += 1;
  //     console.log(score);
  //   }
  //   if (symbols == true) {
  //     score += 1;
  //     console.log(score);
  //   }

  //   console.log(score);
  //   console.log(digits);
  //   console.log(upperCase);
  //   console.log(lowerCase);
  //   console.log(symbols);

  //   console.log("The final score is : ", score);

  //   evaluateStrength(userPassword);

  evaluateStrength(userPassword);
});
