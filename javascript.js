let choiceButtons = document.querySelector(".choiceButtons");
let resultText = document.querySelector(".result");


// Create, modify, and display Rock Paper Scissors buttons
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



rockButton.addEventListener("click", function() { 
    playRound("Rock")});

paperButton.addEventListener("click", function() { 
    playRound("Paper") });

scissorsButton.addEventListener("click", function() {
     playRound("Scissors") });












let humanScore = 0;
let computerScore  = 0;
let scoreBoard = document.querySelector(".score");
let gameEnded = false;

function updateScore() {
scoreBoard.textContent = "You: " + humanScore + " - Computer: " + computerScore;
}
function checkScore() {
    if (humanScore == 5 || computerScore == 5) {
    endGame();
    return true;
}
else {
    return false;
}
}


function playRound(humanChoice) {
if (gameEnded) {
    return;
}

computerChoice = getComputerChoice();

if (humanChoice == computerChoice) {
    updateScore();
        if (checkScore()) {
            resultText.textContent = "Tie! You both chose " + humanChoice;
            return;
        };
        resultText.textContent = "Tie! You both chose " + humanChoice;
    return console.log("Tie! You both chose " + humanChoice);
}

if (humanChoice == "Rock") {
    if (computerChoice == "Scissors") {
        humanScore++;
        updateScore();
        if (checkScore()) {
            resultText.textContent = "You win! " + humanChoice + " beats " + computerChoice;
            return;
        };
        resultText.textContent = "You win! " + humanChoice + " beats " + computerChoice;
        return console.log("You win! " + humanChoice + " beats " + computerChoice);
    }
    else {
        computerScore++;
        updateScore();
        if (checkScore()) {
            resultText.textContent = "You lose! " + humanChoice + " does not beat " + computerChoice;
            return;
        };
        resultText.textContent = "You lose! " + humanChoice + " does not beat " + computerChoice;
        return console.log("You lose! " + humanChoice + " does not beat " + computerChoice);
    }
}

if (humanChoice == "Paper") {
    if (computerChoice == "Rock") {
        humanScore++;
        updateScore();
        if (checkScore()) {
            resultText.textContent = "You win! " + humanChoice + " beats " + computerChoice;
            return;
        };
        resultText.textContent = "You win! " + humanChoice + " beats " + computerChoice;
        return console.log("You win! " + humanChoice + " beats " + computerChoice);
    }
    else {
        computerScore++;
        updateScore();
        if (checkScore()) {
            resultText.textContent = "You lose! " + humanChoice + " does not beat " + computerChoice;
            return;
        };
        resultText.textContent = "You lose! " + humanChoice + " does not beat " + computerChoice;
        return console.log("You lose! " + humanChoice + " does not beat " + computerChoice);
    }
}

if (humanChoice == "Scissors") {
    if (computerChoice == "Paper") {
        humanScore++;
        updateScore();
        if (checkScore()) {
            resultText.textContent = "You win! " + humanChoice + " beats " + computerChoice;
            return;
        };
        resultText.textContent = "You win! " + humanChoice + " beats " + computerChoice;
        return console.log("You win! " + humanChoice + " beats " + computerChoice);
    }
    else {
        computerScore++;
        updateScore();
        if (checkScore()) {
            resultText.textContent = "You lose! " + humanChoice + " does not beat " + computerChoice;
            return;
        };
        resultText.textContent = "You lose! " + humanChoice + " does not beat " + computerChoice;
        return console.log("You lose! " + humanChoice + " does not beat " + computerChoice);
    }
}

return console.log("Error has occured");

}



function endGame() {


    if (humanScore > computerScore) {
        scoreBoard.textContent= "You win the game, " + humanScore + " to " + computerScore;
    }
    else if (humanScore < computerScore) {
        scoreBoard.textContent=  "You lost the game, " + humanScore + " to " + computerScore;
    }
    else {
        scoreBoard.textContent=  "You tied the game! " + humanScore + " to " + computerScore;
    }
    gameEnded = true;
    }


function getComputerChoice() { 

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


