
let margen = "1cm";
let margen2 = "1cm";
let posicionXdeCuadrado;
let posicionXdeCuadrado2;
let posicionYdeCuadrado;
let posicionYdeCuadrado2;

function moverHaciaDerecha() {
    let cuadrado = document.getElementById("cuadrado");
    let MargenDerecho = parseInt(margen.charAt(0))+1;
    margen = MargenDerecho + "cm";
    cuadrado.style.marginLeft = margen;
    eliminarElemento();
}
function moverHaciaIzquierda() {
    let cuadrado = document.getElementById("cuadrado");
    let MargenIzquiero = parseInt(margen.charAt(0))-1;
    margen = MargenIzquiero + "cm";
    cuadrado.style.marginLeft = margen;
    eliminarElemento();
}
function moverHaciaDerecha2() {
    let cuadrado = document.getElementById("cuadrado2");
    let MargenDerecho = parseInt(margen2.charAt(0))+1;
    margen2 = MargenDerecho + "cm";
    cuadrado.style.marginLeft = margen2;
    eliminarElemento();
}
function moverHaciaIzquierda2() {
    let cuadrado = document.getElementById("cuadrado2");
    let MargenIzquiero = parseInt(margen2.charAt(0))-1;
    margen2 = MargenIzquiero + "cm";
    cuadrado.style.marginLeft = margen2;

    eliminarElemento();
}
function eliminarElemento(){
    posicionXdeCuadrado = cuadrado.getBoundingClientRect().x;
    posicionYdeCuadrado = cuadrado.getBoundingClientRect().y;
  posicionXdeCuadrado2 = cuadrado2.getBoundingClientRect().x;
    posicionYdeCuadrado2 = cuadrado2.getBoundingClientRect().y;
    if(posicionYdeCuadrado == posicionYdeCuadrado2 && posicionXdeCuadrado == posicionXdeCuadrado2){
        cuadrado2.style.display = "none";
        cuadrado.style.backgroundColor = "rgb(0, 183, 255)";
    }
    else{
    

    }
}