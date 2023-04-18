//script funcionalidad de carrito y tienda
let cantidad =0,cantPapas=0,cantPasteles=0,cantCafes=0,cont = 1 ;
/* abase de datos */
datos =[
    {
        imagen:"../images/papasmargarita.jpg",
        titulo:"Papas",
        precio:"2000",
    },
    {
        imagen:"../images/Pastel-de-Pollo7.jpg",
        titulo:"Pasteles",
        precio:"2300",
    },
    {   
        imagen:"../images/Color-del-cafe-filtrado-y-su-parecido-con-el-color-de-un-vino-tinto.-scaled.jpg",
        titulo:"Cafe",
        precio:"800",
    },


]
datosAgregar = [
    {
        imagen:"../images/papasmargarita.jpg",
        titulo:"Papas",
        cantidad:cantPapas,
    },    
    {
        imagen:"../images/Pastel-de-Pollo7.jpg",
        titulo:"Pasteles",
        cantidad:cantPasteles,
    },   
    {
        imagen:"../images/Color-del-cafe-filtrado-y-su-parecido-con-el-color-de-un-vino-tinto.-scaled.jpg",
        titulo:"Cafe",
        cantidad:cantCafes,
    },
]

/* agregar los elementos a html */

const product = document.querySelector(".products");
datos.map((e)=>{
    product.insertAdjacentHTML("beforeend", `
    <div class="carts">
        <img src="${e.imagen}" alt="">
        <h3>${e.titulo}</h3>
        <p class="precioPapas">${e.precio}<d>$</d></p>
        <a href="" id="${e.titulo}">AÑADIR AL CARRITO</a>
    </div>
    `)

})


/* funciones contadoras y acumuladoras */
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
const modal = document.querySelector("#modal-contenido");

console.log(modal);
console.log();



const contador = document.querySelector("#cont");
const aPapas = document.querySelector("#Papas");
const aPasteles= document.querySelector("#Pasteles");
const aCafe = document.querySelector("#Cafe");  



let btnAgregar=[aPapas,aPasteles,aCafe];

btnAgregar.forEach((boton)=>{
    boton.addEventListener("click", (e)=>{
        e.preventDefault();
        //(modal.querySelector(`${boton.id}`))?console.log("esta"):console.log("no esta");
        modal.insertAdjacentHTML("beforeend", `
        <div id="${boton.cafe}">
            <div id="elemento">
                <img src="../images/papasmargarita.jpg" alt="">
                <h3>Papas</h3>
                <p class="precioPapas">2000 <d>$</d></p>
                <span>cantidad: 0</span>
                <button id="restar">X</button>
            </div>
        </div>
        <hr>`);

        console.log(boton.id)
        contador.innerHTML=cont;
        console.log(contador);
        console.log(cont);
    });
});

