const formulario = document.getElementById("form");


const usersArray = [];
let sub=document.getElementById("subs");

class users{
    constructor(users){
        this.id = usersArray.length;
        this.usuario= users.usuario;
        this.password = users.password;
    }
};

formulario.addEventListener("submit", function(){
    
    let user = document.getElementById("user").value
    console.log(user)
    let mensaje = document.createElement("div");
    mensaje.innerHTML = ` <br> gracias por iniciar sesion: ${user}`;

    sub.appendChild(mensaje);  
})

formulario.onsubmit = (e) =>{
    e.preventDefault()
    let inputs = e.target.children;
    usersArray.push(new users({user: inputs .value}))
    console.log(usersArray) //consola dentro de la funcion
};