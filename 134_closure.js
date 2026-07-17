function outer(){
    let outerVar = "Hey, I am the outer var";
    function inner(){
        let innerVar = "Hey, I am an inner var";
        console.log(innerVar);
        console.log(outerVar);
    }
    return inner;
}

let innerFn = outer();
innerFn();