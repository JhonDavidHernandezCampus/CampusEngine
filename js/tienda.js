//script funcionalidad de carrito y tienda
/* funciones contadoras y acumuladoras */
let cantidad =0,cantPapas=0,cantPasteles=0,cantCafes=0,cont = 1 ;
class productos{
    constructor({
        nombre="",
        precio=0,
        cantidad=0
    }){
        this.nombre= nombre,
        this.precio=precio,
        this.cantidad=cantidad
    }
}
let papas = new productos({
    nombre:"Papas",
    precio:2000,
    cantidad:0,

})
let pasteles = new productos({
    nombre:"Pasteles",
    precio:800,
    cantidad:0,
})
let cafe = new productos({
    nombre:"Cafe",
    precio:800,
    cantidad:0,
})


/* control de visivilidad del model */
const div = document.querySelector(".modal");
div.style.display= "none";
function hola(){
    div.style.display = "block";
}
function cerrar(){
    div.style.display="none"
}


/* eventos de los botones */

const contador = document.querySelector("#cont");
const aPapas = document.querySelector("#papas");
const aPasteles= document.querySelector("#pasteles");
const aCafe = document.querySelector("#cafe");  



let btnAgregar=[aPapas,aPasteles,aCafe];

btnAgregar.forEach((boton)=>{
    boton.addEventListener("click", (e)=>{
        e.preventDefault();
        contador.innerHTML=cont;
        zona
        console.log(contador);
        
        console.log(cont);


    });
});
