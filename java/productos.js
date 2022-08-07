const IVA = 1.21
const productos = []


class Producto {
    constructor(id, nombre, categoria, formato, precio) {
        this.id = id
        this.nombre = nombre
        this.categoria = categoria
        this.formato = formato
        this.precio = precio
    }
}


function productosAgregados () {
    productos.push (new Producto (10, "TOP VEG", "FERTILIZANTE CRECIMIENTO", "250 ml", 1500))
    productos.push (new Producto (11, "TOP VEG", "FERTILIZANTE CRECIMIENTO", "1 l", 2500))
    productos.push (new Producto (12, "BIG ONE", "FERTILIZANTE FLORACION", "250 ml", 1500))
    productos.push (new Producto (13, "BIG ONE", "FERTILIZANTE FLORACION", "1 l", 2500))
    productos.push (new Producto (14, "BIG ONE", "FERTILIZANTE FLORACION", "5 l", 4500))
    productos.push (new Producto (15, "DEEPER UNDERGROUND", "FERTILIZANTE CRECIMIENTO", "250 ml", 1500))
    productos.push (new Producto (16, "DEEPER UNDERGROUND", "FERTILIZANTE CRECIMIENTO", "100 ml", 1000))
    productos.push (new Producto (17, "GREEN EXPLOSION", "FERTILIZANTE CRECIMIENTO", "250 ml", 1500))
    productos.push (new Producto (18, "GREEN EXPLOSION", "FERTILIZANTE CRECIMIENTO", "100 ml", 1000))
    productos.push (new Producto (19, "BARRIER", "FERTILIZANTE CRECIMIENTO Y FLORACION", "250 ml", 1500))
    productos.push (new Producto (20, "BARRIER", "FERTILIZANTE CRECIMIENTO Y FLORACION", "100 ml", 1000))
    productos.push (new Producto (21, "TOP BLOOM", "FERTILIZANTE FLORACION", "250 ml", 1500))
    productos.push (new Producto (22, "TOP BLOOM", "FERTILIZANTE FLORACION", "1 l", 2500))
    productos.push (new Producto (23, "TOP COCO A", "FERTILIZANTE CRECIMIENTO Y FLORACION", "1 l", 2500))
    productos.push (new Producto (24, "TOP COCO A", "FERTILIZANTE CRECIMIENTO Y FLORACION", "5 l", 4500))
    productos.push (new Producto (25, "TOP COCO B", "FERTILIZANTE CRECIMIENTO Y FLORACION", "1 l", 2500))
    productos.push (new Producto (26, "TOP COCO B", "FERTILIZANTE CRECIMIENTO Y FLORACION", "5 l", 4500))
    productos.push (new Producto (27, "TOP CANDY", "FERTILIZANTE FLORACION", "1 l", 2500))
    productos.push (new Producto (28, "TOP CANDY", "FERTILIZANTE FLORACION", "250 ml", 1500))
    productos.push (new Producto (29, "TOP BUD", "FERTILIZANTE FLORACION", "250 ml", 1500))
    productos.push (new Producto (30, "TOP BUD", "FERTILIZANTE FLORACION", "100 ml", 1000))
    productos.push (new Producto (31, "ROOTS HOUSE", "MACETA", "3.75 l", 600))
    productos.push (new Producto (32, "ROOTS HOUSE", "MACETA", "10 l", 1000))
    productos.push (new Producto (33, "ROOTS HOUSE", "MACETA", "18 l", 1500))
    productos.push (new Producto (34, "CARPA INDOOR", "INDOOR", "100x100x200", 20000))
    productos.push (new Producto (35, "CARPA INDOOR", "INDOOR", "80x80x160", 15000))
    productos.push (new Producto (36, "CARPA INDOOR", "INDOOR", "60x60x160", 10000))
    productos.push (new Producto (37, "COMBO1", "COMBO1", "60x60x160", 35000))
    productos.push (new Producto (38, "COMBO2", "COMBO2", "80x80x160", 34000))
    productos.push (new Producto (39, "COMBO3", "COMBO3", 5000))
}
productosAgregados ()


function recorrerProductos () {
    productos.forEach(element => {console.table(element)});
}


function buscarProductosCATEGORIA () {
    let prod = prompt ("Ingrese el producto a buscar:")
        prod = prod.toUpperCase()
        const resultado = productos.filter(element => element.categoria.includes(prod))
        console.table(resultado)
}
function buscarProductosNOMBRE () {
    let prod = prompt ("Ingrese el producto a buscar:")
        prod = prod.toUpperCase()
        const resultado = productos.filter(element => element.nombre.includes(prod))
        console.table(resultado)
}


function precioConIVA () {
    let resultado = productos.map(producto => {
        return {
            id: producto.id,
            nombre: producto.nombre,
            categoria: producto.categoria,
            formato: producto.formato,
            precioFinal: producto.precio * IVA
        }
    })
    console.table(resultado)
}


function cuotas () {
    let prod = parseInt(prompt ("ingrese el id del producto:"))
    const resultado = productos.find(element => {return element.id === prod})

    let cuota = parseInt(prompt("ingrese la cantidad de cuotas"))
    switch (cuota){
        case 3:
            return (((resultado.precio*IVA)*1.15)/3)
        case 6:
            return ((productos.precio*IVA)/6)
        case 12:
            return (((productos.precio*IVA)*1.30)/12)
        default:
            return console.warn("no ingreso un valor de cuota valido")
    }
}