



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
let gameBoard = document.getElementById("game-board");
let clearNumber = document.getElementById("random-number");
let highlowerButtons = document.getElementById("highlower-buttons");
let introSection = document.getElementById("intro");
let endGamepopup =  document.getElementById("end-game");


levelEasyButton.onclick = () => {

   levelMediumButton.checked = false;
   levelHardButton.checked = false;
   gameBoard.style.display = "block"; 
   clearNumber.innerHTML = '';
   correctAnswers = 0;
   wrongAnswers = 0;
   userInputMax = 50;
};

levelMediumButton.onclick = () => {

  levelEasyButton.checked = false
  levelHardButton.checked = false
  gameBoard.style.display = "block"; 
  clearNumber.innerHTML = '';
  correctAnswers = 0;
  wrongAnswers = 0;
  userInputMax = 25;
};

 levelHardButton.onclick = () => {

  levelEasyButton.checked = false
  levelMediumButton.checked = false
  gameBoard.style.display = "block"; 
  clearNumber.innerHTML = '';
  correctAnswers = 0;
  wrongAnswers = 0;
  userInputMax = 10; 
};

 function getRandomInt(min, max, prevNumber) {
    min = Math.ceil(min);
    max = Math.floor(max);
    let randomNumber = prevNumber;
    //while loop added to prevent same number appearing right after each other
    while (prevNumber === randomNumber) {
      randomNumber = Math.floor(Math.random() * (max - min) + min); 
    }
   return randomNumber;
   }

 // Start the game 
 document.querySelector('#start-button').addEventListener('click', function () {
    highlowerButtons.style.display = "block";
    introSection.style.display = "none"; 
    startButton.style.display = 'none'
    const number = document.getElementById("random-number");
    const span = document.createElement("span");
    number.appendChild(span)
    randomNumber = Math.floor(userInputMax / 2)
    number.innerHTML = `<span id=number>${randomNumber}</span>`
 });

//Get the next number
 function writeNextNumber() {
   prevNumber = randomNumber
   randomNumber = getRandomInt(userInputMin, userInputMax, prevNumber)
   const newNumber = document.getElementById('number')
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

    setTimeout(endGame, 2000);
  }
   else if(wrongAnswers === 5){
    const result = document.getElementById('random-number')
    result.innerHTML = 'YOU LOST THE GAME'
    console.log('YOU LOST')

    setTimeout(endGame, 2000);
  }
}

function endGame(){
  endGamepopup.style.display = "block";
  gameBoard.style.display = "none"; 

  const text = document.getElementById("endgame-text");
  const addText = document.createTextNode(`Your score is ${correctAnswers} correct and ${wrongAnswers} wrong`)
  text.appendChild(addText);
  //const p = document.createElement("p");
 // text.appendChild(p)
  //text.innerHTML = `<p id=endgame-text>You got ${correctAnswers} correct <br> and ${wrongAnswers} wrong</p>

}
document.querySelector('#playagain-button').addEventListener('click', function () {
document.location.reload();
clearInterval(interval); // Needed for Chrome to end game
});
