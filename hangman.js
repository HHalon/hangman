//make word bank
function newGame(){
  let word = [Math.floor(Math.random() * wordBank.length)];
  let chosenWord = wordBank[word];
  let underscore = [];
  let rightWord = [];
  let wrongWord = [];
}
const wordBank = ["thanos", "hulk", "spider man", "thor","rocket","drax"];
// choose randomly

let word = [Math.floor(Math.random() * wordBank.length)];
let chosenWord = wordBank[word];
let underscore = [];
let rightWord = [];
let wrongWord = [];




console.log(chosenWord);

var winsText = document.getElementById("wins-text");
var losesText = document.getElementById("loses-text");
var userWrongWord = document.getElementById("userWrongWord");
var userRightWord = document.getElementById("userRightWord");
var userUnderscore = document.getElementById("userUnderscore");

var wins = 0;
var loses = 0;
// underscore words
let generateUnderscore = () => {
  for (let i = 0; i < chosenWord.length; i++) {
    underscore.push("_") + underscore.join(" ");
  }
  return underscore;
};

console.log(generateUnderscore());
// user guess
document.addEventListener("keypress", event => {
  let keyword = String.fromCharCode(event.keyCode);

  if (chosenWord.indexOf(keyword) > -1) {
    // right word array
    rightWord.push(keyword);
    console.log(rightWord);
    underscore[chosenWord.indexOf(keyword)] = keyword;
    console.log(underscore);
    if (underscore.join("") === chosenWord) {
      wins ++
      alert("you win");
      location.reload(chosenWord);
      newGame();
    }
  } else {
    
    if (wrongWord.push(keyword) > 6) {
      loses ++
      alert("you lose");
      location.reload(chosenWord);
      newGame();
    }
  }
  winsText.textContent = "wins: " + wins;
  losesText.textContent = "loses: " + loses;
  userRightWord.textContent = " your word: " + underscore;
  userWrongWord.textContent= " what you have guessed: " + wrongWord;
});
//if guessed right

//if guessed wrong
