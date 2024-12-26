function getComputerChoice() { // Get computers random choice of R, P or S.

let options = 3;
computerSelection = Math.floor(Math.random() * options);

if (computerSelection == 0) {
    return "Rock";
}

else if (computerSelection == 1) {
    return "Paper";
}

else if (computerSelection == 2) {
    return "Scissors";
}
}

function getHumanChoice() {
let humanChoice = prompt("Rock, Paper or Scissors?").toLowerCase();


if (humanChoice == "rock") {
    return "Rock";
}
else if (humanChoice == "paper") {
    return "Paper";
}
else if (humanChoice == "scissors") {
    return "Scissors"
}
else {
    return "Invalid entry please restart program"
}

}