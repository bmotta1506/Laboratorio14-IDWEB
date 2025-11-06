let x1 = Number(prompt("Ingrese la coordenada x1"));
let y1 = Number(prompt("Ingrese la coordenada y1"));
let x2 = Number(prompt("Ingrese la coordenada x2"));
let y2 = Number(prompt("Ingrese la coordenada y2"));

const distancia = (x1, y1, x2, y2) => {
    return Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));
}

const distanciaOrigen1 = distancia(x1, y1, 0, 0);
const distanciaOrigen2 = distancia(x2, y2, 0, 0);
const distanciaPuntos = distancia(x1, y1, x2, y2);

console.log(`Las coordenadas del primer punto son: (${x1}, ${y1})`);
console.log(`Las coordenadas del segundo punto son: (${x2}, ${y2})`);
console.log(`La suma de las distancias de los puntos al origen es: ${(distanciaOrigen1 + distanciaOrigen2).toFixed(2)}`);
console.log(`La distancia entre los dos puntos es: ${distanciaPuntos.toFixed(2)}`);
