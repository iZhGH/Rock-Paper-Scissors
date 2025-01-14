let choiceButtons = document.querySelector(".choiceButtons")

const rockButton = document.createElement("button");
rockButton.classList.add("rock");
const paperButton = document.createElement("button");
paperButton.classList.add("paper");
const scissorsButton = document.createElement("button");
scissorsButton.classList.add("scissors");


rockButton.textContent = "Rock";
paperButton.textContent = "Paper";
scissorsButton.textContent = "Scissors";
choiceButtons.appendChild(rockButton);
choiceButtons.appendChild(paperButton);
choiceButtons.appendChild(scissorsButton);

choiceButtons.style.height= "100vh";
choiceButtons.style.textAlign = "center";
choiceButtons.style.display = "flex";
choiceButtons.style.gap = "50px";
choiceButtons.style.justifyContent = "center";
choiceButtons.style.alignItems = "center";









function playGame() {


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

}


let humanScore = 0;
let computerScore  = 0;

let scoreBoard = document.querySelector(".score");
scoreBoard.textContent = "You: " + humanScore + " - Computer: " + computerScore;




function playRound(humanChoice) {
computerChoice = getComputerChoice();

if (humanChoice == computerChoice) {
    return console.log("Tie! You both chose " + humanChoice);
}

if (humanChoice == "Rock") {
    if (computerChoice == "Scissors") {
        humanScore++;
        return console.log("You win! " + humanChoice + " beats " + computerChoice);
    }
    else {
        computerScore++;
        return console.log("You lose! " + humanChoice + " does not beat " + computerChoice);
    }
}

if (humanChoice == "Paper") {
    if (computerChoice == "Rock") {
        humanScore++;
        return console.log("You win! " + humanChoice + " beats " + computerChoice);
    }
    else {
        computerScore++;
        return console.log("You lose! " + humanChoice + " does not beat " + computerChoice);
    }
}

if (humanChoice == "Scissors") {
    if (computerChoice == "Paper") {
        humanScore++;
        return console.log("You win! " + humanChoice + " beats " + computerChoice);
    }
    else {
        computerScore++;
        return console.log("You lose! " + humanChoice + " does not beat " + computerChoice);
    }
}

return console.log("Error has occured");

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



rockButton.addEventListener("click", function() { 
    playRound("Rock")});

paperButton.addEventListener("click", function() { 
    playRound("Paper") });

scissorsButton.addEventListener("click", function() {
     playRound("Scissors") });