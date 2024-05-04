"use strict";
// Q.35. Write a script that simulates a basic calculator. It should take two operands and
// an operator ('+', '-', '*', '/') from the user, perform the operation, and log the result.
function calculate(operand1, operand2, operator) {
    switch (operator) {
        case '+':
            return operand1 + operand2;
        case '-':
            return operand1 - operand2;
        case '*':
            return operand1 * operand2;
        case '/':
            return operand1 / operand2;
    }
}
// Get user input
const operand1 = parseInt(prompt("Enter the first operand:") || "0");
const operand2 = parseInt(prompt("Enter the second operand:") || "0");
const operator = prompt("Enter the operator (+, -, *, /):") || "0";
// Perform calculation
const result = calculate(operand1, operand2, operator);
// Log the result
console.log(`Result: ${result}`);
