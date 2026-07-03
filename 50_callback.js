
// personal forEach function and various ways to call it
function myForEach(array, callback) {
    for (let i = 0; i < array.length; i++) {
        callback(array[i]);
    }
}

let myArray = [2, 3, 4, 2];
myForEach(myArray, (item) => {
    console.log(item + 2);
});

myForEach(myArray, item => console.log(item + 2));
myForEach(myArray, function (item) {
    console.log(item + 2);
});
function printItemPlusTwo(item) {
    console.log(item + 2);
}
myForEach(myArray, printItemPlusTwo);



// How map function works or personal map function and 
// various ways to call it
function myMap(array, callback) {
    let myNewArray = [];
    for (let i = 0; i < array.length; i++) {
        let callbackResult = callback(array[i]);
        myNewArray.push(callbackResult);
    }
    return myNewArray;
}

let addedArray = myMap([1, 2, 3], (arrayNum) => {
    return arrayNum + 2;
});

console.log(addedArray);
addedArray = [4];
console.log(addedArray);
addedArray = myMap([1, 2, 3], (arrayNum) => arrayNum + 2);
console.log(addedArray);