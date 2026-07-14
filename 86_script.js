const name = document.querySelector("#username");
const greetMeButton = document.querySelector(".greet-btn");
const greetingOutput = document.querySelector(".greeting");

greetMeButton.addEventListener("click", (e) => {
    greetingOutput.innerText = `Hello ${name.value}`;
});