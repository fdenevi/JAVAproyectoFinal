const btnBuscar = document.querySelector(".buscar")
btnBuscar.addEventListener("click", buscarProductosNOMBRE)


const btnComprar = document.querySelectorAll('.comprar')
btnComprar.forEach(element => {
    element.addEventListener('mousemove', () => {
        element.title = 'agregar al carrito'
    })
})