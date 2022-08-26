// EVENTO SOBRE BOTON COMPRAR
const btnComprar = document.querySelectorAll(".btn-comprar")
btnComprar.forEach(element => {
    element.addEventListener('mousemove', () => {
        element.title = 'agregar al carrito'     
    });
  });