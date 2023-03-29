'use strict';
// const dte = document.querySelector('.message').textContent;
// console.log(dte);
// document.querySelector('.message').textContent = 'Hello my friend';
// document.querySelector('.guess').value = 23;
// document.querySelector('.score').textContent = 'pussy';
let score = 20;
let highScore = 0;
let secretNumber = Math.trunc(Math.random() * 20 + 1);
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
document.querySelector('.check').addEventListener('click', test123);

function test123() {
  const userGuess = Number(document.querySelector('.guess').value);
  console.log(userGuess, typeof userGuess);
  //when there is no input
  if (!userGuess) {
    displayMessage('No number! 🤷‍♀️');
    // when the user guess the secret number
  } else if (userGuess === secretNumber) {
    displayMessage('Correct Number bravo 🎁🥇');
    ('Correct Number bravo 🎁🥇');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    //when userGuess  number that is greater then secret number
  } else if (userGuess !== secretNumber) {
    if (score > 1) {
      displayMessage(
        userGuess > secretNumber
          ? `${userGuess} is Too high 📈`
          : `${userGuess} is Too low 📉`
      );
      score--;

      document.querySelector('.score').textContent = score;
      document.querySelector('.guess').value = '';
    } else {
      displayMessage('lost the game');
      document.querySelector('.score').textContent = 0;
    }

    /////////

    /////else if (userGuess > secretNumber) {
    //   if (score > 1) {
    //     document.querySelector(
    //       '.message'
    //     ).textContent = `${userGuess} is Too high 📈`;
    //     score--;

    //     document.querySelector('.score').textContent = score;
    //     document.querySelector('.guess').value = '';
    //   } else {
    //     document.querySelector('.message').textContent = 'lost the game';
    //     document.querySelector('.score').textContent = 0;
    //   }
    //   ////when userGuess  number that is less then secret number
    // } else if (userGuess < secretNumber) {
    //   if (score > 1) {
    //     document.querySelector(
    //       '.message'
    //     ).textContent = `${userGuess} is Too low 📉`;
    //     score--;
    //     document.querySelector('.score').textContent = score;
    //     document.querySelector('.guess').value = '';
    //   } else {
    //     document.querySelector('.message').textContent = 'lost the game';
    //     document.querySelector('.score').textContent = 0;
    //   }
    // }
  }
}

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'Start guessing...';
  secretNumber = secretNumber = Math.trunc(Math.random() * 20 + 1);
});
