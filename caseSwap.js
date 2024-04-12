// declare function
function swapCase (string){
    // break the string into an array with each letter forming an element
    const splitString = string.split('')
    // initialize an array to hold letters that are uppercased ore lowerCased 
    const lettersArray = []
    for (let letter of splitString){
        //if in upper Case switch to lower cas and vice versa
        if (letter === letter.toUpperCase()){
    const lowerLetter = letter.toLowerCase()
    // add sitched letters to the array
    lettersArray.push(lowerLetter)
     }
     else {
    const  upperLetter = letter.toUpperCase()
     // add sitched letters to the array
    lettersArray.push(upperLetter)
     }
    }
    // bring together all letters to form a string
    const swapCased = lettersArray.join('')
    console.log(swapCased)
    return swapCased
}
swapCase('The Quick Brown Fox')
swapCase('My Name IS NONe Other ThAn AbDy')