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

const extractData = (result) => {
  console.log("Word is ", result[0].word);
  console.log("Phonetics is ", result[0].phonetic);
  console.log("Part of speech is ", result[0].meanings[0].partOfSpeech);
  console.log(
    "Definition of word is ",
    result[0].meanings[0].definitions[0].definition,
  );
  console.log(result[0].meanings[0].synonyms);
  console.log(result[0].meanings[0].definitions[0].example);

  let resultWord = result[0].word || "Word Not Available";
  let displayWord = resultWord.charAt(0).toUpperCase() + resultWord.slice(1);
  keyword.textContent = displayWord;

  let resultPhonetics =
    result[0].phonetic ||
    result[0].phonetics?.[0]?.text ||
    "Phonetic Not Available";

  phonetic.textContent = resultPhonetics;

  let resultSpeech = result[0].meanings?.[0]?.partOfSpeech || "Not Available";
  let displayResult =
    resultSpeech.charAt(0).toUpperCase() + resultSpeech.slice(1);
  partOfSpeech.innerHTML = `Part of Speech of the given word is : <b>${displayResult}</b>`;

  let resultDefinition =
    result[0].meanings?.[0]?.definitions?.[0]?.definition ||
    "No Definition Available";
  definition.textContent = resultDefinition;
};
