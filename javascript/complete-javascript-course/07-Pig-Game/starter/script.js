'use strict';

const btnNewGame = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

const elFinalScoreOne = document.querySelector('#score--0');
const elFinalScoreTwo = document.querySelector('#score--1');

const elCurrentScoreOne = document.querySelector('#current--0');
const elCurrentScoreTwo = document.querySelector('#current--1');

const diceEl = document.querySelector('.dice');

let playerOneScore = 0;
let playerTwoScore = 0;
let playerOneTotalScore = 0;
let playerTwoTotalScore = 0;
let isPlayerOne = true;

const newGame = function () {
  playerOneScore = 0;
  playerTwoScore = 0;
  playerOneTotalScore = 0;
  playerTwoTotalScore = 0;
  isPlayerOne = true;
  displayCurrentScores();
  displayFinalScores();
  diceEl.classList.add('hidden');
};

const displayCurrentScores = function () {
  elCurrentScoreOne.textContent = playerOneScore;
  elCurrentScoreTwo.textContent = playerTwoScore;
};

const displayFinalScores = function () {
  elFinalScoreOne.textContent = playerOneTotalScore;
  elFinalScoreTwo.textContent = playerTwoTotalScore;
};

newGame();

btnRoll.addEventListener('click', function () {
  const dice = Math.trunc(Math.random() * 6) + 1;
  console.log(dice);
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;

  if (dice !== 1 && isPlayerOne) {
    playerOneScore += dice;
  } else if (dice !== 1 && !isPlayerOne) {
    playerTwoScore += dice;
  } else {
    isPlayerOne ? (playerOneScore = 0) : (playerTwoScore = 0);
    isPlayerOne = !isPlayerOne;
  }
  displayCurrentScores();
});

btnNewGame.addEventListener('click', newGame);

const holdScore = function (score, total) {
  total += score;
  score = 0;
};

btnHold.addEventListener('click', function () {
  if (isPlayerOne) {
    playerOneTotalScore += playerOneScore;
    playerOneScore = 0;
  } else {
    playerTwoTotalScore += playerTwoScore;
    playerTwoScore = 0;
  }
  displayFinalScores();
  displayCurrentScores();
});
