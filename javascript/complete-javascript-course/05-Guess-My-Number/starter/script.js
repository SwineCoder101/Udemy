'use strict';
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const setMessage = function (msg) {
  document.querySelector('.message').textContent = msg;
};

const setScore = function () {
  document.querySelector('.score').textContent = score;
};

const handleLostGame = function (msg) {
  score--;
  score > 0 ? setMessage(msg) : setMessage('bad luck you lost the game');
};

const onCheck = function () {
  const guess = Number(document.querySelector('.guess').value);
  //no input
  if (!guess) {
    document.querySelector('.message').textContent =
      'No number has been selected';
    //when player wins
  } else if (secretNumber === guess) {
    setMessage('Correct Number');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    //too high
  } else {
    guess > secretNumber
      ? handleLostGame('Too High')
      : handleLostGame('Too Low');
  }
  setScore();
};

const onAgain = function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  setMessage('Start guessing...');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').style.width = '15rem';
  setScore();
};

document.querySelector('.check').addEventListener('click', onCheck);
document.querySelector('.again').addEventListener('click', onAgain);
