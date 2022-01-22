//utilizamos clase constructura del desafio pasado, para la creacion del mismo estilo de objetos, solo que esta vez
//incluimos Arrays.

class lolcito{
    constructor(nickname,linea,champ,elo,racha){
        this.nickname= nickname;
        this.linea= linea.toLowerCase();
        this.champ= champ.toLowerCase();
        this.elo= elo.toLowerCase();
        this.racha= racha;
    }
    descInvocador(){
        alert("El invocador "+(this.nickname)+" suele jugar en la linea "+(this.linea)+
                " con su campeon favorito "+(this.champ)+". Se encuentra en el rango "+(this.elo)+
                " con una racha de "+(this.racha)+" partidas ganadas. Gracias por usar nuestros servicios :)" )
    }

    descElo(){
        return this.elo;
    }
}

// se comentan las siguientes lineas debido a que son del desafio anterior y quedan para usar de referencia.
// let lolcito1= new lolcito(nickname=prompt("Ingrese su nombre de invocador"), linea=prompt("indique en que linea se desempeña: TOP-MID-JG-ADC-SUPP"),
//                         champ=prompt("¿Su campeon favorito para desempeñarse es?"), elo=prompt("Su rango de clasificatorias es: HIERRO-BRONCE-PLATA-ORO"),
//                         racha=prompt("¿Cual fue su mayor cantidad de partidas ganadas consecutivamente?"));
// lolcito1.descInvocador();

//creacion de nuestro primer array.

var lolArray = [];
do {
    var validacion = prompt("ingrese el nombre de invocador, o escriba finalizar para terminar con el ciclo");
    if (validacion === "finalizar" || validacion === "Finalizar" || validacion === "FINALIZAR") {
        break;
    }else {
        //Utilizamos la "N" en las variables para destacar que son lo Nuevo a agregar en nuestro constructor
        nicknameN = validacion;
        var lineaN = prompt("ingrese la linea en la que se desempeña: SUPP-TOP-JG-ADC-MID");
        var champN = prompt("ingrese su campeon de uso diario en el juego");
        var eloN = prompt("ingrese u rango de clasificatorias es: HIERRO-BRONCE-PLATA-ORO");
        var rachaN = prompt("ingrese su mayor racha de victorias consecutivas");
        lolArray.push(new lolcito(nicknameN,lineaN,champN,eloN,rachaN));
    }
}
while (validacion !="finalizar" || validacion != "Finalizar" || validacion != "FINALIZAR");

console.log(lolArray);

for(var lol of lolArray) {
    document.write("<h3> su nombre de invocador es: " + lol.nickname + "</h3>");
    document.write("<h3> usted se desempeña en la linea: " + lol.linea + "</h3>");
    document.write("<h3> su campeon favorito es: "+ lol.champ + "</h3>");
    document.write("<h3> su liga es: "+ lol.elo + "</h3>");
    document.write("<h3> su racha de victorias consecutiva es: "+ lol.racha + "</h3>");
    
    console.log(lol.nickname);
    console.log(lol.linea);
    console.log(lol.champ);
    console.log(lol.elo);
    console.log(lol.racha);
    console.log("su liga actual: "+ lol.descElo());
}