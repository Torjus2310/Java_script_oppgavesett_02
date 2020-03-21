const overSkrift = document.querySelector ("#overSkrift");
const h1 = document.querySelector ("#h1");
const bilde = document.querySelector ("#bilde")


function overskrift () {

h1.innerHTML += `<h1>${overSkrift.value}</h1>`;
h1.innerHTML += `<img src="${bilde.value}" width="200px" height="200px">`;

}


//overSkrift.onchange = overskrift;
//bilde.onchange = overskrift;






