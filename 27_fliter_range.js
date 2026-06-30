function filterRange(arr, start, end){
    // let num = arr.length;
    // let ans = [];
    
    // for(let i = 0; i < num; i++){
    //     if(arr[i] < end && arr[i] > start){
    //         ans.push(arr[i]);
    //     }
    // }
    // return ans;
    return arr.filter(item => (start <= item && item <= end));
}



let arr = [3, 5, 2, 8, 9];
console.log("issue");
let filtered = filterRange(arr, 2, 8);
console.log(filtered);