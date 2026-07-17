function createGreeting(greeting = ""){
    let myGreet = greeting.toUpperCase();

    return function(name){
        return `${myGreet} ${name}`;
    }
}

let sayHello = createGreeting("Hello");
let sayHey = createGreeting("Hey");
console.log("Okay");
console.log(sayHello("Skipper"));
console.log(sayHello("Kowalski"));
console.log(sayHey("Rico"));
console.log(sayHey("Private"));