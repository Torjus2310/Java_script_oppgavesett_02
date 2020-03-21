
const inpFornavn = document.querySelector ("#inpFornavn");
const inpEtternavn = document.querySelector ("#inpEtternavn");

function LeggTilNavn1() {

    NavnListe.innerHTML += `${inpFornavn.value}`;
    
}

inpFornavn.onchange = LeggTilNavn1;



function LeggTilNavn() {

    NavnListe2.innerHTML += `${inpEtternavn.value}`;
    Sammen.innerHTML += `${inpFornavn.value}  ${inpEtternavn.value}`;
}

inpEtternavn.onchange = LeggTilNavn;



