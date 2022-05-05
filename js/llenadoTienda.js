export function pintarTienda() {
  //Arreglo de objetos
  let productos = [
    {
      foto: "img/tienda1.webp",
      nombre: "Fluidbase Retinol + Vit C",
      marca: "Genové",
      precio: 70000,
      descripcion:
        "Antiedad e hidratante que incrementa la elasticidad de la piel y el espesor de la epidermis; reduce la profundidad de arrugas finas y líneas de expresión. mezcla perfecta de vitamina a y c.",
      cantidad: 0,
      subtotal: 0,
    },
    {
      foto: "img/tienda2.webp",
      nombre: "Effaclar Sérum Ultra Concentrado",
      marca: "La Roche Posay",
      precio: 143000,
      descripcion:
        "Tratamiento concentrado que combina un Complejo triácido exfoliante (Ácido glicólico + Ácido Salicílico + LHA) con Niacinamida, para tratar imperfecciones, marcas, poros visibles y puntos negros. Una fórmula que purifica la piel, alisa la textura y reduce finas líneas.",
      cantidad: 0,
      subtotal: 0,
    },
    {
      foto: "img/tienda3.webp",
      nombre: "Hydraskin Face Hidratante",
      marca: "Pharmaderm",
      precio: 96000,
      descripcion:
        "Hidratante Facial con liposomas, textura ligera que no aporta grasa ni brillo a la piel.",
      cantidad: 0,
      subtotal: 0,
    },
    {
      foto: "img/tienda4.webp",
      nombre: "Pure Vitamin C10",
      precio: 195000,
      marca: "La Roche Posay",
      descripcion:
        "Suero antioxidante formulado con un 10% de vitamina C pura para iluminar y reafirmar la piel. Contiene ácido salicílico que incrementa la penetración de vitamina C para una mayor eficacia y neurosensina calmante. Todo ello formulado a un pH fisiológico, que lo hace apto incluso para una piel sensible.",
      cantidad: 0,
      subtotal: 0,
    },
    {
      foto: "img/tienda5.webp",
      nombre: "Sesvitamin C Serum Liposomal",
      marca: "Sesderma",
      precio: 188000,
      descripcion:
        "Tratamiento intensivo de choque del fotoenvejecimiento cutáneo. Recomendado en todo tipo de pieles (incluyendo pieles con acné y rosácea). Concentrado de activos para potenciar los beneficios de los tratamientos antienvejecimiento y despigmentantes.",
      cantidad: 0,
      subtotal: 0,
    },
    {
      foto: "img/tienda6.webp",
      nombre: "Pigmentbio Foaming Cream",
      marca: "Bioderma",
      precio: 109000,
      descripcion:
        "Limpiador hidratante iluminador que promueve la desaparición de las manchas oscuras y evita que vuelvan aparecer. Textura de espuma cremosa. Sin jabón - Puede usarse como mascarilla.",
      cantidad: 0,
      subtotal: 0,
    },
    ,
    {
      foto: "img/tienda7.webp",
      nombre: " Effaclar Agua Micelar Ultra",
      marca: "La Roche Posay",
      precio: 87000,
      descripcion:
        "Agua micelar para pieles grasas. Calma y suaviza mientras limpia y desmaquilla la piel, sin causar irritación ocular. Especialmente formulada con Zinc que contribuye a regular la producción de sebo. Probado en pieles con tendencia acneica.",
      cantidad: 0,
      subtotal: 0,
    },
    {
      foto: "img/tienda8.webp",
      nombre: "Hidraderm Leche Limpiadora",
      marca: "Sesderma",
      precio: 90000,
      descripcion:
        "Desmaquillante facial de uso diario. Limpia, suaviza y calma con excelente tolerancia. Todo tipo de piel, especialmente sensibles. Loción sustitutiva del agua y del jabón, que limpia e hidrata las pieles sensibles.",
      cantidad: 0,
      subtotal: 0,
    },
    {
      foto: "img/tienda9.webp",
      nombre: "Loción para Pieles Intolerantes",
      marca: "Avène",
      precio: 105000,
      descripcion:
        "La Loción para pieles intolerantes (LPI) está particularmente indicada para la limpieza suave de las pieles que se han vuelto irritables luego de agresiones diversas (tratamientos dermatológicos o cosméticos irritantes, limpiadores agresivos).",
      cantidad: 0,
      subtotal: 0,
    },
    {
      foto: "img/tienda10.webp",
      nombre: "Anti-Pigment Dual Serum",
      marca: "Eucerin",
      precio: 181000,
      descripcion:
        "Eucerin Anti-Pigment Dual Serum reúne dos sueros que funcionan de diferentes maneras: -Thiamidol: un ingrediente efectivo y patentado que actúa en la causa de la hiperpigmentación está clínicamente probado que reduce la hiperpigmentación, previniendo su reaparición con el uso regular. -Ácido hialurónico concentrado: una de las sustancias hidratantes más efectivas de la piel ayuda a la piel a atraer y retener la humedad. La emulsión ligera está clínicamente y dermatológicamente probada para reducir las manchas oscuras y prevenir su reaparición al mismo tiempo que renueva el aspecto de la piel. Los primeros resultados son visibles después de dos semanas y mejoran continuamente con el uso regular. La piel es suave y luce renovada, uniforme y radiante.",
      cantidad: 0,
      subtotal: 0,
    },
  ];

  //Creo la referencia al componente padre
  //Creo una variable para almacenar la base sobre la cual voy a pintar
  let fila = document.getElementById("fila");

  //Recorrer array
  //forEach
  productos.forEach(function (producto) {
    /*console.log(producto.nombre)
    console.log(producto.precio)
    console.log(producto.foto)*/

    //Receta para pintar con js

    //1. Comience a crear la extructura que necesita

    //creo la columna
    let columna = document.createElement("div");
    columna.classList.add("col");
    columna.classList.add("tarjeta__column");

    //creo la tarjeta
    let tarjeta = document.createElement("div");
    tarjeta.classList.add("card");
    tarjeta.classList.add("h-100");

    //creo la imagen
    let foto = document.createElement("img");
    foto.src = producto.foto;

    //creo el nombre
    let nombre = document.createElement("p");
    nombre.innerHTML = producto.nombre;
    nombre.classList.add("tarjeta__nombre");

    //creo la marca
    let marca = document.createElement("p");
    marca.innerHTML = producto.marca;
    marca.classList.add("tarjeta__marca");

    //creo precio
    let precio = document.createElement("h3");
    precio.innerHTML = "$ " + producto.precio;
    precio.classList.add("tarjeta__precio", "mt-2", "mb-4");

    //creat descripción
    let descripcion = document.createElement("h6");
    descripcion.id = "descripcion";
    descripcion.innerHTML = producto.descripcion;
    descripcion.classList.add("text-center");
    descripcion.hidden = true;

    //crear boton
    let boton = document.createElement("button");
    boton.setAttribute("type", "button");
    boton.classList.add("btn", "btn-warning", "mx-4", "mb-5", "fs-5");
    boton.textContent = "ver producto";

    //2. Ordenar la estructura
    //Padres e hijos

    tarjeta.appendChild(foto);
    tarjeta.appendChild(nombre);
    tarjeta.appendChild(marca);
    tarjeta.appendChild(precio);
    tarjeta.appendChild(descripcion);
    tarjeta.appendChild(boton);
    columna.appendChild(tarjeta);
    fila.appendChild(columna);
  });

  //footer
  /*let footer=document.getElementById("footer")
    footer.style.backgroundColor= 'black';*/
}
