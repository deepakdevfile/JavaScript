function copySorted(arr){
    // let sorted = [];
    // for(let i = 0; i < arr.length; i++){
    //     sorted[i] = arr[i];
    // }
    // sorted.sort(function(a, b) {return a - b})
    // return sorted;
    return arr.slice().sort();

}


let arr = [3, 2, 7, 3, 2, 6, 9, 6];
let sorted = copySorted(arr);
console.log(arr);
console.log(sorted);