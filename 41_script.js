let btn1 = document.querySelector("#btn1");
btn1.onclick = () => alert("Hello World");

let btn2 = document.querySelector("#btn2");
btn2.addEventListener("click", () => {
    alert("Hello World");
})

function alertFunction(){
    alert("YAY! YOU DID IT!");
}

let btn3 = document.querySelector("#btn3");
btn3.addEventListener("click", alertFunction);

let btn4 = document.querySelector("#btn4");
btn4.onclick = alertFunction;

btn4.addEventListener("click", function(e){
    console.log(e);
    console.log(e.target);
    e.target.style.background = "lightblue";
});

let btns = document.querySelectorAll("button");
btns.forEach((button) => {
    button.addEventListener("click", () => {
        alert(button.id);
    })
})