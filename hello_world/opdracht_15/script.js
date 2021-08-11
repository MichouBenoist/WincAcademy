function greet(name) {
    console.log('Welkom in ons restaurant ' + name + ', wat wil je bestellen?');
}
greet('Michou');

makeSushi();
makeSushi();
makeSushi();
//geleerd dat dit werkt als hoisting :-)

function makePizza() {
    console.log('Maak de bodem');
    console.log('Beleg de pizza');
    console.log('Bak de pizza');
}

makePizza();
makePizza();


function makeSushi() {
    console.log('Maak Sushi')
}


