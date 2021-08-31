const myButton = document.getElementById("mybutton")
myButton.addEventListener("click", myButtonClicked)

function myButtonClicked(event) {
    alert("Button Clicked");
}

const newButton = document.getElementById("newbutton")
newButton.addEventListener("click", newButtonClicked)



const toggleButton = document.getElementById("togglebutton")
toggleButton.addEventListener("click", toggleColor)

function newButtonClicked(event) {
    const body = document.getElementsByTagName("body")
    body[0].className += " red-background";
}


function toggleColor(event) {
    const body = document.getElementsByTagName("body")
    body[0].classList.toggle("red-background");
}
