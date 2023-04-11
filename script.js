var heading = document.getElementById("title");
var executeButton = document.getElementById("executeButton");
var outputParagraph = document.getElementById("outputText");
var inputElement = document.getElementById("myInput");

let songList = ["lover's oath", "elogia cinerosa", "midnight mondstadt", "hanachirusato", "ripples of daydream", "fateful departing", "invitation of windblume", "innocent age"];
let colorPalette = ["#f4e6ae", "#aef4e9", "#f4aeae", "#b5f4ae", "#aee6f4", "#d0aad8"];
let fontStyles = ["Times New Roman", "Georgia", "Garamond", "Arial", "Verdana", "Helvetica"];
let fontSizes = ["xx-small", "x-small", "small", "medium", "large", "x-large", "xx-large"];


executeButton.addEventListener("click", function(){
  var currentInputText = inputElement.value;
  generate(currentInputText);
  restyle();
});

function generate(incUserInput) {
  let songIndex = Math.floor(Math.random() * songList.length);
  console.log(incUserInput);
  let randomSong = songList[songIndex];
  outputParagraph.innerText = "hello " + incUserInput + ", i recommend to you the song, '" + randomSong + "'";
}

function restyle() {
  // random font color
  let colorIndex = Math.floor(Math.random() * colorPalette.length);
  let randomColor = colorPalette[colorIndex];
  outputParagraph.style.color = randomColor;

  // random font size
  let fontIndex = Math.floor(Math.random() * fontStyles.length);
  let randomFont = fontStyles[fontIndex];

  outputParagraph.style.fontFamily = randomFont;

  let fontSizeIndex = Math.floor(Math.random() * fontSizes.length);
  let randomFontSize = fontSizes[fontSizeIndex];

  outputParagraph.style.fontSize = randomFontSize;
}