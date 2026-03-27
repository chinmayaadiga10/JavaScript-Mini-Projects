const range = document.getElementById("passwordRange");
const number = document.getElementById("passwordLength");

const includeUppercase = document.getElementById("uppercase");
const includeDigits = document.getElementById("digits");
const includeSymbols = document.getElementById("symbols");

const UPPERCASE_CHAR_CODES = arrayFromLowToHigh(65, 90);
const LOWERCASE_CHAR_CODES = arrayFromLowToHigh(97, 122);
const SYMBOLS_CHAR_CODES = arrayFromLowToHigh(33, 47);
const DIGITS_CHAR_CODES = arrayFromLowToHigh(48, 57);
const form = document.getElementById("password-generation-form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const characterLength = number.value;
  const characterUppercase = includeUppercase.checked;
  const characterDigits = includeDigits.checked;
  const characterSymbols = includeSymbols.checked;
  const password = generatePassword(
    characterLength,
    characterUppercase,
    characterDigits,
    characterSymbols,
  );
  passwordDisplay.value = password;

  console.log(event);
});

const syncValues = (event) => {
  console.log(event.target.value);
  const value = event.target.value;
  number.value = value;
  range.value = value;

  console.dir(event);
};

const generatePassword = (
  characterLength,
  characterUppercase,
  characterDigits,
  characterSymbols,
) => {
  let charCodes = LOWERCASE_CHAR_CODES;
  if (characterUppercase) charCodes = charCodes.concat(UPPERCASE_CHAR_CODES);
  if (characterDigits) charCodes = charCodes.concat(DIGITS_CHAR_CODES);
  if (characterSymbols) charCodes = charCodes.concat(SYMBOLS_CHAR_CODES);
  const passwordCharacters = [];
  for (let i = 0; i < characterLength; i++) {
    const randomCharacter =
      charCodes[Math.floor(Math.random() * charCodes.length)];
    passwordCharacters.push(String.fromCharCode(randomCharacter));
  }
  // String.fromCharCode(95);
  console.log(LOWERCASE_CHAR_CODES);

  return passwordCharacters.join("");
};

function arrayFromLowToHigh(low, high) {
  const array = [];
  for (let i = low; i <= high; i++) {
    array.push(i);
  }
  return array;
}

range.addEventListener("input", syncValues);
number.addEventListener("input", syncValues);
