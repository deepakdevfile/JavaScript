class User {
    constructor(Name){
        this.Name = Name;
    }

    SayHi(){
        console.log(this.Name);
    }
}

let user1 = new User("John");
user1.SayHi();
console.log(typeof User);
console.log(Object.getOwnPropertyNames(User.prototype));

// same thing with function 
function user(name){
    this.name = name;
};

user.prototype.sayHi = function () {
    console.log(this.name);
};
let user2 = new user("John");
user2.sayHi();


// class declaration 2 
let User2 = class {
    sayHi2(){
        console.log("Hello2");
    }
};

// class declaration 3 
let User3 = class MyClass {
    sayHi(){
        console.log(MyClass);
    }
}

new User3().sayHi();
// console.log(MyClass) gives error 

// class declaration 4
function makeClass(pharse){
    return class{
        sayHi(){
            console.log(pharse);
        }
    };
}

let user4 = makeClass("Hello");
new user4().sayHi();