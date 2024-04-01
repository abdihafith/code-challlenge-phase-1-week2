// Define the isPrime function
function isPrime(num) {
    // If the number is less than or equal to 1, it's not prime
    if (num <= 1) return false;
    // If the number is 2 or 3, it's prime
    if (num <= 3) return true;
    // If the number is divisible by 2 or 3, it's not prime
    if (num % 2 === 0 || num % 3 === 0) return false;

    let i = 5;
    while (i * i <= num) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
        i += 6;
    }
    // If the conditions are not met, the number is prime
    return true;    
}

// Define the filterPrimes function
function filterPrimes(numbers) {
    // Filter out prime numbers from the array
    return numbers.filter(num => isPrime(num));
}

// Example usage:
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let primeNumbers = filterPrimes(numbers);
console.log(primeNumbers); // Output: [2, 3, 5, 7]
