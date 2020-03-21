const matliste = document.querySelector ("#matliste");

const inpMat = document.querySelector ("#inpMat");

function LeggTilMat () {
    
    matliste.innerHTML += `<li> ${inpMat.value}</li>`;
    
}


inpMat.onchange = LeggTilMat;









