
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

  
 window.onload = () => {
    document.getElementById('start-button').onclick = () => {
  
        let randomNumber = getRandomInt(userInputMin, userInputMax)
        
        const gameBoard = document.getElementById("game-board");
        const div = document.createElement("div");
        gameBoard.appendChild(div)
        gameBoard.innerHTML = `<div>${randomNumber}</div>`;

        console.log(randomNumber)
        
    };

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
}



 

