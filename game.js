
let correctAnswers = 0;
let wrongAnswers = 0;
let usedAnswers = 0; //to cancel game after too many wrong answers

let userInputMin = 1; //lowest number selected by user
let userInputMax = 0; //highest number selected by user


 function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
   
  }

  document.getElementById('level-button1').onclick = () => {

    document.getElementById('level-button2').checked = false;
    document.getElementById('level-button3').checked = false;

      userInputMax = 50;

  };

  document.getElementById('level-button2').onclick = () => {

    document.getElementById('level-button1').checked = false;
    document.getElementById('level-button3').checked = false;

      userInputMax = 25;
    
        };

   document.getElementById('level-button3').onclick = () => {

    document.getElementById('level-button1').checked = false;
    document.getElementById('level-button2').checked = false;

      userInputMax = 10;
        
            };

  
 window.onload = () => {
    document.getElementById('start-button').onclick = () => {
  
        let randomNumber = getRandomInt(userInputMin, userInputMax)
        
        let gameBoard = document.getElementById("game-board");
        let div = document.createElement("div");
        gameBoard.appendChild(div)
        gameBoard.innerHTML = `<div id=random-number>${randomNumber}</div>`
    };
    
  }
 
 // Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
 function higherNumber() {

  const randomNumber = getRandomInt(userInputMin, userInputMax)

 const newNumber = document.getElementById('random-number')
 newNumber.innerHTML = `${randomNumber}`


  console.log(newNumber)

  


}