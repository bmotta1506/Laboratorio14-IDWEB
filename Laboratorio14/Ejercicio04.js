let minimo = parseInt(prompt("Ingrese el rango minimo"));
let maximo = parseInt(prompt("Ingrese el rango maximo"));

const numeroAleatorio = (min, max) => {
    let aleatorio = Math.random()*(max - min + 1) + min;
    return aleatorio;
}

const resultado = Math.floor(numeroAleatorio(minimo, maximo));

console.log(`El numero aleatorio entre ${minimo} y ${maximo} es: ${resultado}`);