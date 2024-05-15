//definiciaon de variables
const tasa = document.getElementById("tasa_cambio")
let factor = 36.61
const preciosRef = document.getElementsByClassName("ref")
const preciosBs = document.getElementsByClassName("precio")
const btnSumar = document.querySelectorAll(".sumar")
const btnRestar = document.querySelectorAll(".restar")
const btnAgregarItem = document.querySelectorAll(".agregarcarrito")
const productoselect = document.getElementById("contlista")
const producto =[
    lavaplatos = {
        imagen: "recursos/Imagenes/Lavaplatos.jpg",
        descripcion: "Lavaplatos líquido",
        precioRef:0,
        
    },
    cloro = {
        imagen: 
    }
]


//ejecucion de codigo

DefinirTasaCambio()

calcularPreciosBs()

btnSumar.forEach(adicion => {
    adicion.addEventListener('click',sumarCantidad)
})

btnRestar.forEach(sustraccion =>{
    sustraccion.addEventListener("click",restarCantidad)
})
btnAgregarItem.forEach(cargaProducto =>{
    cargaProducto.addEventListener("click", function(){
        agregarinfoproducto()
        cargarProducto()
    })
})


// definicion de funciones

function DefinirTasaCambio(){
    tasa.innerHTML = factor
}
function calcularPreciosBs(){
    for (var i = 0; i < preciosRef.length; i++) {
        var precio = parseFloat(preciosRef[i].innerText); 
        var precioConvertido = precio * factor; 
        preciosBs[i].innerText = precioConvertido.toFixed(2);
    }  
}
function sumarCantidad(){

    var cantidad = this.parentNode.getElementsByClassName('cantidad')[0];

    if(isNaN(cantidad.value)){
        alert('El valor ingresado no es un número');
        cantidad.value = 0
       return
    }

    if(cantidad.value == ""){
        cantidad.value = 0
    }

    cantidad.value = (parseInt(cantidad.value) + 1)
};
function restarCantidad(){

    var cantidad = this.parentNode.getElementsByClassName('cantidad')[0];

    if(isNaN(cantidad.value)){
        alert('El valor ingresado no es un número');
        cantidad.value = 0
       return
    }

    if(cantidad.value == ""){
        cantidad.value = 0
    }

    cantidad.value = (parseInt(cantidad.value) - 1);

    if(cantidad.value <= 0 ){
        alert("error no se puede procesar cantidades menores a 0")
        cantidad.value = 0.35
    }

}
function cargarProducto(){
    const div = document.createElement("li")
    div.innerHTML =`<div class="imagenpedido"><img src="recursos/Imagenes/limpiador de pocetas.jpeg" alt=""></div><div class="textopedido"><p class="productopedido">${producto.descripcion}</p><p class="cantidadpedido">${producto.cantidad}</p><p class="montoref">${producto.precioRef}</p><p class="montobs">${producto.precioBs}</p></div><div class="eliminaritem"><button id="eliminarproducto"><span class="material-symbols-outlined">delete</span></button></div>`
    productoselect.append(div)
}



