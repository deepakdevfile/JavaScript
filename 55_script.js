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

let numPad = document.querySelector(".numPad");
for(let i = 9; i >= 0; i--){
    let button = document.createElement("button");
    button.className = `_${i}`;
    button.textContent = i;
    numPad.append(button);
}

let num = '';
let exp = document.querySelector(".exp");
let b1 = document.querySelector("._1");
let b2 = document.querySelector("._2");
let b3 = document.querySelector("._3");
let b4 = document.querySelector("._4");
let b5 = document.querySelector("._5");
let b6 = document.querySelector("._6");
let b7 = document.querySelector("._7");
let b8 = document.querySelector("._8");
let b9 = document.querySelector("._9");
let b0 = document.querySelector("._0");

let Add = document.querySelector(".add");
let Substract = document.querySelector(".substract");
let Multiply = document.querySelector(".multiply");
let Division = document.querySelector(".division");
let Remainder = document.querySelector(".remainder");
let Clear = document.querySelector(".clear");
let operation = '';

let Evalute = document.querySelector(".evalute");
let result = '';

b1.addEventListener("click", () => {
    num = num + b1.textContent;
    exp.value = exp.value + b1.textContent;
    console.log(num);
})

b2.addEventListener("click", () => {
    num = num + b2.textContent;
    exp.value = exp.value + b2.textContent;
    console.log(num);
})

b3.addEventListener("click", () => {
    num = num + b3.textContent;
    exp.value = exp.value + b3.textContent;
    console.log(num);
})

b4.addEventListener("click", () => {
    num = num + b4.textContent;
    exp.value = exp.value + b4.textContent;
    console.log(num);
})

b5.addEventListener("click", () => {
    num = num + b5.textContent;
    exp.value = exp.value + b5.textContent;
    console.log(num);
})

b6.addEventListener("click", () => {
    num = num + b6.textContent;
    exp.value = exp.value + b6.textContent;
    console.log(num);
})

b7.addEventListener("click", () => {
    num = num + b7.textContent;
    exp.value = exp.value + b7.textContent;
    console.log(num);
})

b8.addEventListener("click", () => {
    num = num + b8.textContent;
    exp.value = exp.value + b8.textContent;
    console.log(num);
})

b9.addEventListener("click", () => {
    num = num + b9.textContent;
    exp.value = exp.value + b9.textContent;
    console.log(num);
})

b0.addEventListener("click", () => {
    num = num + b0.textContent;
    exp.value = exp.value + b0.textContent;
    console.log(num);
})

Add.addEventListener("click", () => {
    num1 = Number(num);
    num = '';
    exp.value = exp.value + " + ";
    operation = '+';
});

Substract.addEventListener("click", () => {
    num1 = Number(num);
    num = '';
    exp.value = exp.value + " - ";
    operation = '-';
})

Multiply.addEventListener("click", () => {
    num1 = Number(num);
    num = '';
    exp.value = exp.value + " * ";
    operation = '*';
})

Division.addEventListener("click", () => {
    num1 = Number(num);
    num = '';
    exp.value = exp.value + " / ";
    operation = '/';
})

Remainder.addEventListener("click", () => {
    num1 = Number(num);
    num = '';
    exp.value = exp.value + " % ";
    operation = '%';
})

Clear.addEventListener("click", () => {
    exp.value = '';
    num = '';
})

Evalute.addEventListener("click", (e) => {
    num2 = Number(num);
    num = '';
    switch(operation){
        case "+":
            result = add(num1, num2)
            exp.value = result;
            console.log(add(num1, num2));
            break;
        case "-":
            result = substract(num1, num2)
            exp.value = result;
            console.log(substract(num1, num2));
            break;
        case "*":
            result = multiply(num1, num2)
            exp.value = result;
            console.log(multiply(num1, num2));
            break;
        case "/":
            result = division(num1, num2)
            exp.value = result;
            console.log(division(num1, num2));
            break;
        case "%":
            result = remainder(num1, num2);
            exp.value = result;
            console.log(remainder(num1, num2));
            break;
    }
})