const searchButton = document.querySelector("button");
const word = document.getElementById("word");
const phonetic = document.getElementById("phonetic");
const keyword = document.getElementById("keyword");
const partOfSpeech = document.getElementById("speechPart");
const definition = document.getElementById("definition-result");
const solutionSection = document.querySelector(".solution");
const loader = document.querySelector(".loader");

const BASE_URL = "https://api.dictionaryapi.dev/api/v2/entries/en/%3Cword%3E";

searchButton.addEventListener("click", mainHandler);
