class Usuario {
    constructor(nombre, email) {
        this.nombre = nombre;
        this.email = email;
    }

    mostrarInfo() {
        return `${this.nombre} - ${this.email}`;
    }
}

class Cliente extends Usuario {
    constructor(nombre, email, nivelFidelidad) {
        super(nombre, email);
        this.nivelFidelidad = nivelFidelidad;
    }

    mostrarInfo() {
        return `${super.mostrarInfo()} - Fidelidad: ${this.nivelFidelidad}`;
    }
}

class Administrador extends Usuario {
    constructor(nombre, email, permisos) {
        super(nombre, email);
        this.permisos = permisos;
    }

    mostrarInfo() {
        return `${super.mostrarInfo()} - Permisos: ${this.permisos.join(", ")}`;
    }
}

let c = new Cliente("Brayan", "brayan@gmail.com", 4);
console.log(c.mostrarInfo());

let a = new Administrador("Luis", "luis@gmail.com", ["crear", "editar", "eliminar"]);
console.log(a.mostrarInfo());
