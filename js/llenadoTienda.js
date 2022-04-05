export function pintarTienda(){
    //Arreglo de objetos
    let productos=[
        {foto:'img/tienda1.webp',nombre:"Fluidbase Retinol + Vit C",marca:"Genové",precio:70000, descripcion:"YEOU Sudadera con capucha de anime japonés"},
        {foto:'img/tienda2.webp',nombre:"Effaclar Sérum Ultra Concentrado",marca:"La Roche Posay", precio:143000, descripcion:"Juego de regalo de bolsa de anime que incluye mochila  con cordón, calcomanías, cordón, máscaras, llavero, collar, tarjetas de Lomo, pulseras, soporte para anillo de teléfono, pasadores de botón"},
        {foto:'img/tienda3.webp',nombre:"Hydraskin Face Hidratante",marca:"Pharmaderm", precio:96000, descripcion:"Lanrena - Mochila de anime para estudiantes, impermeable, para viajes, adolescentes, portátil, Style A, L"},
        {foto:'img/tienda4.webp',nombre:"Pure Vitamin C10", precio:195000,marca:"La Roche Posay", descripcion:""},
        {foto:'img/tienda5.webp',nombre:"Sesvitamin C Serum Liposomal", marca:"Sesderma", precio:188000, descripcion:""},
        {foto:'img/tienda6.webp',nombre:"Pigmentbio Foaming Cream", marca:"Bioderma", precio:109000, descripcion:""},,
        {foto:'img/tienda7.webp',nombre:" Effaclar Agua Micelar Ultra", marca:"La Roche Posay", precio:87000, descripcion:""},
        {foto:'img/tienda8.webp',nombre:"Hidraderm Leche Limpiadora", marca:"Sesderma", precio:90000, descripcion:""},
        {foto:'img/tienda9.webp',nombre:"Loción para Pieles Intolerantes", marca:"Avène", precio:105000, descripcion:""},
        {foto:'img/tienda10.webp',nombre:"Anti-Pigment Dual Serum", marca:"Eucerin", precio:181000, descripcion:""},
    
    ]
    
    //Creo la referencia al componente padre
    //Creo una variable para almacenar la base sobre la cual voy a pintar
    let fila=document.getElementById("fila")
    
    //Recorrer array
    //forEach
    productos.forEach(function(producto){
    /*console.log(producto.nombre)
    console.log(producto.precio)
    console.log(producto.foto)*/
    
    //Receta para pintar con js 
    
    //1. Comience a crear la extructura que necesita
    
    //creo la columna
    let columna=document.createElement("div")
    columna.classList.add("col")
    columna.classList.add("mb-5")
    columna.classList.add("mt-5")
    
    //creo la tarjeta
    let tarjeta=document.createElement("div")
    tarjeta.classList.add("card")
    tarjeta.classList.add("h-100")
    
    
    //creo la imagen
    let foto=document.createElement("img")
    foto.classList.add("card-img-top")
    foto.src=producto.foto
    
    //creo la marca
    let marca=document.createElement("p")
    marca.innerHTML= producto.marca
    marca.classList.add("align-self-center")
    
    
    //creo el nombre
    let nombre=document.createElement("p")
    nombre.innerHTML= producto.nombre
    nombre.classList.add("align-self-center")
    
    
    //creo precio
    let precio=document.createElement("h3")
    precio.innerHTML="$ "+ producto.precio
    precio.classList.add("titulo","mt-2","mb-4")
    
    //creat descripción
    let descripcion=document.createElement("h6")
    descripcion.id = "descripcion"
    descripcion.innerHTML=producto.descripcion
    descripcion.classList.add("text-center")
    descripcion.hidden=true
    
    //hadicionar popap cuando de clic en un boton con js
     //crear boton
    let boton=document.createElement("button")
    boton.setAttribute("type","button")
    boton.classList.add("btn","btn-warning","mx-4","mb-5")
    boton.textContent="ver producto"
    
    
    //2. Ordenar la estructura
    //Padres e hijos
    
    tarjeta.appendChild(foto)
    tarjeta.appendChild(nombre)
    tarjeta.appendChild(marca)
    tarjeta.appendChild(precio)
    tarjeta.appendChild(descripcion)
    tarjeta.appendChild(boton)
    columna.appendChild (tarjeta)
    fila.appendChild(columna)
    
    
    })
    
    //footer
    /*let footer=document.getElementById("footer")
    footer.style.backgroundColor= 'black';*/
    }