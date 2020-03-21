const SkriftStørrelse = document.querySelector ("#SkriftStørrelse");
const FontFamily = document.querySelector ("#FontFamily");
const TekstFarge = document.querySelector ("#TekstFarge");
const BakgrunnsFarge = document.querySelector ("#BakgrunnsFarge");

const tekst = document.querySelector ("#tekst");

function customize () {

    tekst.style.fontSize = SkriftStørrelse.value + "px";
    tekst.style.fontFamily = FontFamily.value;
    tekst.style.color = TekstFarge.value;
    tekst.style.backgroundColor = BakgrunnsFarge.value;


}

SkriftStørrelse.onchange = customize
FontFamily.onchange = customize
TekstFarge.onchange = customize
BakgrunnsFarge.onchange = customize






