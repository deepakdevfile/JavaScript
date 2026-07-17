// let car = {
//     brand: "Honda",
//     start: function(){
//         console.log(this.brand + " is starting.");
//     }
// };

// car.start();

// // function show(){
// //     console.log(this === window);
// // }

// // show();

// function show(){
//     "use strict";
//     console.log(this === undefined);

//     function display(){
//         console.log(this === undefined);
//     }

//     display();
// }

// show();

// car = {
//     brand:"Honda",
//     getBrand: function(){
//         return this.brand;
//     }
// }

// console.log(car.getBrand());

// let brand = car.getBrand;
// console.log(brand());

// brand = car.getBrand.bind(car);
// console.log(brand());

// let bike = {
//     brand: 'Harley Davidson',
// }

// brand = car.getBrand.bind(bike);
// console.log(brand());

// function car1(brand){
//     this.brand = brand;
// };

// car1.prototype.getBrand = function(){
//     return this.brand;
// }

// let race = new car1('Honda');
// console.log(race.getBrand());

// function Car(brand){
//     // if(!(this instanceof Car)){
//     //     throw Error('Must use the new operator to call the function');
//     // }
//     if(!new.target){
//         throw Error('Must use the new operator to call the function');
//     }
//     this.brand = brand;
// }

// Car.prototype.getBrand = function(){
//     return this.brand;
// }

// let car = new Car('Honda');
// console.log(car.getBrand());

// let bmw = Car('BMW');
// console.log(bmw.brand);

// function getBrand(prefix){
//     console.log(prefix + this.brand);
// }

// let honda = {
//     brand: 'Honda',
// };
// let audi = {
//     brand: 'Audi',
// };

// getBrand.call(honda, "it's a ");
// getBrand.call(audi, "It's an ");

// getBrand.apply(honda, ["it's a "]);
// getBrand.apply(audi, ["It's an "]);

function Car(){
    this.speed = 120;
}

Car.prototype.getSpeed = () => {
    return this.speed;
}

let car = new Car();
console.log(car.getSpeed());