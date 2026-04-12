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

async function mainHandler(event) {
  event.preventDefault();
  console.log("button was clicked");
  const searchWord = word.value.trim().toLowerCase();
  console.log(searchWord);
  if (searchWord === "") {
    alert("please enter valid search word");
    return;
  }
  showLoader();
  solutionSection.classList.add("hidden");

  try {
    let resultAPI = await fetchWord(searchWord);

    hideLoader();
    solutionSection.classList.remove("hidden");

    extractData(resultAPI);
  } catch (error) {
    hideLoader();

    if (error.message === "WORD NOT FOUND") {
      showError(`No results found for "${searchWord}"`);
    } else {
      showError("Something went wrong. Try again later");
    }
  }
}

const fetchWord = async (word) => {
  let URL = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;

  let response = await fetch(URL);

  if (!response.ok) {
    if (response.status === 404) {
      throw new Error("WORD NOT FOUND");
    } else {
      throw new Error("SERVER ERROR");
    }
  }

  let result = await response.json();
  console.log(result);
  return result;
};
