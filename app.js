var btnTranslate = document.querySelector("#btn-Translate");
var txtInput = document.querySelector("#text-input");
var outputDiv = document.querySelector(".output");

var serverUrl = "https://api.funtranslations.com/translate/minion.json"

function getTranslationUrl(text) {
  return serverUrl + "?" + "text=" + text
}

function errorHandler(error) {
  console.log("error occured" + error);
  alert("something is wrong with the server");
}

function clickHandeler() {
  var inputText = txtInput.value; //taking input

  fetch(getTranslationUrl(inputText))
    .then(response => response.json())
    .then(json => {
          var translatedText = json.contents.translated;
          outputDiv.innertext = translatedText;
         })
         .catch(errorHandler)
};

btnTranslate.addEventListener("click", clickHandeler);
