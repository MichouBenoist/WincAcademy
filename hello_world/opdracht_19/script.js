//hello kiddo

const checkAge = function (age) {
    if (age >= 18) {
        return true
    }
    return false

}

const canBuyBeer = function (age) {
    const isAdult = checkAge(age);

    if (isAdult == true) {
        return "Hello there"

    };
    return "Hello kiddo"
}

console.log(canBuyBeer(13));

//VAT exercise 1
const calculateVAT = function (price, VATpercentage) {
    return (price * VATpercentage / 100);
}

const calculatePriceIncludingVAT = function (price, VATpercentage) {
    return (price + calculateVAT(price, VATpercentage));
}

console.log(calculatePriceIncludingVAT(1000, 21));
console.log(calculatePriceIncludingVAT(1, 6));
console.log(calculatePriceIncludingVAT(2320, 21));

//VAT exercise 2

const nettoAndVAT = function (priceIncludingVAT, VATpercentage) {
    const priceExcludingVAT = calculatePriceExcludingVAT(priceIncludingVAT, VATpercentage);
    const VATamount = priceIncludingVAT - priceExcludingVAT;
    return [priceExcludingVAT, VATamount];
}

const calculatePriceExcludingVAT = function (priceIncludingVAT, VATpercentage) {
    return (priceIncludingVAT / ((100 + VATpercentage) / 100));
}

console.log(nettoAndVAT(1200, 21));


