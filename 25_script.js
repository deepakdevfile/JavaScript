function maximumSum(arr){
    let maxSum = 0;
    
    for(let i = 0; i < arr.length; i++){
        let sum = 0;
        for(let j = 0; j < arr.length; j++){
            sum = sum + arr[j];
        }
        if(sum > maxSum){
            maxSum = sum;
            subArr = arr

        }
    }
    return maxSum;
}