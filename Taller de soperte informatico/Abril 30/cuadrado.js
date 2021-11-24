
let margen = "1cm";

function moverHaciaDerecha() {
    let cuadrado = document.getElementById("cuadrado");
    let MargenDerecho = parseInt(margen.charAt(0))+1;
    margen = MargenDerecho + "cm";
    cuadrado.style.marginLeft = margen;
}
function moverHaciaIzquierda() {
    let cuadrado = document.getElementById("cuadrado");
    let MargenIzquiero = parseInt(margen.charAt(0))-1;
    margen = MargenIzquiero + "cm";
    cuadrado.style.marginLeft = margen;
}
