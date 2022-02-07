//Idea: tienda de SKINS league of legends

class skin {
    constructor(skin) {
        this.id = skin.id;
        this.campeon = skin.campeon;
        this.precio = skin.precio;
        this.cantidad = 1;
        this.precioTotal= skin.precio;
    }
    agregarUnidad(){
        this.cantidad++;
    }
    quitarUnidad(){
        this.cantidad--;
    }
    actualizarPrecioTotal(){
        this.precioTotal= this.precio * this.cantidad;
    }
}

const skins = [
    {
        id:0,
        campeon:"Nautilus",
        descripcion: "Pergaminos Shan Hai",
        precio: 1350,
    },
    {
        id:1,
        campeon:"Nautilus",
        descripcion: "Rompemundos",
        precio: 750,
    },
    {   id:2,
        campeon:"Nautilus",
        descripcion: "Astronautilus",
        precio: 1350,
    },
    {
        id:3,
        campeon:"Leona",
        descripcion: "Reinos mecha",
        precio: 1350,
    },
    {   
        id:4,
        campeon:"Leona",
        descripcion: "Proyecto",
        precio: 1350,
    },
    {
        id:5,
        campeon:"Leona",
        descripcion: "Eclipse Lunar",
        precio: 1350,
    },
    {
        id:6,
        campeon:"Ahri",
        descripcion: "BosqueViejo",
        precio: 1350,
    },
];

let carrito=[];
let carritoEnHtml=document.getElementById("carrito");
let precioTotal;

function imprSkinsHtml(skins) {
    let contenedor= document.getElementById("contenedor");
    for (const skin of skins) {
        let card = document.createElement("div");
        card.innerHTML = `
        <div class="card text-center" style="width: 18rem;">
            <div class="card-body">
                <h2 class="card-title">${skin.campeon}</h2>
                <h5 class="card-subtitle mb-2 text-muted">${skin.descripcion}</h5>
                <p class="card-text">$${skin.precio}</p>
                <div class="btn-group" role="group" aria-label="Basic mixed styles example">
                    <button id="agregar${skin.id}" type="button" class="btn btn-dark"> Agregar </button>
                </div>
            </div>
        </div>     
        `;
        contenedor.appendChild(card);
    }
}
function menuCompras() {
    let idProduct = prompt(`
        Escriba el N° del producto, o escriba "EXIT" para finalizar la compra
        0: ${skins[0].campeon}, Precio: ${skins[0].precio}RP
        1: ${skins[1].campeon}, Precio: ${skins[1].precio}RP
        2: ${skins[2].campeon}, Precio: ${skins[2].precio}RP
        3: ${skins[3].campeon}, Precio: ${skins[3].precio}RP
        4: ${skins[4].campeon}, Precio: ${skins[4].precio}RP
        5: ${skins[5].campeon}, Precio: ${skins[5].precio}RP
        6: ${skins[6].campeon}, Precio: ${skins[6].precio}RP`);
    
    while( idProduct !== "EXIT" && idProduct !== "Exit" && idProduct !== "exit"){
        let mensaje = document.createElement("div");
        mensaje.textContent = `\nSe ha añadido al carrito la skin de ${skins[idProduct].campeon}, ${skins[idProduct].descripcion}`;
        carritoEnHtml.appendChild(mensaje)

        let skinCarrito = carrito.find((elemento)=> {
            if (elemento.id == idProduct) {
                return true;
            }
        });
    
    if (skinCarrito) {
        let indice = carrito.findIndex((elemento)=> {
            if (elemento.id === skinCarrito.id){
                return true;
            }
        });
        carrito[indice].agregarUnidad();
        carrito[indice].actualizarPrecioTotal();
    }else {
        carrito.push(new skin(skins[idProduct]));
    }

    idProduct = prompt(`
        Escriba el N° del producto, o escriba "EXIT" para finalizar la compra
        0: ${skins[0].campeon}, Precio: ${skins[0].precio}RP
        1: ${skins[1].campeon}, Precio: ${skins[1].precio}RP
        2: ${skins[2].campeon}, Precio: ${skins[2].precio}RP
        3: ${skins[3].campeon}, Precio: ${skins[3].precio}RP
        4: ${skins[4].campeon}, Precio: ${skins[4].precio}RP
        5: ${skins[5].campeon}, Precio: ${skins[5].precio}RP
        6: ${skins[6].campeon}, Precio: ${skins[6].precio}RP`);
}
}

// function obtPrecioTotal() {
//     let precioTotal= 0;

//     for(const product of carrito){
//         precioTotal =precioTotal + product.precioTotal;
//     }

//     return precioTotal;
// }


// function imprPrecioTotal(precioTotal){
//     let mensaje = document.createElement("div");
//     mensaje.innerHTML = `\n El precio total de tu compra es de ${precioTotal}`
//     carritoEnHtml.appendChild(mensaje);
// }

// imprPrecioTotal();
imprSkinsHtml(skins);
menuCompras();
