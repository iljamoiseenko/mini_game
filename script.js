'use strict';

// document.querySelector(".question").textContent = 7;

// document.querySelector(".quess-message").textContent = 1;


let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;


document.querySelector(".check").addEventListener('click', function() {
    const guessingNumber = Number(document.querySelector(".number-input").value);
    console.log(  guessingNumber, typeof guessingNumber);

    if (!guessingNumber) {
        document.querySelector(".guess-message").textContent = '  Введите число';
    } else if (guessingNumber === secretNumber) {
        document.querySelector(".guess-message").textContent = ' Good';
        document.querySelector(".question").textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = 'green';
        document.querySelector(".question").style.fontSize = '40px';

    } else if (guessingNumber > secretNumber) {

        if (score > 1) {
            document.querySelector(".guess-message").textContent = ' слишком много';
            score--;
            document.querySelector(".score").textContent = score;
        } else {
            document.querySelector(".guess-message").textContent = ' game over';
            document.querySelector(".score").textContent = 0;
        }

        
    } else if (guessingNumber < secretNumber) {

        if (score > 1) {
            document.querySelector(".guess-message").textContent = ' слишком мало';
            score--;
            document.querySelector(".score").textContent = score;
        } else {
            document.querySelector(".guess-message").textContent = ' game over';
            document.querySelector(".score").textContent = 0;
        }

    }
        
    document.querySelector('.highscore').textContent = score;
    
});

document.querySelector('.again').addEventListener('click' , function(againGame) {
    secretNumber = Math.trunc(Math.random() * 20 + 1);
    score = 20;
    document.querySelector(".guess-message").textContent = 'Начни угадывать';
    document.querySelector(".score").textContent = score;
    document.querySelector(".question").textContent = '???';
    document.querySelector('body').style.backgroundColor = 'black';
    document.querySelector(".number-input").value = '';
    
});