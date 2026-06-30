function camelize(str){
    let arr = str.split('-');
    let num = arr.length;
    for(let i = 1; i < num; i++){
        arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
    }
    return arr.join("")
}

console.log(camelize("background-color"));
console.log(camelize("list-style-image"));
console.log(camelize("-webkit-transition"));