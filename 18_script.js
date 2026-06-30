function getHumanChoice(){
    return prompt("Select Rock, Paper, Scissor: ").toLowerCase();
}

function getComputerChoice(){
    let num = Math.floor(Math.random()*3)+1;
    if(num == 1){
        return "rock";
    } else if(num == 2){
        return "paper";
    } else {
        return "scissor";
    }
}

function playRound(human, computer){
    if(human == computer){
        alert("Your choice: " + human + ", Computer choice: " + computer + ". Draw!");
        return;
    }
    if(human == "rock" && computer == "paper"){
        alert("Your choice: " + human + ", Computer choice: " + computer + ". You Lost :(");
        return;
    }
    if(human == "paper" && computer == "scissor"){
        alert("Your choice: " + human + ", Computer choice: " + computer + ". You Lost :(");
        return;
    }
    if(human == "scissor" && computer == "rock"){
        alert("Your choice: " + human + ", Computer choice: " + computer + ". You Lost :(");
        return;
    }

    alert("Your choice: " + human + ", Computer choice: " + computer + ". You Won :)");
}

while(true){
    playRound(getHumanChoice(), getComputerChoice());
}