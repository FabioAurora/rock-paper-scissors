"use strict";

let playerScore = 0;
let computerScore = 0;

/* function to make the computer's play */
function computerPlay() {
  const computerPlay = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random(computerPlay.length) * 3);
  return computerPlay[randomIndex];
}

/* function to play a single round */
function playRound(playerSelection, computerSelection) {
  computerSelection = computerPlay();
  playerSelection = prompt(`please choose rock, paper or scissors`);
  playerSelection = playerSelection.toLowerCase();

  /* if/else condition to return a string with the winner of the round */
  if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    console.log(`You win!!! ${playerSelection} beats ${computerSelection}`);
    return playerScore++
  } else if (playerSelection === computerSelection) {
    console.log(`It is a tie`);
  } else {
    console.log(`You lose!!! ${computerSelection} beats ${playerSelection}`);
    return computerScore++
  }
}

/* function to play 5 rounds */
function game() {
  let round = 0;

  for (let i = 0; i < 5 ; i++) {
      playRound();
    round = i;
  }

  if (playerScore > computerScore) {
    console.log(`Player win, with ${playerScore} point's`);
    console.log(`computer lost, with ${computerScore} point's`);
  }else if (playerScore === computerScore) {
    console.log(`It is a tie, no one wins`);
  } else console.log(`Player lost the game`)
}

game();