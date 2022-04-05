//IMPORTANDO MODULOS
import { pintarTienda } from "./llenadoTienda.js"
import {ampliarInformacion} from "./ampliarInfo.js"
import { pintarcarrito } from "./pintarcarrito.js"

//crear un producto vacio
let producto={}
//Llamando al modulo de pintar
pintarTienda()

//Llamando al modulo ampliar info

let contendorTienda= document.getElementById("fila")
contendorTienda.addEventListener("click", function(event){
   if(event.target.classList.contains("btn")){
    let modalinfo = new bootstrap.Modal(document.getElementById('modalinfo'))   
    //cargar info del producto dentro del modal
    producto= ampliarInformacion(event)
    modalinfo.show()
   }     
   
})

//Detectar la acción de añadir al carrito

//Carrito es un arreglo de productos (arreglo de objetos)
let carrito=[]

let boton = document.getElementById("botonadd")
boton.addEventListener('click',function(event){
    

//1- Capturar la cantidad del producto
    let cantidad=document.getElementById("cantidadProducto").value


//2- Agrego la cantidad al objeto producto
producto.cantidad=cantidad


//3-Agregar producto al carrito
carrito.push(producto)


//4-Calculo la sumatoria de cantidad
let suma=0
carrito.forEach(function(producto){
suma=suma+Number(producto.cantidad)

})
pintarcarrito(suma)

})

//Limpiar carrito
let limpiarcarro = document.getElementById("limpiar")
limpiarcarro.addEventListener("click",function(event){
    carrito=[]
    let capsula=document.getElementById("capsula")
    capsula.textContent=0
    capsula.classList.add("invisible")
})

//ver resumen de venta 
let botoncarrito=document.getElementById("botoncarrito")
botoncarrito.addEventListener("click",function(event){

//tarea volver esto una función
let contenedor=document.getElementById("contenedorventa")   

let modalVenta = new bootstrap.Modal(document.getElementById('resumencarrito'))

//borrar contenido html de una sección
contenedor.innerHTML=""
//Recorrer el carrito para pintar los productos en la factura
carrito.forEach(function(producto){

//TRAVERSING
let fila=document.createElement("div")
fila.classList.add("row")

let columna1=document.createElement("div")
columna1.classList.add("col-12","col-md-4")

let columna2=document.createElement("div")
columna2.classList.add("col-12","col-md-8")

let foto=document.createElement("img")
foto.classList.add("img-fluid","w-100")
foto.src=producto.foto


//creo el nombre
let nombre=document.createElement("p")
nombre.innerHTML= producto.nombre
nombre.classList.add("text-center")

 //creo precio
 let precio=document.createElement("h3")
 precio.innerHTML= producto.precio
 precio.classList.add("titulo","mt-2","mb-4")

//PADRES E HIJOS
columna1.appendChild(foto)
columna2.appendChild(nombre)
columna2.appendChild(precio)
fila.appendChild(columna1)
fila.appendChild(columna2)
contenedor.appendChild(fila)
})
modalVenta.show()
})