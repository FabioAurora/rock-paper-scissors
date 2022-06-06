"use strict";

/* implementing the DOM */
/* Accessing the nodes */
const buttons = document.querySelectorAll("button[id]");
const display = document.querySelector("#display");
const playerPoints = document.querySelector("#playerPoints");
const computerPoints = document.querySelector("#computerPoints");
const restart = document.querySelector('#restart');

/* creating an element for the display container */
const result = document.createElement("p");

let playerScore = 0;
let computerScore = 0;

/* iterating through all btn to retrieve the ID and use it for the conditional */
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const playerChoice = e.target.id;

    /* function to play a single round */
    function playRound(playerSelection, computerSelection) {
      computerSelection = computerPlay();
      playerSelection = playerChoice;

      /* if/else condition to return a string with the winner of the round */
      if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
      ) {
        playerScore++;
        result.textContent =`You won this round!!! ${playerSelection} beats ${computerSelection}`;
      } else if (playerSelection === computerSelection) {
        result.textContent = `Both played ${playerSelection}, it is a tie`;
      } else {
        computerScore++;
        result.textContent = `You lost this round!!! ${computerSelection} beats ${playerSelection}`;
      }
      return display.appendChild(result)
    }

    /* stops the game is any player reaches 5 points */
    if (playerScore === 5) {
      return result.textContent = `You won the Game!!! with ${playerScore} vs ${computerScore}`;
    }else if (computerScore === 5) {
      return result.textContent = `computer won the Game!!! with ${computerScore} vs ${playerScore}`;
    }

    playRound();

    playerPoints.textContent = playerScore;
    computerPoints.textContent = computerScore;
  });
});

/* function to make the computer's play */
function computerPlay() {
  const computerPlay = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random(computerPlay.length) * 3);
  return computerPlay[randomIndex];
}

restart.addEventListener('click', () => {
  playerScore = 0;
  computerScore = 0;
  playerPoints.textContent = `0`;
  computerPoints.textContent = `0`;
  result.textContent = '';
})