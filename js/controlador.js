//IMPORTANDO MODULOS
import { pintarTienda } from "./llenadoTienda.js";
import { ampliarInformacion } from "./ampliarInfo.js";
import { pintarcarrito } from "./pintarcarrito.js";

//crear un producto vacio
let producto = {};
//Llamando al modulo de pintar
pintarTienda();

//Hacer la variable global:
let modalinfo;
let totalUSD;
let totUSD;
let totalNeto;
//Llamando al modulo ampliar info
let contendorTienda = document.getElementById("fila");
contendorTienda.addEventListener("click", function (event) {
  if (event.target.classList.contains("btn")) {
    modalinfo = new bootstrap.Modal(document.getElementById("modalinfo"));
    //cargar info del producto dentro del modal
    producto = ampliarInformacion(event);
    modalinfo.show();
  }
});

//Detectar la acción de añadir al carrito

//Carrito es un arreglo de productos (arreglo de objetos)
let carrito = [];

let boton = document.getElementById("botonadd");
boton.addEventListener("click", function (event) {
  //1- Capturar la cantidad del producto
  let cantidad = document.getElementById("cantidadProducto").value;

  //2- Agrego la cantidad al objeto producto
  producto.cantidad = cantidad;

  let prodExiste = carrito.find((p) => p.nombre === producto.nombre);
  if (prodExiste) {    
    prodExiste.cantidad = Number(prodExiste.cantidad) + Number(producto.cantidad);

    prodExiste.subtotal = Number(producto.precio.replace("$", "")) * Number(prodExiste.cantidad);
  } else {
    
    
    producto.subtotal= Number(producto.precio.replace("$","")) *  Number(producto.cantidad);


    carrito.push(producto);
  }

  //4-Calculo la sumatoria de cantidad
  let suma = 0;
  let sumaPrecio = 0;
 let usd=0.00024;
  
  carrito.forEach(function (producto) {
    suma = suma + Number(producto.cantidad);
    sumaPrecio = sumaPrecio + Number(producto.subtotal);
    totUSD = sumaPrecio * usd;
  });
   totalNeto = document.getElementById("totalNeto");
  totalNeto.innerHTML = sumaPrecio;
  

  pintarcarrito(suma);
  modalinfo.hide();

});
//convertir a usd
let convertir=document.getElementById("convertir");
convertir.addEventListener("click",function(event){
  totalUSD=document.getElementById("totalUSD");
  totalUSD.innerHTML = totUSD;
  totalNeto.innerHTML=""
})
  //Limpiar carrito
  
  let limpiarcarro = document.getElementById("limpiar");
  limpiarcarro.addEventListener("click", function (event) {
   
    let contenedor = document.getElementById("contenedorventa");
    carrito = [];
    let capsula = document.getElementById("capsula");
    capsula.textContent = 0;
    capsula.classList.add("invisible");
    //borrar contenido html de una sección
    contenedor.innerHTML = "";
    totalNeto.innerHTML = "";   
    totalUSD.innerHTML ="";
    
  });



//ver resumen de venta
let botoncarrito = document.getElementById("botoncarrito");
botoncarrito.addEventListener("click", function (event) {
  //tarea volver esto una función
  let contenedor = document.getElementById("contenedorventa");
  contenedor.innerHTML = "";
  /**************** MODAL CARRITO *****************/
  let modalVenta = new bootstrap.Modal(
    document.getElementById("resumencarrito")
  );

  if (carrito.length == 0) {
    
    
    modalVenta = new bootstrap.Modal(document.getElementById("carritoVacio"));
  }

  /*let modalVacio = new boostrap.Modal(
  document.getElementById("carritoVacio")
);*/


  //Recorrer el carrito para pintar los productos en la factura

  carrito.forEach(function (producto) {    
    //TRAVERSING
    let fila = document.createElement("div");
    fila.classList.add("row");

    let columna1 = document.createElement("div");
    columna1.classList.add("col-12", "col-md-4");

    let columna2 = document.createElement("div");
    columna2.classList.add("col-12", "col-md-8");

    let foto = document.createElement("img");
    foto.classList.add("img-fluid", "w-100");
    foto.src = producto.foto;

    //creo el nombre
    let nombre = document.createElement("p");
    nombre.innerHTML = producto.nombre;
    nombre.classList.add("text-center");

    //creo precio
    let precio = document.createElement("h3");
    precio.innerHTML = producto.precio;
    precio.classList.add("tarjeta__precio", "mt-2", "mb-4");

    //subtotal
    let subtotal = document.createElement("p");
    subtotal.innerHTML = "Subtotal: $"+producto.subtotal;
    subtotal.classList.add("tarjeta__subtotal");
    //dectectar si el carrito esta vacio
  
    
    //Creo la cantidad 
    let cantidad =document.createElement("p");
    cantidad.innerHTML="Cantidad: "+producto.cantidad;
    cantidad.classList.add("tarjeta__cantidad");

    //PADRE HE HIJOS

    columna1.appendChild(foto);
    columna2.appendChild(nombre);
    columna2.appendChild(precio);    
    columna2.appendChild(cantidad);
    columna2.appendChild(subtotal);
    fila.appendChild(columna1);
    fila.appendChild(columna2);
    contenedor.appendChild(fila);
  });
  modalVenta.show();
});
