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
        Swal.fire({
          title: 'Compra realizada con éxito ;) !',
          text: 'Gracias por confiar en nosotrxs. En los próximos minutos recibirás un correo electrónico con el detalle de tu compra',
          imageUrl: 'img/logo_bg.png',
          imageAlt: 'Custom image',
        })
      })
    }
  finalizarCompra()