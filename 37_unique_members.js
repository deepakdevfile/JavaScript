function unique(arr){
    let ans = [];
    arr.filter((item) => {if(!ans.includes(item)){ans.push(item)}})
    return ans;

    // let ans = [];
    // let n = arr.length;
    // for(let i = 0; i < n; i++){
    //     if(!ans.includes(arr[i])){
    //         ans.push(arr[i]);
    //     }
    // }
    // return ans;
}

let strings = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log(unique(strings));