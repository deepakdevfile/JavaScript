// scope of varibles 
let gAge = 23;
function printAge(age) {
    let vAge = 34;
    if (age > 0) {
        let cAge = age * 2;
        console.log(cAge);
    }
}
printAge(gAge);
// console.log(vAge);

// closures 
function mAF(fNum) {
    return function rF(sNum) {
        return fNum + sNum;
    }
};
let add5 = mAF(5);
console.log(add5(2));


// constructor 
// function user(name) {
//     this.name = name;
//     this.dName = "@" + name;
// }

// factory function 
// function cUser(name) {
//     const dName = "@" + name;
//     return { name, dName };
// }

// private varibles and functions 
function cUser(name) {
    let dName = "@" + name;
    let reputation = 0;
    let getReputation = () => reputation;
    let giveReputation = () => { reputation++ };
    return { name, dName, getReputation, giveReputation };
}

let josh = cUser("Josh");
josh.giveReputation();
josh.giveReputation();

console.log({
    discordName: josh.dName,
    reputation: josh.getReputation(),
});

// composition with factories 
function cPlayer(name, level) {
    let { getReputation, giveReputation } = cUser(name);
    let getLevel = () => level;
    let increaseLevel = () => { level++ };
    return {
        name,
        getReputation,
        giveReputation,
        getLevel,
        increaseLevel,
    };
}


// module pattern 
let calculator = (() => {
    let lResult;
    let add = (a, b) => {
        lResult = a + b;
        return lResult;
    };
    let substract = (a, b) => {
        lResult = a - b;
        return lResult;
    };
    let multiply = (a, b) => {
        lResult = a * b;
        return lResult;
    };
    let divide = (a, b) => {
        lResult = a / b;
        return lResult;
    };
    let getLastResult = () => lResult;

    return { add, substract, multiply, divide, getLastResult };
})();
console.log(calculator.add(3, 5));
console.log(calculator.substract(6, 2));
console.log(calculator.getLastResult());
console.log(calculator.multiply(14, 5534));