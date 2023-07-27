// Task 4: Create a function that takes a sorted array of numbers and a target value as input. The function should find two numbers in the array that add up to the target value. Return an array containing the indices of the two numbers.

// Example Input: ([1, 3, 6, 8, 11, 15], 9) Example Output: [0, 3] (numbers at indices 0 and 3: 1 + 8 = 9)

function twoSum(array, target){
    let left = 0;
    let right = array.length - 1;

    while ( left < right ) {
        if(array[left] + array[right] === target){
            return [left, right];
        }
        else if(array[left] + array[right] < target){
            left++;
        }
        else{
            right--;
        }
    }
    return [];
}

const array = [1, 3, 6, 8, 11, 15];
const target = 9;
const results = twoSum(array, target);
console.log(results);
