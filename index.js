//the following javascript will perfom certain work
//addition 
//subtraction
//multiplication
//division on two numbers
const finalarray = [];
let a = 66;
let b = 4;
//addition
function addition(a, b) {
    let result = a + b;
    let operator = "+";
    let operands = [a, b];
    return { result, operator, operands };
}
//subtraction
function subtraction(a, b) {
    let result = a - b;
    let operator = "-";
    let operands = [a, b];
    return { result, operator, operands };
}
//multiplication
function multiplication(a, b) {
    let result = a * b;
    let operator = "*";
    let operands = [a, b];
    return { result, operator, operands };
}
//division
function division(a, b) {
    let result = a / b;
    let operator = "/";
    let operands = [a, b];
    return { result, operator, operands };
}
//function to push the result to the array
function pushToArray(result) {
    finalarray.push(result);
}
//performing the operations and pushing the results to the array
let resulta = addition(a, b);
pushToArray(resulta);
//performing the operations and pushing the results to the array
let results = subtraction(a, b);
pushToArray(results);
//performing the operations and pushing the results to the array
let resultm = multiplication(a, b);
pushToArray(resultm);
//performing the operations and pushing the results to the array
let resultd = division(a, b);
pushToArray(resultd);

console.log(finalarray);
