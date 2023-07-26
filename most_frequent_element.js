// Task 3: Write a JavaScript program to find the most frequent element in an array and return it. 

// Example Input: [3, 5, 2, 5, 3, 3, 1, 4, 5] Example Output: 3

function mostFrequentElement(array){
    let mostFrequentElement = array[0];
    let mostFrequentCount = 1;

    for(let i = 1; i < array.length; i++){
        let currentCount = 1;
        for(let j = 0; j < i; j++){
            if(array[i] === array[j]){
                currentCount++;
            }
        }

        if(currentCount > mostFrequentCount){
            mostFrequentElement = array[i];
            mostFrequentCount = currentCount;
        }
    }

    return mostFrequentElement;
}

const array = [3, 5, 2, 5, 3, 3, 1, 4, 5];
const result = mostFrequentElement(array);
console.log(result);