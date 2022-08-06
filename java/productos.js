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
    precioFinal() {
        return "$ "+ parseFloat((this.precio * IVA).toFixed(2))
    }
}


function productosAgregados () {
    productos.push (new Producto (10, "TOP VEG", "Fertilizante para crecimiento", "250 ml", 1500))
    productos.push (new Producto (11, "TOP VEG", "Fertilizante para crecimiento", "1 l", 2500))
    productos.push (new Producto (12, "BIG ONE", "Fertilizante para floración", "250 ml", 1500))
    productos.push (new Producto (13, "BIG ONE", "Fertilizante para floración", "1 l", 2500))
    productos.push (new Producto (14, "BIG ONE", "Fertilizante para floración", "5 l", 4500))
    productos.push (new Producto (15, "DEEPER UNDERGROUND", "Fertilizante para crecimiento", "250 ml", 1500))
    productos.push (new Producto (16, "DEEPER UNDERGROUND", "Fertilizante para crecimiento", "100 ml", 1000))
    productos.push (new Producto (17, "GREEN EXPLOSION", "Fertilizante para crecimiento", "250 ml", 1500))
    productos.push (new Producto (18, "GREEN EXPLOSION", "Fertilizante para crecimiento", "100 ml", 1000))
    productos.push (new Producto (19, "BARRIER", "Fertilizante para crecimiento y floración", "250 ml", 1500))
    productos.push (new Producto (20, "BARRIER", "Fertilizante para crecimiento y floración", "100 ml", 1000))
    productos.push (new Producto (21, "TOP BLOOM", "Fertilizante para floración", "250 ml", 1500))
    productos.push (new Producto (22, "TOP BLOOM", "Fertilizante para floración", "1 l", 2500))
    productos.push (new Producto (23, "TOP COCO A", "Fertilizante para crecimiento y floración", "1 l", 2500))
    productos.push (new Producto (24, "TOP COCO A", "Fertilizante para crecimiento y floración", "5 l", 4500))
    productos.push (new Producto (25, "TOP COCO B", "Fertilizante para crecimiento y floración", "1 l", 2500))
    productos.push (new Producto (26, "TOP COCO B", "Fertilizante para crecimiento y floración", "5 l", 4500))
    productos.push (new Producto (27, "TOP CANDY", "Fertilizante para floración", "1 l", 2500))
    productos.push (new Producto (28, "TOP CANDY", "Fertilizante para floración", "250 ml", 1500))
    productos.push (new Producto (29, "TOP BUD", "Fertilizante para floración", "250 ml", 1500))
    productos.push (new Producto (30, "TOP BUD", "Fertilizante para floración", "100 ml", 1000))
    productos.push (new Producto (31, "ROOTS HOUSE", "Maceta", "3.75 l", 600))
    productos.push (new Producto (32, "ROOTS HOUSE", "Maceta", "10 l", 1000))
    productos.push (new Producto (33, "ROOTS HOUSE", "Maceta", "18 l", 1500))
    productos.push (new Producto (34, "CARPA INDOOR", "indoor", "100x100x200", 20000))
    productos.push (new Producto (35, "CARPA INDOOR", "indoor", "80x80x160", 15000))
    productos.push (new Producto (36, "CARPA INDOOR", "indoor", "60x60x160", 10000))
    productos.push (new Producto (37, "COMBO1", "indoor+luces+accesorios+sustrato+maceta+tierra", "60x60x160", 35000))
    productos.push (new Producto (38, "COMBO2", "indoor+luces+accesorios", "80x80x160", 34000))
    productos.push (new Producto (39, "COMBO3", "pack 3 sustratos esceciales", "250 ml", 5000))
}
productosAgregados ()