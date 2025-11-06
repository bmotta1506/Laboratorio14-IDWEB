class Producto {
    #nombre;
    #precio;
    #stock;

    constructor(nombre, precio, stock) {
        this.#nombre = nombre;
        this.setPrecio(precio);
        this.setStock(stock);
    }

    setPrecio(precio) {
        if (precio > 0) {
            this.#precio = precio;
        }
    }

    setStock(stock) {
        if (stock > 0) {
            this.#stock = stock;
        }
    }

    getNombre() {
        return this.#nombre;
    }

    getPrecio() {
        return this.#precio;
    }

    getStock() {
        return this.#stock;
    }
}

let p = new Producto("Laptop", 3500, 10);
console.log(`Producto: ${p.getNombre()}, Precio: ${p.getPrecio()}, Stock: ${p.getStock()}`);
