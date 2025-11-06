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
        let p = Number(precio);
        if (p > 0) {
            this.#precio = p;
        }
    }

    setStock(stock) {
        let s = Number(stock);
        if (s > 0) {
            this.#stock = s;
        }
    }

    getNombre() {
        return this.#nombre;
    }

    getPrecio() {
        return `$${this.#precio.toFixed(2)}`;
    }

    getStock() {
        return this.#stock;
    }
}

let p = new Producto("Monitor", "120.5", 8);
console.log(`Producto: ${p.getNombre()}, Precio: ${p.getPrecio()}, Stock: ${p.getStock()}`);
