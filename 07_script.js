const button = document.querySelector("button");

function greet(){
    const name = prompt('What is your name? ');
    const greeting = document.querySelector('#greeting');
    greeting.textContent = `Hello ${name}, Nice to see you!`;
}

button.addEventListener('click', greet);