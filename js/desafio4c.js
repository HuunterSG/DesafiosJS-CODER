//desafio complementario, crear 3 funciones y hacer que se relacionen entre si
//pedir valor dolarizado de X producto, este sera pesificado aproximadamente
//al valor oficial de cotizacion, luego tendra la suma de su porcentaje de impuestos
// y finalizara con la entrega del valor en pesos!
const multiplicar = (a,b)=> a * b;
const suma = (a,b) => a + b;


let ValorUs = Number(prompt("ingrese su valor en dolares por favor"));
let DolarOf = 108;
let iva = 1.21;
let DolarImp = 0.44;

let valorPeso = multiplicar(multiplicar(ValorUs,DolarOf),suma(iva,DolarImp));
valorPeso = valorPeso.toFixed(2);
alert("el precio en pesos de su valor es de: $"+ valorPeso);