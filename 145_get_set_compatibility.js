function User(name, age){
    this.name = name;
    this.age = age;
}

let John = new User("John", 25);
console.log(John.age);

function user(name, birthday){
    this.name = name;
    this.birthday = birthday;

    Object.defineProperty(this, "age", {
        get(){
            let todayYear = new Date().getFullYear();
            return todayYear - this.birthday.getFullYear();
        }
    })
}

let john = new user("John", new Date(1992, 6, 1));
console.log(john.birthday);
console.log(john.age);