var button = document.getElementById("button")
var body = document.getElementById("body")

function handleButtonOver(){
    button.style.backgroundColor = "blue"
}



function handleButtonDown(){
    button.style.backgroundColor = "red"
}



function handleButtonUp(){
    button.style.backgroundColor = "yellow"
}


function handleButtonDbl(){
    button.style.backgroundColor = "green"
}


function handleScroll(){
    button.style.backgroundColor = "orange"
}

/*function keyDown(event){
    var x = event.keyCode
    if (x === 82) {
        button.style.backgroundColor = "red"
    } if (x === 66) {
        button.style.backgroundColor = "blue"
    } if (x === 89) {
        button.style.backgroundColor = "yellow"
    } else {
        button.style.backgroundColor = "white"
    }
}*/

button.addEventListener("onmouseover", handleButtonOver)

button.addEventListener("onmousedown", handleButtonDown)

button.addEventListener("onmouseup", handleButtonUp)

button.addEventListener("ondbleclick", handleButtonDbl)

body.addEventListener("onwheel", handleScroll)

document.addEventListener("keydown", function(event){
    if (event.which === 82) {
        button.style.backgroundColor = "red";
    } if (event.which === 66) {
        button.style.backgroundColor = "blue";
    } if (event.which === 79) {
        button.style.backgroundColor = "orange";
    } if (event.which === 89) {
        button.style.backgroundColor = "yellow";
    } if (event.which === 71) {
        button.style.backgroundColor = "green";
    } 
});
