let rock = document.querySelector(".rock");
let paper = document.querySelector(".paper");
let scissor = document.querySelector(".scissor");
let result = document.querySelector("p");

function getComputerChoice(){
    let num = Math.floor(Math.random()*3)+1;
    if(num == 1){
        return "Rock";
    } else if(num == 2){
        return "Paper";
    } else {
        return "Scissor";
    }
}

function playRound(human, computer){
    if(human == computer){
        result.textContent = "Your choice: " + human + ", Computer choice: " + computer + ". Draw!";
        return;
    }
    if(human == "Rock" && computer == "Paper"){
        result.textContent = "Your choice: " + human + ", Computer choice: " + computer + ". You Lost :(";
        return;
    }
    if(human == "Paper" && computer == "Scissor"){
        result.textContent = "Your choice: " + human + ", Computer choice: " + computer + ". You Lost :(";
        return;
    }
    if(human == "Scissor" && computer == "Rock"){
        result.textContent = "Your choice: " + human + ", Computer choice: " + computer + ". You Lost :(";
        return;
    }

    result.textContent = "Your choice: " + human + ", Computer choice: " + computer + ". You Won :)";
}

rock.addEventListener("click", (e) => {
    playRound(rock.textContent, getComputerChoice());
})

paper.addEventListener("click", (e) => {
    playRound(paper.textContent, getComputerChoice());
})

scissor.addEventListener("click", (e) => {
    playRound(scissor.textContent, getComputerChoice());
})