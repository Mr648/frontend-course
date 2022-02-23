/**
 * Returns sum of first_number and second_number
 * @param first_number
 * @param second_number
 * @returns integer|float
 */
function sum(first_number, second_number) {
    console.log(first_number + second_number);
    return first_number + second_number;
}

function sub(first_number, second_number) {
    console.log(first_number - second_number);
    return first_number - second_number;
}

function mul(first_number, second_number) {
    console.log(first_number * second_number);
    return first_number * second_number;
}

function divide(first_number, second_number) {
    console.log(first_number / second_number);
    return first_number / second_number;
}

function mod(first_number, second_number) {
    console.log(first_number % second_number);
    return first_number % second_number;
}

function power(first_number, second_number) {
    //return first_number ^ second_number;
    console.log(first_number ** second_number);
    return first_number ** second_number;
}

function calculate() {
    let first_number_element = document.getElementById("first_number");
    let second_number_element = document.getElementById("second_number");
    let operator_element = document.getElementById("operator");
    let result_element = document.getElementById("result");

    let first_number = parseFloat(first_number_element.value);
    let second_number = parseFloat(second_number_element.value);
    let operator = operator_element.value;
    // alert ('first_number is '+first_number + ', second_number is '+second_number + " -- " + operator);

    if (operator === '+') {
        // result_element.innerHTML = `${sum(first_number, second_number)}` ;
        result_element.innerHTML = "" + sum(first_number, second_number) ;
    }else if (operator === '-') {
        result_element.innerHTML = "" + sub(first_number, second_number) ;
    }else if (operator === '*') {
        result_element.innerHTML = "" + mul(first_number, second_number) ;
    }else if (operator === '/') {
        result_element.innerHTML = "" + divide(first_number, second_number) ;
    }else if (operator === '^') {
        result_element.innerHTML = "" + power(first_number, second_number) ;
    }else if (operator === '%') {
        result_element.innerHTML = "" + mod(first_number, second_number) ;
    }

}