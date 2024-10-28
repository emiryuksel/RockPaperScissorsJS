const playerTurn = document.getElementById("playerTurn");
const playerScore = document.getElementById("playerScore");
const computerTurn = document.getElementById("computerTurn");
const computerScore = document.getElementById("computerScore");

const playerRock = document.getElementById("playerRock");
const playerPaper = document.getElementById("playerPaper");
const playerScissors = document.getElementById("playerScissors");

const computerRock = document.getElementById("computerRock");
const computerPaper = document.getElementById("computerPaper");
const computerScissors = document.getElementById("computerScissors");
const resultText = document.getElementById("resultText");

const allGameIcons = document.querySelectorAll(".icon");

const choices = {
  rock: { name: "Rock", win: ["scissors"] },
  paper: { name: "Paper", win: ["scissors"] },
  scissors: { name: "Scissors", win: ["paper"] },
};

let playerScoreNumber = 0;
let computerScoreNumber = 0;
let computerChoice = " ";

function resetSelected() {
  allGameIcons.forEach((icon) => {
    icon.classList.remove("selected");
    stopConfetti();
    removeConfetti();
  });

  document.body.classList.remove("flash-red");
}

function computerRandomChoice() {
  const computerChoiceNumber = Math.random();

  if (computerChoiceNumber < 0.3) {
    computerChoice = "rock";
  } else if (computerChoiceNumber <= 0.65) {
    computerChoice = "paper";
  } else if (computerChoiceNumber <= 1) {
    computerChoice = "scissors";
  }
}
function updateScore(playerChoice) {
  if (playerChoice == computerChoice) {
    resultText.textContent = "Draw";
  } else {
    const choice = choices[playerChoice];
    console.log(choice);
    console.log(choice.win.indexOf(computerChoice));
    if (choice.win.indexOf(computerChoice) === 0) {
      playerScoreNumber++;
      resultText.textContent = "Player Win!";
      playerScore.textContent = playerScoreNumber;
      startConfetti();
    } else {
      computerScoreNumber++;
      resultText.textContent = "Machine Win!";
      computerScore.textContent = computerScoreNumber;
      loseEffect();
    }
  }
}

function checkResult(playerChoice) {
  resetSelected();
  computerRandomChoice();
  displayComputerChoice();
  updateScore(playerChoice);
}

function select(playerChoice) {
  //   console.log(playerChoice);
  checkResult(playerChoice);
  switch (playerChoice) {
    case "rock":
      playerRock.classList.add("selected");
      playerTurn.textContent = "-> ROCK SELECTED";
      break;
    case "paper":
      playerPaper.classList.add("selected");
      playerTurn.textContent = "-> PAPER SELECTED";
      break;
    case "scissors":
      playerScissors.classList.add("selected");
      playerTurn.textContent = "-> SCISSORS SELECTED";
      break;
  }
}

function displayComputerChoice() {
  switch (computerChoice) {
    case "rock":
      computerRock.classList.add("selected");
      computerTurn.textContent = "-> ROCK SELECTED";
      break;
    case "paper":
      computerPaper.classList.add("selected");
      computerTurn.textContent = "-> PAPER SELECTED";
      break;
    case "scissors":
      computerScissors.classList.add("selected");
      computerTurn.textContent = "-> SCISSORS SELECTED";
      break;
  }
}

function resetAll() {
  playerScoreNumber = 0;
  computerScoreNumber = 0;
  playerScore.textContent = playerScoreNumber;
  computerScore.textContent = computerScoreNumber;
  playerTurn.textContent = "";
  computerTurn.textContent = "";
  resultText.textContent = "";
  resetSelected();
}

function loseEffect() {
  document.body.classList.add("flash-red");
}

document.addEventListener("DOMContentLoaded", function() {
    resetAll();
});

