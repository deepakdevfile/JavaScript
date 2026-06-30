function filterRange(arr, start, end) {
    let num = arr.length;
    for(let i = 0; i < num; i++){
        if(!(arr[i] <= end && arr[i] >= start)){
            arr.splice(i, 1);
        }
    }
    return arr;
    // return arr.filter(item => (start <= item && item <= end));
}


let arr = [5, 3, 8, 1];
filterRange(arr, 1, 4);
console.log(arr); // [3, 1]