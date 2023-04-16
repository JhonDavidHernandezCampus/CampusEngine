//database
let datos=[
    {
        nombre:"Hunters",
        detalles: "Espacio destinado al descanso y recreacion de nuestros campers y coworkers.",
        disponibilidad:"sujeto a horario"
    },
    {
        nombre:"Cafeteria Hunters",
        detalles: "Cubiculo ubicado en el espacio de hunters pensado para ofreser servicios de cafeteria.",
        disponibilidad:"sujeto a horario"
    },
    {
        nombre:"8vo Piso",
        detalles: "Una zona ubicada en el 8vo piso que cuenta con multiples servisios de cafeteria.",
        disponibilidad:"sujeto a horario"
    },
    {
        nombre:"Baños",
        detalles: "Espacio dedicado al haceo y cuidado de los campers y coworkers.",
        disponibilidad:"Uso libre"
    }

]
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
let id = 0;

obj = new zona({
    nombre:datos[0].nombre,
    detalles:datos[0].detalles,
    disponibilidad:datos[0].disponibilidad
});

/* creamos 4 objetos de la clase zona con los datos de nuestro array */
let zonas = datos.map(e => new zona ({
    nombre:e.nombre,
    detalles:e.detalles,
    disponibilidad: e.disponibilidad
}))
/* traeosmlos datos del formulario */
const contenedorTargetas = document.querySelector("#contenedor-tarjetas")
const modal = document.querySelector(".modal");
const btn = document.getElementsByName("btn");
const modal_contenido = document.querySelector("#modal-contenido");
/* creamos la funcion que me inserta los datos segun la caja */
function insertar(){
    contenedorTargetas.addEventListener("click",(e)=>{
        if(e.target.name ==='btn'){
            id= parseInt(e.target.id);
            console.log(id);
        }
    
    console.log(id);
    modal_contenido.innerHTML=`<table>
    <caption><h1>Servicios</h1></caption>
    <thead>
        <tr>
            <th>Nombre</th>
            <th>Detalles</th>
            <th>Disponibilidad</th>
        </tr>
    </thead>
    <tbody>
        <th>${zonas[id].nombre}</th>
        <th>${zonas[id].detalles}</th>
        <th>${zonas[id].disponibilidad}</th>
    </tbody>
    </table>
    <button class="close" >Cerrar</button>`;
    })
}
insertar();
/* estos eventos son los que controlan si el model esta visible o oculto */
console.log(id,"despues");
/* Este evento me mantiene el modal oculto */
modal.addEventListener("click", function(){
    modal.style.display = "none"
})

/* y este me muestra cuando aprima un boton */
btn.forEach(boton => {
    //console.log(btn);
    boton.addEventListener('click', () => {
        modal.style.display= "block";
    })
});

