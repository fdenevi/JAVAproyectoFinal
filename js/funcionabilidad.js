// PROMPT MAIL
const mail = prompt("Subscribite al newsletter y no te pierdas nunca ninguna de nuestras ofertas!!")
localStorage.setItem("mail", JSON.stringify(mail));


// EVENTO SOBRE BOTON COMPRAR
const btnComprar = document.querySelectorAll(".btn-comprar")
btnComprar.forEach(element => {
    element.addEventListener('mousemove', () => {
        element.title = 'agregar al carrito'     
    });
  });