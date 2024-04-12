// Example of array with number some of which are prime numbers
const numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const primeNo = []
// function loops through each ellement of the array checking if 
// any number is a prime number
function loopThrough (array){
    for (let no of array){
           primeCheck(no)
      }
  }
function primeCheck (num) {
      // Check if the input number is less than 2, which is not a prime number
    if (num < 2){
        return `${num} is not a prime number`
    }
    // calculate square root of number to test prime number using Primality test
    const limit = num**(1/2)
    // check for prime numbers from 2 upto square root of the
    for (let i = 2;i <=limit;i++ ){
    // check if number s divisible without remainder
        if (num % i === 0){
         return (`${num} is not a prime number`)}
    }
    // if loop completes without a divisor num is a prime number
    primeNo.push(num)
    return `${num} is a prime number`
}

function loopThrough (array){
  for (let no of array){
         primeCheck(no)
    }
}

// tests to confirm function is working
loopThrough(numArray)
console.log(primeNo)