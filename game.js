



let userInputMin = 1; //lowest number
let userInputMax = 0; //highest number
let correctAnswers = 0;
let wrongAnswers = 0;
let randomNumber = 0; 
let prevNumber = 0; 
let score; //true or false

let levelEasyButton = document.getElementById('level-button1');
let levelMediumButton = document.getElementById('level-button2')
let levelHardButton = document.getElementById('level-button3');
let startButton = document.getElementById("start-button");

levelEasyButton.onclick = () => {

  levelMediumButton.checked = false
  levelHardButton.checked = false
  startButton.disabled = false
  
  const gameBoard = document.getElementById("game-board");
  gameBoard.innerHTML = '';
  correctAnswers = 0;
  wrongAnswers = 0;

    userInputMax = 50;
};

levelMediumButton.onclick = () => {

  levelEasyButton.checked = false
  levelHardButton.checked = false
  startButton.disabled = false

  const gameBoard = document.getElementById("game-board");
  gameBoard.innerHTML = '';
  correctAnswers = 0;
  wrongAnswers = 0;

    userInputMax = 25;
};

 levelHardButton.onclick = () => {

  levelEasyButton.checked = false
  levelMediumButton.checked = false
  startButton.disabled = false

  const gameBoard = document.getElementById("game-board");

  gameBoard.innerHTML = '';
  correctAnswers = 0;
  wrongAnswers = 0;

  userInputMax = 10;
    
      
};

 function getRandomInt(min, max, prevNumber) {
    min = Math.ceil(min);
    max = Math.floor(max);
    let randomNumber = prevNumber;
    
    while (prevNumber === randomNumber) {
      randomNumber = Math.floor(Math.random() * (max - min) + min); 
    }
   return randomNumber;
   }

 // Start the game 
  document.querySelector('#start-button').addEventListener('click', function () {
  const gameBoard = document.getElementById("game-board");
  const div = document.createElement("div");
  gameBoard.appendChild(div)
  randomNumber = Math.floor(userInputMax / 2)
  gameBoard.innerHTML = `<div id=random-number>${randomNumber}</div>`
 });

//Get the next number
 function writeNextNumber() {
  prevNumber = randomNumber
  
  randomNumber = getRandomInt(userInputMin, userInputMax, prevNumber)
  const newNumber = document.getElementById('random-number')
  newNumber.innerHTML = `${randomNumber}`
}

  document.querySelector('#gamebutton-higher').addEventListener('click', function () {
    writeNextNumber();
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
    writeNextNumber()
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
result()
}

function result(){
  if(correctAnswers === 5){
    const result = document.getElementById('random-number')
    result.innerHTML = 'YOU WON THE GAME'
    console.log('YOU WON THE GAME')

    setTimeout(endGame, 1000);
  }
   else if(wrongAnswers === 5){
    const result = document.getElementById('random-number')
    result.innerHTML = 'YOU LOST'
    console.log('YOU LOST')

    setTimeout(endGame, 1000);
  }
}

function endGame(){

alert(`You got ${correctAnswers} correct and ${wrongAnswers} wrong`);
document.location.reload();
clearInterval(interval); // Needed for Chrome to end game
}
