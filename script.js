let titleText = document.getElementById("titleText");
let questionText = document.getElementById("questionText");
let	userInput = document.getElementById("userInput");
let	executeButton = document.getElementById("executeButton");
let recommendationText = document.getElementById("recommendationText");


let colorPalette = ["#f4e6ae", "#aef4e9", "#f4aeae", "#b5f4ae", "#aee6f4", "#d0aad8"];
let songList = ["lover's oath", "elogia cinerosa", "midnight mondstadt", "hanachirusato", "ripples of daydream", "fateful departing", "invitation of windblume", "innocent age"];

executeButton.addEventListener("click",function(){
	var newUserInput = userInput.value; // use var since it is temp
	console.log(newUserInput);
	generate(newUserInput);
	restyle();
});

function generate(incUserInput){ // use inc to help differentiate variables
	var songIndex = Math.floor(Math.random() * songList.length);
	var randomSong = songList[songIndex];
	recommendationText.innerText = incUserInput + ", i recommend to you the song, '" + randomSong + "'";
}

function restyle(){
	var colorIndex = Math.floor(Math.random() * colorPalette.length);
	var randomColor = colorPalette[colorIndex];
	recommendationText.style.color = randomColor;
}