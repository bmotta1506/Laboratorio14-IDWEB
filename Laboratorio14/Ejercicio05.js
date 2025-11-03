const numeroAleatorio = (min, max) => {
    let aleatorio = Math.random()*(max - min + 1) + min;
    return aleatorio;
}

const resultado1 = Math.floor(numeroAleatorio(1, 6));
const resultado2 = Math.floor(numeroAleatorio(1, 6));

const suma = resultado1 + resultado2;

console.log(`Dado 1: ${resultado1}`)
console.log(`Dado 2: ${resultado2}`)
console.log(`El suma de dados entre ${resultado1} y ${resultado2} es: ${suma}`);