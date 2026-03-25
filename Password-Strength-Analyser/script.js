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

const evaluateStrength = (password) => {
  let score = 0;
  let digits = /[0-9]/.test(password);
  let upperCase = /[A-Z]/.test(password);
  let lowerCase = /[a-z]/.test(password);
  let symbols = /[^A-Za-z0-9\s]/.test(password);

  let result = 0;
  let reasons = [];
  if (password.length > 8) {
    score += 1;
    console.log(score);
  } else {
    reasons.push("Increasing length of password");
  }
  if (digits == true) {
    score += 1;
    console.log(score);
  } else {
    reasons.push("Add Digits to the password");
  }
  if (upperCase == true) {
    score += 1;
    console.log(score);
  } else {
    reasons.push("Add Uppercase Characters");
  }
  if (lowerCase == true) {
    score += 1;
    console.log(score);
  } else {
    reasons.push("Add Lowercase Characters");
  }
  if (symbols == true) {
    score += 1;
    console.log(score);
  } else {
    reasons.push("Add Symbols to the password");
  }

  console.log(reasons);
  let strengthIndex = document.querySelector("#strength");
  let scoreIndex = document.querySelector("#score");
  let tips = document.querySelector("#tips");
  const listItems = document.querySelectorAll("#suggestions li");

  result = score;
  let percentage = (result / 10) * 100 * 2;
  if (result >= 4) {
    console.log("strong password");
    scoreIndex.innerHTML = `Score : ${percentage}%`;
    strengthIndex.innerHTML = "Strength Index :<b>Strong</b>";
    strengthIndex.querySelector("b").className = "strong";
    // strengthIndex.style.color = "green";
    tips.innerHTML = "Your Password Looks Perfect!";
  } else if (result < 4 && result >= 2) {
    console.log("medium password");
    scoreIndex.innerHTML = `Score : ${percentage}%`;
    strengthIndex.innerHTML = "Strength Index : <b>Medium</b>";
    strengthIndex.querySelector("b").className = "medium";
    // strengthIndex.style.color = "yellow";
  } else {
    console.log("weak password");
    scoreIndex.innerHTML = `Score : ${percentage}%`;
    strengthIndex.innerHTML = "Strength Index : <b>Weak</b>";
    strengthIndex.querySelector("b").className = "weak";
    // strengthIndex.style.color = "red";
  }
  reasons.forEach((reason, i) => {
    if (listItems[i]) {
      listItems[i].innerText = reason;
    }
  });
  console.log("function score is : ", score);
};
