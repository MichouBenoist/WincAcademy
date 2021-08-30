function game() {


    //prompt naam invullen
    const naam = prompt("Welkom bij Guess the Number! Wat is je naam?", "Vul naam in");

    if (naam == null) {
        alert("Je bent vergeten een naam in te vullen. Druk op F5 om de pagina te verversen en probeer het nog eens.");
        return;
    }

    //alert
    alert(`Hey ${naam}`);

    while (true) {
        var max = parseInt(prompt("Wat is de maximale waarde die je wil raden?"));
        var min = parseInt(prompt("Wat is de minimale waarde die je wil raden?"));
        if (max == NaN || min == NaN) {
            alert("Het moeten wel nummers zijn.")
        } else if (max == null || min == null) {
            alert("Je wil niet meer meedoen? Jammer, doei!");
            return;
        }
        else if (max <= min) {
            alert(`Dit klopt niet. Maak je minimale waarde kleiner dan ${max}`);


        }
        else {
            break;
        }
    }
    //spuug random nummer uit

    var geheimNummer = min + getRandomInt(max - min);
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    for (let i = 0; i < 5; i++) {


        const nummer = parseInt(prompt(`Voer een nummer in van ${min} tot ${max} om te beginnen met raden...`));

        if (nummer == NaN) {
            alert("Dit is geen nummer. Druk op F5 en probeer het nog eens.");
            return;
        }

        //prompt
        // vul nummer in


        if (geheimNummer == nummer) {
            alert("Gefelciteerd je hebt gewonnen!");
            break;
        }
        else {
            if (i == 4) {
                alert("Helaas je hebt vijf keer mis gegokt en verloren.")
            }
            else {
                const opnieuw = confirm(`Dat is niet correct. Dit was poging ${i + 1} van 5. Wil je opnieuw raden ? `);
                if (opnieuw == false) {
                    break;
                }
            }
        }


    }
    alert(`Dag ${naam}. Tot de volgende keer.`);

}
game();