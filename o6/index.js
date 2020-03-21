const inpX = document.querySelector ("#inpX");
const inpY = document.querySelector ("#inpY");

const SlideHeight = document.querySelector ("#SlideHeight");
const SlideRadius = document.querySelector ("#SlideRadius");

const gronnboks = document.querySelector ("#gronnboks");

 function FlyttBoks () {


gronnboks.style.top = inpY.value + "px";
gronnboks.style.left = inpX.value + "px";

}

inpX.oninput = FlyttBoks
inpY.oninput = FlyttBoks


function Slide () {

gronnboks.style.height = SlideHeight.value + "px";
gronnboks.style.width = SlideWidth.value + "px";
gronnboks.style.borderRadius = SlideRadius.value + "px";
}

SlideHeight.onchange = Slide
SlideWidth.onchange = Slide
SlideRadius.onchange = Slide








