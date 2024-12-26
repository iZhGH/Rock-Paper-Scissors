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