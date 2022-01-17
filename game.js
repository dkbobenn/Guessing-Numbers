



let userInputMin = 1; //lowest number
let userInputMax = 0; //highest number

document.getElementById('level-button1').onclick = () => {

  document.getElementById('level-button2').checked = false;
  document.getElementById('level-button3').checked = false;

  const gameBoard = document.getElementById("game-board");

  gameBoard.innerHTML = '';
  

    userInputMax = 50;

};

document.getElementById('level-button2').onclick = () => {

  document.getElementById('level-button1').checked = false;
  document.getElementById('level-button3').checked = false;

  const gameBoard = document.getElementById("game-board");

  gameBoard.innerHTML = '';

    userInputMax = 25;
  
      };

 document.getElementById('level-button3').onclick = () => {

  document.getElementById('level-button1').checked = false;
  document.getElementById('level-button2').checked = false;

  const gameBoard = document.getElementById("game-board");

  gameBoard.innerHTML = '';

    userInputMax = 10;
      
          };


let correctAnswers = 0;
let wrongAnswers = 0;
let usedAnswers = 0; //to cancel game after too many wrong answers 
let randomNumber = 0; 
let prevNumber = 0; 
let score;


 function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }

 // Start the gamee
function startGame() {
  const gameBoard = document.getElementById("game-board");
  const div = document.createElement("div");
  gameBoard.appendChild(div)
  randomNumber = Math.floor(userInputMax / 2)
  gameBoard.innerHTML = `<div id=random-number>${randomNumber}</div>`

 // console.log(prevNumber)

 }

//Get the next number
 function getNumber() {
   prevNumber = randomNumber
 randomNumber = getRandomInt(userInputMin, userInputMax)
 const newNumber = document.getElementById('random-number')
 newNumber.innerHTML = `${randomNumber}`

}



  document.querySelector('#gamebutton-higher').addEventListener('click', function () {
    console.log(prevNumber)
    console.log(randomNumber)

    if(prevNumber < randomNumber){
      score = true;
     }
     else if(prevNumber > randomNumber){
       score = false;
     }
     console.log(score)
     calcScore()
  });


  document.querySelector('#gamebutton-lower').addEventListener('click', function () {
    console.log(prevNumber)
    console.log(randomNumber)

    if(prevNumber < randomNumber){
      score = false;
     }
     else if(prevNumber > randomNumber){
       score = true;
     }
     console.log(score)
     calcScore()
  });
  

function calcScore(){
 
switch (score) {
  case true:
    correctAnswers += 1;
    break;
  case false:
    wrongAnswers += 1;
    break;
}
console.log(correctAnswers)
console.log(wrongAnswers)
  
}
