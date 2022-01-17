let presupuesto = Number(prompt("ingresa su dinero para vacacionar: "));

let presup1 = "5000";
let presup2 = "10000";
let presup3 = "25000";
let presup4 = "45000";

if (presupuesto <= presup1){
    alert("Usted es muy pobre no se va de vacaciones")
}else if (presupuesto <= presup2){
    alert("Usted puede tener unas vacaciones tranqui")
}else if (presupuesto <= presup3){
    alert("Usted va a tener unas lindas vacaciones")
} else if (presupuesto <= presup4){
    alert("Usted va a tener altas vacaciones rey")
}else {
    alert("Usted esta sobrado desela en la pera 24/7")
}
