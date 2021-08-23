/* In this exercise we're going to write a single function in three styles.

The function we're going to create will do the following.

take two numbers
each number will be squared (multiplied with itself)
the squared numbers will be added together
this sum will be squared again
the resulting value is returned
Write this function in all three styles and give the functions and their arguments good names. They cannot have exactly the same name. There are multiple ways to do this.

function declaration
function expression
arrow function*/

//function declaration

function calculate(number1, number2) {
    const step1 = (number1 * number1) + (number2 * number2);
    const step2 = step1 * step1
    return step2
}

console.log(calculate(1, 2));

//function expression

const calculate2 = function (number1, number2) {
    const step1 = (number1 * number1) + (number2 * number2);
    const step2 = step1 * step1
    return step2
};

console.log(calculate2(2, 3));

// arrow expression

const calculate3 = (number1, number2) => {
    const step1 = (number1 * number1) + (number2 * number2);
    const step2 = step1 * step1
    return step2
}

console.log(calculate3(6, 8));