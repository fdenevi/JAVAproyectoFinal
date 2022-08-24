const btnBuscar = document.querySelector(".buscar")
btnBuscar.addEventListener("click", buscarProductosNOMBRE)


const btnComprar = document.querySelectorAll('.btn-comprar')
btnComprar.forEach(element => {
    element.addEventListener('mousemove', () => {
        element.title = 'agregar al carrito'
    })
})