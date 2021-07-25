const age = 18;

if (age > 18) {

    console.log("Welkom. Je mag drinken.");
} else if (age < 18) {

    console.log("Je mag nog niet drinken, ik verzoek je naar buiten te gaan.");
}
else {
    console.log("Gefeliciteerd, je bent net 18. Je mag drinken.");
}

if (age >= 18 && age < 25) {
    console.log("Je krijgt 50% korting op je biertjes.")
}


const isFemale = false;

if (isFemale) {
    console.log("Welkom dame, het is ladiesnight en je mag gratis naat binnen.");
}
else {
    console.log("Goedenavond meneer, welkom. Dat is dan tien euro entree.");
}





const driverStatus = "bob";

if (driverStatus === "bob") {
    console.log("Je mag rijden!");
}
else {
    console.log("Zoek je iemand die jou naar huis brengt?");
}

const firstName = "Bram";

if (firstName === "Bram" || firstName === "Sarah") {
    console.log("Onze kroeg bestaat 50 jaar, dus alle Brammen en Sarahs mogen een gratis biertje!");
}

const totalAmount = 100;

if (totalAmount >= 100) {
    console.log("Gratis flesje champagne ter ere van ons 50 jarig bestaan!")
}

else if (totalAmount >= 50) {
    console.log("Gratis portie nachos ter ere van ons 50 jarig bestaan!")
}

else if (totalAmount >= 25) {
    console.log("Gratis (vega)bitterballen ter ere van ons 50 jarig bestaan!")
}


