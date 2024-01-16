//Algoritmo que muestra el resultado A**B
//Base
let a=2;
//Exponente
let b=5;

let c=0, resultado=1;

while (c<b) {
    resultado*=a;
    c++;
}
console.log("el resultado es: ",resultado);
