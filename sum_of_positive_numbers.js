// Task 2 : Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array. 

// Example Input: [2, -5, 10, -3, 7] Example Output: 19

function sumOfPositiveNumbers(array){
    let sumOfPositiveNumbers = 0;

    for(let i = 0; i < array.length; i++){
        if(array[i] > 0){
            sumOfPositiveNumbers += array[i];
        }
    }

    return sumOfPositiveNumbers;
}

const array  = [2, -5, 10, -3, 7];
const results = sumOfPositiveNumbers(array);
console.log(results);
