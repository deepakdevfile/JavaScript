class User {
    name = "John";
    // name = input("Name, please? ", "John");
    sayHi(){
        console.log(`Hello, ${this.name}!`);
    }
}


let user = new User();
console.log(user.name);
// console.log(user.prototype.name);