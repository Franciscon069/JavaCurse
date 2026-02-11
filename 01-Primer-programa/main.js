//Bucle for -> es una estructura de control que se repite un bloque de código un número determinado de veces.


// let num = 10;

// for (let i = 1; i <= 10; i++) {
//     let result = (num * i);
//     console.log(num + " x " + i + " = " + result);
// }


//Este muesrará en consola los números del 1 al 177
// let limit = 177;
// for (let i = 1; i <= limit; i++) {
//     console.log("Iteración número: " + i);
// }


// Tabla de multiplicar del 10 al 1
// console.log("Tabla de multiplicar al revés");
// for (let i = 10; i >= 1; i--) {  // ← Invierte i
//     for (let j = 1; j <= 10; j++) {  // ← j también al revés
//         console.log(i + " x " + j + " = " + (i * j));
//     }
// }

let num = 5;
console.log("Tabla del " + num + " al revés");
for (let j = 10; j >= 1; j--) {
    console.log(num + " x " + j + " = " + (num * j));
}