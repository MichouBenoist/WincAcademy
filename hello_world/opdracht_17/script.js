function biggerThan100(number) {
    if (number > 100) {
        return true;
    }
    else {
        return false;
    }
}

const result1 = biggerThan100(2087);

console.log("Het getal 2087 is groter dan 100:", result1);

const result2 = biggerThan100(87);

console.log("Het getal 87 is groter dan 100:", result2);

const result3 = biggerThan100(100);

console.log("Het getal 100 is groter dan 100:", result3);

const result4 = biggerThan100(-117);

console.log("Het getal -117 is groter dan 100:", result4);

// Brenda the Bouncer Bot

function Brenda(maxNumberOfPeople, currentNumberOfPeople, age) {
    if (currentNumberOfPeople < maxNumberOfPeople) {
        if (age >= 18) {
            return "Come in."
        }
        return "This is a club for adults."

    }
    return "It's too busy now, come back later."
}

const BrendasResponse = Brenda(250, 100, 20);

console.log("Brenda says: ", BrendasResponse);

const BrendasResponse2 = Brenda(250, 250, 20);

console.log("Brenda says: ", BrendasResponse2);

const BrendasResponse3 = Brenda(250, 100, 11);

console.log("Brenda says: ", BrendasResponse3);
const BrendasResponse4 = Brenda(250, 300, 11);

console.log("Brenda says: ", BrendasResponse4);

//Dit is een functie die iets produceert

//Calculating the average

function average(number1, number2, number3, number4, number5) {
    const sum = (number1 + number2 + number3 + number4 + number5);
    const result = sum / 5;
    return Math.round(result);

}

const averageResult = average(3, 6, 34, 5, 2);
console.log("The average is: ", averageResult);

const averageResult2 = average(3.5, 6, 12, 4, 8);
console.log("The average is: ", averageResult2);

// Dit is een functie die iets produceert