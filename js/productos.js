// CONSTANTES Y VARIABLES
const IVA = 1.21
const containerProductos = document.querySelector(".productos")
const containerCompras = document.querySelector(".carrito")
const valorTotal = document.querySelector(".total")
const btnBuscar = document.querySelector(".search")
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
const mail = () =>{
  Swal.fire({
      title: 'Subscribite al newsletter y no te pierdas nunca ninguna de nuestras ofertas!!',
      input: 'email',
      inputPlaceholder: 'Enter your email address',
      width: '40em',
      color: '#716add',
      background: '#fff',
      backdrop: 'rgba(0,0,123,0.4)',
      confirmButtonColor:'#adff2f'
    });
  }


// ARRAY DE PRODUCTOS
const productosCONstock = [
  {
    id: 11,
    nombre: "BIG ONE (Fertilizante para floración)",
    descripcion: "Big One de Top Crop es un estimulador de la floración formulado a base de extracto de alga del género Ascophyllum nodosum. Fuente natural de citoquininas y otros reguladores de crecimiento con gran actividad biológica. Gracias a su elevada concentración (23% de alga), Big One resulta resulta increíblemente efectivo aumentando el volumen de las flores hasta un 40% e incrementando la producción de resinas y aceites esenciales en más de un 30%. Dada su elevada concentración es preferible no incrementar las dosis recomendadas.",
    imagen: "./img/producto_2.jpg",
    precio: 1500,
  },
  {
    id: 12,
    nombre: "DEEPER UNDERGROUND (Fertilizante para crecimiento)",
    descripcion: "Deeper Underground es un fertilizante desarrollado para la estimulación del crecimiento y desarrollo del sistema radicular incrementando notablemente el número de pelos radiculares. Incrementa la fortaleza y eficacia de las raíces frente a las bajas temperaturas. Reduce el estrés del transplante y revitaliza las raíces dañadas. Eleva el contenido en materia orgánica del terreno y mejora su aireación y su capacidad de retención de agua y fertilizantes. Su rápida absorción hace que sus efectos sean prácticamente inmediatos.",
    imagen: "./img/producto_3.jpg",
    precio: 1500,
  },
  {
    id: 13,
    nombre: "GREEN EXPLOSION (Fertilizante para crecimiento)",
    descripcion: "Green Explosion de Top Crop es un excelente estimulador de crecimiento vegetal formulado a base de extractos de plantas, principalmente algas marinas y polen de leguminosas rico en esteroides naturales. Green Explosion ayuda a promover la multiplicación celular lo que se traduce en un notable incremento en el volumen de masa vegetal, así como del sistema radicular, aumentando también el contenido de clorofila para la mejora de la fotosíntesis. Esto conlleva un considerable aumento en la proporción de brotes (hasta un 30%), y por consiguiente un incremento de flores. Al mismo tiempo es un excelente revitalizante y recuperador de los daños causados por plagas y diferentes factores de estrés (sequía, temperaturas extremas, etc...).",
    imagen: "./img/producto_4.jpg",
    precio: 1500,
  },
  {
    id: 14,
    nombre: "BARRIER (Fertilizante para crecimiento y floración)",
    descripcion: "Barrier de Top Crop mejora la absorción y el transporte de nutrientes a través de la planta. Refuerza las pareces celulares, y hace a las plantas más resistentes frente a plagas tanto de insectos y ácaros como fúngicas. Incrementa los niveles de clorofila, favoreciendo la fotosíntesis y contribuyendo a un mejor desarrollo de éstas, así como la absorción del C02 del medio, y potencia los procesos metabólicos para proporcionar unas mayores cosechas. Además el aporte adicional de potasio favorece el proceso de floración. A sus características se le suma su alta alcalinidad gracias al silicio, haciéndolo útil para incrementar el pH de las soluciones de nutrientes hidropónicos. No encontrarás un mejor aliado para tus plantas.",
    imagen: "./img/producto_5.jpg",
    precio: 1500,
  },
  {
    id: 15,
    nombre: "TOP BLOOM (Fertilizante para floración)",
    descripcion: "Top Bloom de Top Crop está formulado con ácidos húmicos de elevada actividad natural orgánica. Su elevado contenido en fósforo y potasio estimula el comienzo de la floración y el desarrollo de grandes y compactos racimos florales.Su rápida absorción lo convierte en ideal por sus resultados casi inmediatos.",
    imagen: "./img/producto_6.jpg",
    precio: 1500,
  },
  {
    id: 16,
    nombre: "TOP COCO A (Fertilizante para crecimiento y floración)",
    descripcion: "Top Coco A + Top Coco B son soluciones líquidas concentradas eficazmente formuladas y combinadas para la preparación de soluciones nutritivas aptas para su aplicación en sustratos orgánicos de coco.Se trata de un abono equilibrado que contiene los nutrientes principales, secundarios y micronutrientes necesarios para todos los ciclos de la planta.",
    imagen: "./img/producto_7.jpg",
    precio: 2500,
  },
  {
    id: 17,
    nombre: "TOP COCO B (Fertilizante para crecimiento y floración)",
    descripcion: "Top Coco A + Top Coco B son soluciones líquidas concentradas eficazmente formuladas y combinadas para la preparación de soluciones nutritivas aptas para su aplicación en sustratos orgánicos de coco. Se trata de un abono equilibrado que contiene los nutrientes principales, secundarios y micronutrientes necesarios para todo el ciclo de la planta.",
    imagen: "./img/producto_8.jpg",
    precio: 2500,
  },
  {
    id: 18,
    nombre: "TOP CANDY (Fertilizante para floración)",
    descripcion: "Top Candy de Top Crop es un producto a base de extractos naturales de plantas, rico en hidratos de carbono; su principal función es el aumento de peso y volumen de las flores. Así mismo debido a su composición mejora notablemente el olor y el sabor de las cosechas. Top Candy es un producto 100% natural y orgánico por lo que puede emplearse hasta el último día del ciclo.",
    imagen: "./img/producto_9.jpg",
    precio: 1500,
  },
  {
    id: 20,
    nombre: "MACETA ROOTS HOUSE 3.75 L",
    descripcion: "",
    imagen: "./img/producto_11.jpg",
    precio: 600,
  },
  {
    id: 22,
    nombre: "MACETA ROOTS HOUSE 18 L",
    descripcion: "",
    imagen: "./img/producto_11.jpg",
    precio: 1500,
  },
  {
    id: 23,
    nombre: "INDOOR 100x100x200",
    descripcion: "",
    imagen: "./img/producto_12.jpg",
    precio: 20000,
  },
  {
    id: 24,
    nombre: "INDOOR 80x80x160",
    descripcion: "",
    imagen: "./img/producto_12.jpg",
    precio: 15000,
  },
  {
    id: 25,
    nombre: "INDOOR 60x60x160",
    descripcion: "",
    imagen: "./img/producto_12.jpg",
    precio: 10000,
  },
  {
    id: 26,
    nombre: "COMBO 1",
    descripcion: "INCLUYE UN INDOOR DE 100x100x200, LUCES LED, 2 VENTILADORES, TEMPORIZADOR, POLEAS, KIT DE FERTILIZANTES ESENCIALES, TIERRA FERTIL Y 6 MACETAS ROOTS HOUSE",
    imagen: "./img/combo_1.jpg",
    precio: 48000,
  },
  {
    id: 27,
    nombre: "COMBO 2",
    descripcion: "INCLUYE UN INDOOR DE 80x80x160, LUCES LED, 1 VENTILADOR, TEMPORIZADOR Y POLEAS",
    imagen: "./img/combo_2.jpg",
    precio: 34000,
  },
  {
    id: 28,
    nombre: "COMBO 3",
    descripcion: "KIT 3 FERTILIZANTES ESENCIALES",
    imagen: "./img/combo_3.png",
    precio: 4000,
  },
]
const productosSINstock = [
  {
    id: 10,
    nombre: "TOP VEG (Fertilizante para crecimiento)",
    descripcion: "Top Veg de Top Crop es un fertilizante líquido completo rico en ácidos húmicos y fúlvicos así como en macro y micronutrientes solubles en agua. Promueve el crecimiento, refuerza las defensas frente a enfermedades y estrés, regula el balance de pH del suelo e incrementa el contenido en clorofila mejorando la eficacia fotosintética de las plantas. Mejora la estructura del suelo así como su capacidad de retención de humedad y fertilizantes.",
    imagen: "./img/producto_1.jpg",
    precio: 1500,
  },
  {
    id: 19,
    nombre: "TOP BUD (Fertilizante para floración)",
    descripcion: "Top Bud de Top Crop es un fertilizante de la fase de floración, rico en fósforo y potasio, ideal para potenciar el engorde de tus frutos y flores. La baja concentración de nitrógeno y los aminoácidos que contiene garantizan mayor producción y mejora la constitución de la planta. Si quieres un remate que garantice la excelencia en tus cosechas Top Bud es la apuesta ganadora.",
    imagen: "./img/producto_10.jpg",
    precio: 1500,
  },
  {
    id: 21,
    nombre: "MACETA ROOTS HOUSE 10 L",
    descripcion: "",
    imagen: "./img/producto_11.jpg",
    precio: 1000,
  },
]
const productos = [
  ...productosCONstock, ...productosSINstock
]


// RECORRER PRODUCTOS EN CONSOLA
function recorrerProductos () {
    productos.forEach(element => {
      console.table(element)
    });
}


// BUSCADOR DE PRODUCTOS POR NOMBRE
function buscarProductosNOMBRE () {
    let prod = prompt ("Ingrese el producto a buscar:")
        prod = prod.toUpperCase()
        const resultado = productos.filter(element => element.nombre.includes(prod))
        console.table(resultado)
}


// EVENTO BUSCAR PRODUCTOS POR NOMBRE
btnBuscar.addEventListener("click", buscarProductosNOMBRE)


// PRECIO FINAL PRODUCTOS CON IVA
function precioConIVA () {
    let resultado = productos.map(producto => {
        return {
            precioFinal: producto.precio * IVA
        }
    });
    console.table(resultado)
}


// PRECIO FINAL EN CUOTAS
function cuotas () {
    let prod = parseInt(prompt ("ingrese el id del producto:"));
    const resultado = productos.find(element => {return element.id === prod});

    let cuota = parseInt(prompt("ingrese la cantidad de cuotas"));
    switch (cuota){
        case 3:
            return (((resultado.precio*IVA)*1.15)/3).toFixed(2)
        case 6:
            return ((resultado.precio*IVA)/6).toFixed(2)
        case 12:
            return (((resultado.precio*IVA)*1.30)/12).toFixed(2)
        default:
            return console.warn("no ingreso un valor de cuota valido")
    }
}


// PRINT PRODUCTOS EN HTML
function printProductos() {
  productosCONstock.forEach((prod) => {
    containerProductos.innerHTML += `<div>
                                      <h3 class="titleProd">${prod.nombre}</h3>
                                        <div class="info">
                                          <img src="${prod.imagen}" class="img-fluid">
                                          <p class="description">${prod.descripcion}</p>
                                        </div>
                                      <p class="price">$${prod.precio}</p>
                                      <button class="btn btn-comprar btn-agregar${prod.id}">COMPRAR</button>
                                    </div>`
  });
  productosSINstock.forEach((prod) => {
    containerProductos.innerHTML += `<div>
                                      <h3 class="titleProd">${prod.nombre}</h3>
                                        <div class="info">
                                          <img src="${prod.imagen}" class="img-fluid fotoSinStock">
                                          <p class="description">${prod.descripcion}</p>
                                        </div>
                                        <div class="SS">
                                          <p class="price">$${prod.precio}</p>
                                          <p class="textoSinStock">SIN STOCK</p>
                                        </div>
                                    </div>`
  });
  mail()
  agregarFuncionalidad()
}
printProductos()


// ADDEVENTLISTENER BOTON COMPRAR (AGREGAR AL CARRITO)
function agregarFuncionalidad () {
  productosCONstock.forEach ((prod) => {
    document
    .querySelector(`.btn-agregar${prod.id}`)
    .addEventListener("click", () => {
      agregarAcarrito(prod)
      Toastify({
        text: "Producto añadido al carrito",
        duration: 3000,
        newWindow: true,
        close: true,
        gravity: "bottom",
        position: "right",
        stopOnFocus: true,
        style: {
          background: "#adff2f",
          color: "#000000",
        },
        onClick: function(){}
      }).showToast();
    });
  });
}


// INCREMENTANDO CANTIDAD DE UN MISMO PRODUCTO EN CARRITO
function agregarAcarrito(prod) {
  let existe = carrito.some (prodSome => prodSome.id === prod.id);
  let prodFind = carrito.find(productoFind => productoFind.id === prod.id);

    existe === false ? (carrito.push(prod), prod.cantidad = 1) : (prodFind, prod.cantidad ++)
    printCarrito ()
}


// PRINT CARRITO EN HTML
function printCarrito() {
  containerCompras.innerHTML = "";
  let total = 0;
  carrito.forEach((prod) => {
      containerCompras.innerHTML += `<div class="carritoProductos">
                                        <p class="col-3">${prod.nombre}</p>
                                        <p class="col-3">${prod.cantidad}</p>
                                        <p class="col-3">$${prod.precio * prod.cantidad}</p>
                                        <button class="col-3 btn-borrar${prod.id}">BORRAR</button>
                                      </div>`
      valorTotal.innerHTML = `<div>
                                <p>TOTAL: ${total += parseInt(prod.precio) * parseInt(prod.cantidad)}</p>
                              </div>`
  });
  localStorage.setItem("carrito", JSON.stringify(carrito));
  borrarProducto()
}
printCarrito()


// BORRAR PRODUCTOS CARRITO
function borrarProducto () {
    carrito.forEach ((prod) => {
      document
      .querySelector(`.btn-borrar${prod.id}`)
      .addEventListener("click", () => {
        carrito = carrito.filter((prodFilter) => prodFilter.id !== prod.id)
        printCarrito()
    });
  });
}