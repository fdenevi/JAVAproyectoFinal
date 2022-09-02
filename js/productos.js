// CONSTANTES Y VARIABLES
let productos = []
let contenidoHTML = ""
const containerProductos = document.querySelector(".productos")
const containerCompras = document.querySelector(".carrito")
const valorTotal = document.querySelector(".total")
const form = document.querySelector(".formulario")
const btnBuscar = document.querySelector(".search")
const btnComprar = document.querySelectorAll("button.btn-agregar")
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
const mail = () =>{
  Swal.fire({
      title: 'Suscribite al newsletter y no te pierdas nunca ninguna de nuestras ofertas!!',
      input: 'email',
      inputPlaceholder: 'Ingrese aquí su email',
      width: '40em',
      color: '#716add',
      background: '#fff',
      backdrop: 'rgba(0,0,123,0.4)',
      confirmButtonColor:'#adff2f'
    });
  }


// BUSCADOR DE PRODUCTOS POR NOMBRE
function buscarProductosNOMBRE () {
  let prod = prompt ("Ingrese el producto a buscar:")
      prod = prod.toUpperCase()
      const resultado = productos.filter(element => element.nombre.includes(prod))
      console.table(resultado)
}
btnBuscar.addEventListener("click", buscarProductosNOMBRE)


// PRODUCTOS HTML
const retornoCardProducto = (prod) => {
  return `<div>
            <h3 class="titleProd">${prod.nombre}</h3>
              <div class="info">
                <img src="${prod.imagen}" class="img-fluid">
                <p class="description">${prod.descripcion}</p>
              </div>
            <p class="price">$${prod.precio}</p>
            <button class="btn btn-agregar${prod.id}" title="agregar al carrito">COMPRAR</button>
          </div>`
}


// ERROR HTML
const retornoCardError = () =>{
  return `<p>falta hacer esta parte</p>`
}


// PRINT PRODUCTOS EN HTML
const printProductos = async () =>{
  await fetch('js/productos.json')
        .then((response) => response.json())
        .then((prods) => {
          productos = prods
          productos.forEach(prod => {
            contenidoHTML += retornoCardProducto(prod)
          });
          containerProductos.innerHTML = contenidoHTML
        })
        .catch((error) => {
          containerProductos.innerHTML = retornoCardError ()
        })
  mail()
  agregarProducto()
}
printProductos()


// FUNCION BOTON COMPRAR
function agregarProducto () {
  productos.forEach ((prod) => {
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

  if (carrito.length === 0) {
    containerCompras.innerHTML = "";
    valorTotal.innerHTML = "";
    form.innerHTML= "";
  } else {
    carrito.forEach((prod) => {
      containerCompras.innerHTML += `<div class="carritoProductos">
                                        <p class="col-3">${prod.nombre}</p>
                                        <p class="col-3">${prod.cantidad}</p>
                                        <p class="col-3">$${prod.precio * prod.cantidad}</p>
                                        <button class="col-3 btn-borrar${prod.id}">X</button>
                                      </div>`

      valorTotal.innerHTML = `TOTAL $${total += parseInt(prod.precio) * parseInt(prod.cantidad)}`

      form.innerHTML = `<div class="form">
                            <p>NOMBRE Y APELLIDO</p>
                            <div><input type="text" name="name" id="name" value="Fer Luna"></div>
                          </div>
                          <div class="form">
                              <p>TELEFONO</p>
                              <div><input type="tel" name="phone" value="113458129"></div>
                          </div>
                          <div class="form">
                              <p>E-MAIL</p>
                              <div><input type="email" name="email" value="ferluna@gmail.com"></div>
                          </div>
                          <div>
                            <button class="comprar">FINALIZAR COMPRA</button>
                          </div>`
    });
    const btnFinalizarCompra = document.querySelector(".comprar")
      btnFinalizarCompra.addEventListener("click", () => {
        if (`${document.querySelector("#name").value}` === "") {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Debe ingresar su nombre',
          });
        } else {
          Swal.fire({
            title: 'Compra realizada con éxito ;) !',
            text: `Gracias por confiar en nosotrxs ${document.querySelector("#name").value}. En los próximos minutos recibirás un correo electrónico con el detalle de tu compra`,
            imageUrl: 'img/logo_bg.png',
            imageAlt: 'Custom image',
          });
        }
      })
  }
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