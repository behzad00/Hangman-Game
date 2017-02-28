var remainingGuess;
var lettersGuessed;
var userLetter;
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



var randomWord = words[Math.floor(Math.random() * words.length)].toLowerCase();
console.log(randomWord);
var length = randomWord.length;
console.log(length);

for (var i = 0; i < length; i++) {
    document.write(" _ ");
}


