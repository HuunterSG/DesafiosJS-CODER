/*Creacion de objetos de League of legends, poniendo en propiedades 
su linea principal, su campeon favorito, su division o elo, y su racha
de partidas ganadas. */

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
}

let lolcito1= new lolcito(nickname=prompt("Ingrese su nombre de invocador"), linea=prompt("indique en que linea se desempeña: TOP-MID-JG-ADC-SUPP"),
                        champ=prompt("¿Su campeon favorito para desempeñarse es?"), elo=prompt("Su rango de clasificatorias es: HIERRO-BRONCE-PLATA-ORO"),
                        racha=prompt("¿Cual fue su mayor cantidad de partidas ganadas consecutivamente?"));
lolcito1.descInvocador();