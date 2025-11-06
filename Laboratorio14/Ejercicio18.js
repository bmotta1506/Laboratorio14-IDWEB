class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
}

class Carrito {
    constructor() {
        this.productos = [];
    }

    agregarProducto(producto) {
        this.productos.push(producto);
    }

    calcularTotal() {
        return this.productos.reduce((suma, p) => suma + p.precio, 0);
    }

    mostrarResumen() {
        this.productos.forEach(p => console.log(`${p.nombre} - $${p.precio.toFixed(2)}`));
        console.log(`Total: $${this.calcularTotal().toFixed(2)}`);
    }
}

let p1 = new Producto("Mouse", 25.5);
let p2 = new Producto("Teclado", 45.0);

let carrito = new Carrito();
carrito.agregarProducto(p1);
carrito.agregarProducto(p2);

carrito.mostrarResumen();
