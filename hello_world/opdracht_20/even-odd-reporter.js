//Aangeven welke getallen even en oneven zijn
//var unevenNumber = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
//var evenNumber = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];



for (let i = 0; i <= 20; i++) {
    console.log(`Is ${i} even or odd?`);
    const remainder = i % 2

    if (remainder == 0) {
        console.log(`${i} is even.`);
    }
    else {
        console.log(`${i} is uneven.`);
    }
}



