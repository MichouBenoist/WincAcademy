const colors = ["yellow", "blue", "red", "orange"];

let teller = 0;
while (colors[teller] != undefined) {
    console.log(colors[teller]);
    teller++;
}

for (let i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}

colors.forEach(element => console.log(element));

// 1. a. Hoeveel regels neemt mijn for loop in beslag? 3
// 1. b. Hoeveel regels neemt mijn while loop in beslag? 5
// 2. Hoeveel regels neemt mijn forEach method in beslag? 1
// 3. a. Welke voordelen heeft een array method nog meer t.o.v. een for of while loop? Korter, prefab.
// 3. b. Welke methoden vind je makkelijker leesbaar? Ik vind de for loop het makkelijkst leesbaar.
// 4. a. Kun je een array method gebruiken op een object? Jullie zeggen nee, maar een array is ook een object. Dus niet op alle, maar wel op arrays.
// 4. b. Google een methode om een object met 45 properties te console loggen. Antwoord: for:in statement.
// 4. c. Probeer de code uit met ene object met 5 properties.


const object = { a: 1, b: 2, c: 3, d: 4, e: 5 };

for (const property in object) {
    console.log(`${property}: ${object[property]}`);
}

// 4. d. Ben je aan het itereren? Ja, want de functie rolt vijf keer uit.