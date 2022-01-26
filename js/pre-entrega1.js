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
let precioTotal;

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
        alert(`Se ha añadido su Skin al carrito ${skins[idProduct].campeon}`);

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

function obtPrecioTotal() {
    let precioTotal= 0;

    for(const product of carrito){
        precioTotal += product.precioTotal;
    }

    return precioTotal;
}

menuCompras();
precioTotal= obtPrecioTotal();

alert(`El precio total de tu compra es de ${precioTotal}RP
        Gracias por utilizar nuestra tienda`);