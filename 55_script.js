function add(a, b){
    return a + b;
}

function substract(a, b){
    return a - b;
}

function multiply(a, b){
    return a*b;
}

function division(a, b){
    return a/b;
}

function remainder(a, b){
    return a%b;
}

function power(a, b){
    let pow = 1;
    for(; b > 0; b--){
        pow = pow*a;
    }
    return pow;
}

function evaluate(str){
    str = str.split("");
    return operator(a, b);
}

let num1 = document.querySelector(".input1");
let num2 = document.querySelector(".input2");
let output = document.querySelector(".output");

let Add = document.querySelector(".add");
let Substract = document.querySelector(".substract");
let Multiply = document.querySelector(".multiply");
let Division = document.querySelector(".division");
let Remainder = document.querySelector(".remainder");

let Evalute = document.querySelector(".evalute");

Add.addEventListener("click", () => {
    output.value = Number(num1.value) + Number(num2.value);
});

Substract.addEventListener("click", () => {
    output.value = Number(num1.value) - Number(num2.value);
})

Multiply.addEventListener("click", () => {
    output.value = Number(num1.value) * Number(num2.value);
})

Division.addEventListener("click", () => {
    output.value = Number(num1.value) / Number(num2.value);
})

Remainder.addEventListener("click", () => {
    output.value = Number(num1.value) % Number(num2.value);
})

Evalute.addEventListener("click", (e) => {
    Input.value = evaluate(Input.value);
})