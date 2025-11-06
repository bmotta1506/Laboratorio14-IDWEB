let constraseña =" ";
for(let i = 0; i < 6; i++){
    let numero = Math.floor(Math.random()*(10));
    constraseña += numero;
}
console.log("La constraseña es: "+constraseña)