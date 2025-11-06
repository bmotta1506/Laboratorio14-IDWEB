let calificaciones = [12, 15, 18, 20, 10, 17];

let max = Math.max(...calificaciones);
let normalizadas = calificaciones.map(nota => nota / max);

console.log(`La calificación máxima es: ${max}`);
console.log(`Las calificaciones normalizadas son: ${normalizadas}`);    