// Hamburger menu aanklikbaar, menulijst verschijnt, tweede keer klikken is weg, 

function toggleMenu(event) {
    const menu = document.getElementsByTagName("nav")
    menu[0].classList.toggle("hidden");
}

function registreerClickEvent(kleur) {
    // Dit werkt omdat onze knoppen dezelfde class hebben als
    // de naam van de kleur (de gele knop heeft als class 'Geel').
    const elementen = document.getElementsByClassName(kleur);

    for (let i = 0; i < elementen.length; i++) {
        elementen[i].addEventListener("click", () => {
            body.className = kleur
            toggleMenu()
            document.getElementById("kleurnaam").innerHTML = kleur
        });
    }
}

const kleuren = ["Geel", "Rood", "Blauw", "Indigo", "Violet", "Groen", "Oranje"];
const menuKnop = document.getElementById("menuKnop");
const body = document.getElementById("body");

menuKnop.addEventListener("mouseenter", toggleMenu);

for (var i = 0; i < kleuren.length; i++) {
    registreerClickEvent(kleuren[i]);
}
