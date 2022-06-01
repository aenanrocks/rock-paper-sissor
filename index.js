let computerValue = computerPlay();
let playerValue = prompt("Rock, Paper or Sissor ?");
let computerWins = 0;
let playerWins = 0;
let roundWinner;

for (var x = 0; x <= 5; x++) {
  roundWinner = playRound(computerValue, playerValue);
  console.log(roundWinner);

  if (roundWinner == "Player Wins the Round") {
    playerWins++;
  } else if (roundWinner == "Computer Wins the Round") {
    computerWins++;
  }
  playerValue = prompt("Rock, Paper or Sissor ?");
  computerValue = computerPlay(); 
}

if (playerWins > computerWins) {
  console.log("Player Wins the Game");
} else {
  console.log("Computer Wins the Game");
}

function computerPlay() {
  if (Math.round(Math.random() * 2) === 0) {
    return "Rock";
  } else if (Math.round(Math.random() * 2) === 1) {
    return "Paper";
  } else {
    return "Sissor";
  }
}

function playRound(computer, player) {
  if (computer === player) {
    return "Tie";
  } else if (computer == "Rock" && player == "Paper") {
    return "Player Wins the Round";
  } else if (computer == "Paper" && player == "Sissor") {
    return "Player Wins the Round";
  } else if (computer == "Sissor" && player == "Rock") {
    return "Player Wins the Round";
  } else {
    return "Computer Wins the Round";
  }
}
