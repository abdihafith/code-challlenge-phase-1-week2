function arrayMath (num1,num2){
    // initialize array to hold the array to be created
    const array = []
    // if the first number is less than the second number
    if (num1<=num2){
    for (let i = num1;i<=num2;i++){
          array.push(i)
    }
}
    else {
        // if the second number is greater than the first number
        for (let i = num1;i>=num2;i--){
            array.push(i)
        }
    }
    console.log(array)
    return array
}
arrayMath(13,11)