var remainingGuess = 12;
var lettersAlreadyGuessed = [];
var correctGuesses=[];

var wins = 0;



var words = [
    "Ramones",
    "Abba",
    "Queen",
    "Madonna",
    "Radiohead",
    "Nirvana",
    "Coldplay",
    "Metallica",
];

document.onkeyup = function(event) {

    // Determine which key was pressed
    var userGuess = event.key;
    var userGuessLower = userGuess.toLowerCase();
    console.log(userGuessLower);







var randomWord = words[Math.floor(Math.random() * words.length)].toLowerCase();
console.log(randomWord);
var length = randomWord.length;
console.log(length);



var currentWord = new Array(length + 1).join("_ ");
console.log(currentWord);
document.write(currentWord);

var currentWordDiv = document.getElementById("currentWord");

for (var i=0 ; i<randomWord.length; i++){
var newCurrentWordDiv = document.createElement("div");
newCurrentWordDiv.innerHTML = currentWord;
currentWordDiv.appendChild(newCurrentWordDiv);

}



function compare(){
    for(var i=0 ;i<12; i++){
        lettersAlreadyGuessed.push(userGuessLower);
    }
    for (var i=0 ; i<randomWord.length; i++);{
        var n = randomWord.search(lettersAlreadyGuessed[i]);
        var m = lettersAlreadyGuessed.indexOf("");

        }
}


//document.onkeyup = function(event) {

    // Determine which key was pressed
    //var userGuess = event.key;
    //var userGuessLower = userGuess.toLowerCase();
    //console.log(userGuessLower);
//}


//function rep(string) {
    //for (var i = 0; i < length; i++) {
      //if (randomWord[i] === "userGuessLower") {
          //randomWord == setCharAt(blanks, i, userGuessLower);
  //         return blanks;
          // remainingGuess--;
            //document.write(blanks);
 //           return blanks;
     //   }
   // }




//var substituded = rep(blanks);
//document.write(substituded);
