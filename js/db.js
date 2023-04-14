//database
let datos=[
    {
        nombre:"Hunters",
        detalles: "Espacio destinado al descanso y recreacion de nuestros campers y coworkers.",
        disponibilidad:"sujeto a horario"
    }

]






const btnHunyters = document.querySelector("#hunters");
const btncafeteria = document.querySelector("#cafeteria");

const comida = document.querySelector("#comida");

class zona{
    constructor({
        nombre="",
        detalles="",
        disponibilidad ="",
    }){
        this.nombre= nombre,
        this.detalles= detalles,
        this.disponibilidad= disponibilidad
    }

}
let obj = undefined; 

console.log(datos[0].nombre);
obj = new zona({
    nombre:datos[0].nombre,
    detalles:datos[0].detalles,
    disponibilidad:datos[0].disponibilidad
});


btnHunyters.addEventListener("click", function(){
    console.log(zona);
})

btncafeteria.addEventListener("click", function(){
    console.log(zona);
})