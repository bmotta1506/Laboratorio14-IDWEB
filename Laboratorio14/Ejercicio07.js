let angulo = prompt("Ingrese un angulo en grados");

const gradosAradianes = (angulo) => {
    return angulo*(Math.PI)/180;
}

const radianesAgrados = (radian) => {
    return radianes*(180/Math.PI);
}

let radian = Math.PI

const grados = radianesAgrados(Math.PI);
const radianeS = gradosAradianes(angulo);

const coseno = Math.cos(grados);
const seno = Math.sin(grados);

const coseno2 = Math.cos(radianes);
const seno2 = Math.sin(radianes);

console.log(`Angulo 1 en grados: ${grados} seno: ${seno} coseno: ${coseno}`);
console.log(`Angulo 2 en radines: ${radianes} seno: ${seno2} coseno: ${coseno2}`);