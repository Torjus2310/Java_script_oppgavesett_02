

const xPos = document.querySelector("#xPos");
const yPos = document.querySelector("#yPos");

const boks1 = document.querySelector("#boks1");



function BestemY() {

    boks1.style.top = yPos.value + "px";
    boks1.style.left = xPos.value + "px";
}

yPos.oninput = BestemY;
xPos.oninput = BestemY;





