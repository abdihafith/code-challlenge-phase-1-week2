// Define the swapCase function
const swapCase = function(letters) {
    // Start an empty array to store the swapped letters
    let swappedLetters = [];
    // Iterate through each character in the input string
    for (let i = 0; i < letters.length; i++) {
        // Check if the character is lowercase
        if (letters[i] === letters[i].toLowerCase()) {
            // If lowercase, change it to uppercase and push it to the array
            swappedLetters.push(letters[i].toUpperCase());
        } else {
            // If not lowercase, change it to lowercase and push it to the array
            swappedLetters.push(letters[i].toLowerCase());
        }
    }
    // Print the array of swapped letters as a single string to the console
    console.log(swappedLetters.join(''));
}

// Define a variable 'text' containing the string 'am Good'
let text = 'am Good';
// Call the swapCase function with the 'text' variable as input
swapCase(text);
