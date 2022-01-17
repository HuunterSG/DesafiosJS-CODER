do {
        var horas = prompt('Ingresa el numero de horas de estudio');
    if(Number(horas)== horas){
        if(horas > 0 && horas <= 10){
            if(horas< 1){
                alert('Estas estudiando poco metele')
            }else if(horas<2){
                alert('Dale rey podes hacerlo mejor')
            }else if(horas<3){
                alert('Tus horas de estudio son las indicadas')
            }else if(horas<4){
                alert('Le estas metiendo te va a ir bien')
            }else if(horas<5){
                alert('Segui asi que la vas a romper')
            }else if(horas<6){
                alert('Le estas metiendo bastante no te olvides de tomar un descanso')
            }else if(horas<7){
                alert('Te estas sobre pasando minimo un descanso de 40min entre medio')
            }else if(horas<8){
                alert('Es estudio o lo tomas como trabajo animal')
            }else if(horas<= 10){
                alert('Estas ido bro')
            }
        }else {
            alert('Por favor ingresa una cantidad de horas del 1 al 10')
        }
    }else {
        alert('Dale brooo te pedi un numero de horas no pongas otra cosa')
    }
} while (horas != undefined){
}