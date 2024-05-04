
"use strict";

let currentNumber = "";
let previousNumber = null;
let operation = null;
let expression= "";


function handleNumber(number) {
    currentNumber += number;
    expression += number;
    document.getElementById("output").value = expression;
}

function handleOperation(op) {
    if (currentNumber === "") return;
    expression = op;
    previousNumber = parseFloat(currentNumber);
    currentNumber = "";
    operation = op;
    document.getElementById("output").value = expression;
    
}

function calculate() {


    if (previousNumber === null || currentNumber === "" || operation === null) return;

    let result;
    const NUM1 = previousNumber;
    const NUM2 = parseFloat(currentNumber);

    switch (operation) {
        case "+":
            result = NUM1 + NUM2;
            break;
        case "-":
            result = NUM1 - NUM2;
            break;
        case "×":
            result = NUM1 * NUM2;
            break;
        case "%":
            result = NUM1 % NUM2;
            break;
        case "÷":
            if (NUM2 === 0) {
                // alert("Division by zero is not allowed!");
                document.getElementById("output").value = "Division by zero is not allowed!";
                return;
            }
            result = NUM1 / NUM2;
            break;
            default:
                return;
    }

    currentNumber = result.toString();
    previousNumber = null;
    operation = null;
    document.getElementById("output").value = currentNumber;
}

document.getElementById("output").value = "0";