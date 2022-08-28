// EVENTO SOBRE BOTON COMPRAR
const btnComprar = document.querySelectorAll(".btn-comprar")
btnComprar.forEach(element => {
    element.addEventListener('mousemove', () => {
        element.title = 'agregar al carrito'     
    });
  });


  const btnFinalizarCompra = document.querySelector(".finalizar")
  function finalizarCompra() {
      btnFinalizarCompra.addEventListener("click", () => {
        alert(`Muchas gracias por tu compra`)
      })
    }
  finalizarCompra()