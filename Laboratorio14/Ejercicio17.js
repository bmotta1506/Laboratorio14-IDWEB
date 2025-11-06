class Cuenta {
    #saldo;
    constructor(saldoInicial) {
        this.#saldo = saldoInicial;
    }
    getSaldo() {
        return this.#saldo;
    }
    depositar(monto) {
        if (monto > 0) {
            this.#saldo += monto;
        }
    }
    retirar(monto) {
        if (monto > 0 && monto <= this.#saldo) {
            this.#saldo -= monto;
        }
    }
    transferir(monto, cuentaDestino) {
        if (monto > 0) {
            this.retirar(monto);
            cuentaDestino.depositar(monto);
        }
    }
}
class CuentaAhorro extends Cuenta {
    constructor(saldoInicial) {
        super(saldoInicial);
    }
    retirar(monto) {
        if (monto > 0 && monto <= this.getSaldo()) {
            super.retirar(monto);
        }
    }
}
class CuentaCorriente extends Cuenta {
    constructor(saldoInicial, limiteSobregiro) {
        super(saldoInicial);
        this.limiteSobregiro = limiteSobregiro;
    }
    retirar(monto) {
        if (monto > 0 && monto <= this.getSaldo() + this.limiteSobregiro) {
            let nuevoSaldo = this.getSaldo() - monto;
            if (nuevoSaldo < 0) {
                this.limiteSobregiro += nuevoSaldo;
            }
            super.retirar(monto);
        }
    }
}

let ahorro = new CuentaAhorro(500);
let corriente = new CuentaCorriente(300, 200);

ahorro.transferir(100, corriente);

console.log(ahorro.getSaldo());
console.log(corriente.getSaldo());
