
console.log(playGame());

let playButton = document.querySelector(".playB");

playButton.addEventListener("click", ()=> {
    playButton.remove();
})


function playGame() {
    let humanScore = 0;
    let computerScore  = 0;

/* //for (i = 0; i<5; i++) {
    humanSelection = getHumanChoice();
    computerSelecter = getComputerChoice();
    console.log(playRound(humanSelection,computerSelecter));
//} */

if (humanScore > computerScore) {
    return "You win the game, " + humanScore + " to " + computerScore;
}
else if (humanScore < computerScore) {
    return "You lost the game, " + humanScore + " to " + computerScore;
}
else {
    return "You tied the game! " + humanScore + " to " + computerScore;
}

function playRound(humanChoice,computerChoice) {
if (humanChoice == computerChoice) {
    return "Tie! You both chose " + humanChoice;
}

if (humanChoice == "Rock") {
    if (computerChoice == "Scissors") {
        humanScore++;
        return "You win! " + humanChoice + " beats " + computerChoice;
    }
    else {
        computerScore++;
        return "You lose! " + humanChoice + " does not beat " + computerChoice;
    }
}

if (humanChoice == "Paper") {
    if (computerChoice == "Rock") {
        humanScore++;
        return "You win! " + humanChoice + " beats " + computerChoice;
    }
    else {
        computerScore++;
        return "You lose! " + humanChoice + " does not beat " + computerChoice;
    }
}

if (humanChoice == "Scissors") {
    if (computerChoice == "Paper") {
        humanScore++;
        return "You win! " + humanChoice + " beats " + computerChoice;
    }
    else {
        computerScore++;
        return "You lose! " + humanChoice + " does not beat " + computerChoice;
    }
}

return "Error has occured";

}

}


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

function getHumanChoice() { // Get user choice of R, P or S.
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
