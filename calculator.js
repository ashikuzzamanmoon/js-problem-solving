// Task 5: Implement a simple JavaScript calculator. The calculator should take two numbers and an operator (+, -, *, /) as input and return the result of the operation

function calculator(num1, num2, operator){
    switch(operator){
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "/":
            return num1 / num2;
        default:
            throw new Error("Invalid operator");
    }
}

const num1 = 5;
const num2 = 10;
const operator = "+";
const result = calculator(num1, num2, operator);
console.log(result);