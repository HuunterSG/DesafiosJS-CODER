// Calculo de cuotas, segun el precio estipulado por el usuario
// en 3, 6, 12, ahora 18 y ahora 24
// 3 cuotas = 5% interes
// 6 cuotas = 10% interes
// 12 cuotas = 35% interes
// 18 cuotas = 45% interes
// 24 cuotas = 65% interes

// pedir entrada con el valor del producto del cliente, preguntar si
//desea pagar en efectivo o con tarjeta, si elige tarjeta, consultar
// la cantidad de cuotas que desea pagar, dependiendo de su eleccion
// calcular todo.

let valor = Number(prompt("ingrese el valor si es tan amable"));
let metodopago = prompt("con que metodo de pago desea abonar tarjeta o efectivo");

function sumaValor(valor){
    if(metodopago == "efectivo"){
        valor= valor * 0.90;
        alert("usted debe abonar " + valor);
    }else if(metodopago == "tarjeta"){
        cuotas = Number(prompt("ingrese en cuantas cuotas desea abonar 3 - 6 - 12 - 18 - 24"));
        if (cuotas == "3"){
            valor= valor *1.05;
            alert("usted debe abonar " + valor);
        }else if (cuotas == "6"){
            valor = valor * 1.10;
            alert("usted debe abonar " + valor);
        }else if (cuotas == "12"){
            valor = valor * 1.35;
            alert("usted debe abonar " + valor);
        }else if (cuotas == "18"){
            valor = valor * 1.45;
            alert("usted debe abonar " + valor);
        }else if (cuotas == "24"){
            valor = valor * 1.65;
            alert("usted debe abonar " + valor);            
        }else{
        alert("no ha ingresado corractamente las cuotas")
        }
    }else{
        alert("ingreso erroneo del metodo de pago")
    }
    valor = valor.toFixed(2);
    return valor;
}

document.write("usted abono $" + sumaValor(valor) + " gracias por utilizar nuestro servicio.");
