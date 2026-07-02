let btn = document.querySelector("button");

function random(value){
    return Math.floor(Math.random() * (value + 1));
}

function changeColor(e){
    let rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
    document.body.style.backgroundColor = rndCol;
    // e.target.style.backgroundColor = rndCol;
    console.log(e);
}

// "click"
// "focus"
// "blur"
// "dblclick"
// "mouseover"
// "mouseout"

btn.addEventListener("mouseout", changeColor);
btn.addEventListener("click", changeColor);
btn.addEventListener("mouseover", changeColor);
btn.onclick = changeColor;

// btn.removeEventListener("click", changeColor());

let textBox = document.querySelector("#textBox");
let output = document.querySelector("#output");
textBox.addEventListener("keydown", (e)=>{
    output.textContent = `You presses"${e.key}".`;
});