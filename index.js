let computerValue = computerPlay();
let playerValuePrompt = prompt("Rock, Paper or Sissor ?");
let computerWins = 0;
let playerWins = 0;
let roundWinner;
let playerValue = playerValuePrompt.toUpperCase();

for (var x = 0; x <= 5; x++) {
  roundWinner = playRound(computerValue, playerValue);
  console.log(roundWinner);

  if (roundWinner == "Player Wins the Round") {
    playerWins++;
  } else if (roundWinner == "Computer Wins the Round") {
    computerWins++;
  }
  playerValuePrompt = prompt("Rock, Paper or Sissor ?");
  playerValue = playerValuePrompt.toUpperCase();
  computerValue = computerPlay();
}

if (playerWins > computerWins) {
  console.log("Player Wins the Game");
} else {
  console.log("Computer Wins the Game");
}

function computerPlay() {
  if (Math.round(Math.random() * 2) === 0) {
    return "ROCK";
  } else if (Math.round(Math.random() * 2) === 1) {
    return "PAPER";
  } else {
    return "SISSOR";
  }
}

function playRound(computer, player) {
  if (computer === player) {
    return "Tie";
  } else if (computer == "ROCK" && player == "PAPER") {
    return "Player Wins the Round";
  } else if (computer == "PAPER" && player == "SISSOR") {
    return "Player Wins the Round";
  } else if (computer == "SISSOR" && player == "ROCK") {
    return "Player Wins the Round";
  } else {
    return "Computer Wins the Round";
  }
}
