// Task 8: Implement a JavaScript function to find the second smallest element in an array of numbers. The function should return the second smallest number.

function secondSmallestElement(array){
    let smallestElement = array[0];
    let secondSmallestElement = array[1];

    for( let i = 2; i < array.length; i++){
        if(array[i] < smallestElement){
            secondSmallestElement = smallestElement;
            smallestElement = array[i];
        }
        else if(array[i] > smallestElement && array[i] < secondSmallestElement){
            secondSmallestElement = array[i];
        }
    }

    return secondSmallestElement;
}

const array = [1, 3, 5, 4];
const result = secondSmallestElement(array);
console.log(result);