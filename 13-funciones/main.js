//Funciones
//Una función es una agrupación reutilizable de un conjunto de instrucciones que realizan una tarea específica.

// function saludo (nombre){
//     return `Hola, ${nombre}!`;
// };
// alert(saludo("Francisco"));

//Parametros ...REST
 

// function misPeliculas(pelicula1, pelicula2, ...otrasPeliculas){
//     console.log(pelicula1);
//     console.log(pelicula2);
//     console.log(otrasPeliculas);ff
// }

// misPeliculas("El Padrino", "Titanic", "Avatar", "Star Wars", "El Señor de los Anillos");

//Operador ...SPREAD

// let numeros = [1, 2, 3, 4, 5];

// let misNumeros = [...numeros, 6, 7, 8, 9, 10];

// console.log(misNumeros);

//Funciones de Collback "avanzadas"


// function restame(n1, n2, mostrar, multiplicarPorTres){
//     let resta = n1 - n2;

//     mostrar(resta);
//     multiplicarPorTres(resta);

//     return resta;
// }
// restame(20, 5, function(resultado){
//     console.log(`El resultado de la resta es: ${resultado}`);
// }, function(resultado){
//     console.log(`El resultado multiplicado por tres es: ${resultado * 3}`);
// });

//Ambito variables (scope)

//Global

let web = "franciscoweb.es/ruta";

function mostrarWeb(){{
    console.log(web);
    console.log(nombre);
    let nombre = "Francisco";
}}
console.warn( web );
mostrarWeb();

if (true){
    let deporte = "Mi deporte favorito es el fútbol";
    console.log(deporte);
}
console.log(deporte);