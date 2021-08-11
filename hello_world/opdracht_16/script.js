console.log('Het werkt!');

//naam voor mijn functie: "verf"
//no arguments
console.log("De muur is rood geverfd.")

//single argument
const verf = function (kleur) {
    console.log("De muur is " + kleur + " geverfd.");
};

let kleur = "groen";

verf(kleur);

kleur = "blauw";

verf(kleur);

verf();
//de muur is undefined geverfd.

//multiple arguments
const verfMuur = function (item, kleur) {
    console.log("De " + item + " is " + kleur + " geverfd.");
};

let item = "muur aan de noordkant";

verfMuur("oranje", item);
verfMuur(item, "oranje");
//Ja de volgorde maakt uit: "De oranje is muur aan de noordkant geverfd."

//Als je de volgorde in function definition omdraait worden de arguments in die volgorde ingevuld. Dus Dan wordt de eerste "De oranje is muur aan de noordkant geverfd." En de tweede "De muur aan de noordkant is oranje geverfd."

//Als je de volgorde van arguments in de function definition EN bij het aanroepen van de functie omdraait, gaat het goed: "De muur aan de noordkant is oranje geverfd."