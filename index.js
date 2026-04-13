//the following javascript will perfom certain work
//addition 
//subtraction
//multiplication
//division on two numbers
const finalarray = [];
let a = 66;
let b = 4;

function addition(a, b) {
    let result = a + b;
    let operator = "+";
    let operands = [a, b];
    return { result, operator, operands };
}

function subtraction(a, b) {
    let result = a - b;
    let operator = "-";
    let operands = [a, b];
    return { result, operator, operands };
}

function multiplication(a, b) {
    let result = a * b;
    let operator = "*";
    let operands = [a, b];
    return { result, operator, operands };
}

function division(a, b) {
    let result = a / b;
    let operator = "/";
    let operands = [a, b];
    return { result, operator, operands };
}

function pushToArray(result) {
    finalarray.push(result);
}

let resulta = addition(a, b);
pushToArray(resulta);

let results = subtraction(a, b);
pushToArray(results);

let resultm = multiplication(a, b);
pushToArray(resultm);

let resultd = division(a, b);
pushToArray(resultd);

console.log(finalarray);
