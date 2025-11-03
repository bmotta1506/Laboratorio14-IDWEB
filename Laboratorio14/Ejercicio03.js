let numero = parseFloat(prompt("Ingrese un número:"));

let redondeadoAbajo = Math.floor(numero);
let redondeadoArriba = Math.ceil(numero);
let redondeadoNormal = Math.round(numero);

console.log("El numero a probar es: "+ numero)
console.log("El numero redondeado hacia arriba es: "+redondeadoArriba);
console.log("El numero redondeado hacia abajo es: "+redondeadoAbajo);
console.log("El numero redondeado normal es: "+redondeadoNormal);