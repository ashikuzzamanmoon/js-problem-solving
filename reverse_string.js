// Task 1 : Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method. 
// Example Input: "hello world" Example Output: "dlrow olleh"

function reverseString(str){
    let reversedString = "";

    for(let i = str.length-1; i>=0; i--) {
        reversedString += str[i];
    }

    return reversedString;
}

const inputString = "hello world";
const reversedString = reverseString(inputString);
console.log(reversedString);