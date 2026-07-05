let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr = [john, pete, mary];

function getAverageAge(arr){
    // let sum = 0;
    // // sum += arr.map(item => item.age);
    // // console.log(sum)
    // let n = arr.length;
    // for(let i = 0; i < n; i++){
    //     sum = sum + Number(arr[i].age);
    // }

    // return sum / n;

    return arr.reduce((sum, user) => sum + user.age, 0)/arr.length;
}

console.log(getAverageAge(arr));