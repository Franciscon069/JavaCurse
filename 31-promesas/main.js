// Promesa es un objeto que representa la eventual finalización o fracaso de una operación asíncrona y su valor resultante.

const promesa = new Promise((resolve, reject) => {

    setTimeout(() => {
         let correct = true; // Simulamos una condición para resolver o rechazar la promesa

    if (correct) {
        const miOBJ = {
            nombre: "Juan",
            edad: 30,
            ciudad: "Madrid"
        }
        resolve(miOBJ); // Se resuelve la promesa con el objeto miOBJ
    } else {
        reject("La promesa ha sido rechazada");
    }   
    }, 2000); // Simulamos una operación asíncrona con un retraso de 2 segundos

});

// console.log(promesa); // Muestra el estado de la promesa (pendiente, cumplida o rechazada)

// Para manejar el resultado de la promesa, utilizamos los métodos .then() y .catch()

promesa
    .then((resultado) => {
        console.warn("Resultado:", resultado); // Se ejecuta si la promesa se cumple
})
    .catch((error) => {
        console.log("Error:", error); // Se ejecuta si la promesa es rechazada
})


//Promesas encadenadas

function sevirPizza(){ //tardo 15segundos en servir la pizza
    return new Promise((relsolve) => {
        setTimeout(() => {
            relsolve("Pizza servida");
        }, 15000);
    });
}

function servirHamburguesa(){ //tardo 8 segundos en servir la hamburguesa
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Hamburguesa servida");
        }, 8000);
    });

}
function soloMilloSalsaAceituna(){ //tardo 12 segundos en servir el solo millo con salsa de aceituna
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Solo millo con salsa de aceituna servido");
        }, 12000);
    });
}

// sevirPizza()
//     .then((resultado1) => {
//         console.log(resultado1); // Muestra "Pizza servida" 
//     })
//     .then(() => {
//         return servirHamburguesa(); // Devuelve la promesa de servirHamburguesa para encadenarla
//     })
//     .then((resultado2) => {
//         console.log(resultado2); // Muestra "Hamburguesa servida"
//     })
//     .then(() => {
//         return soloMilloSalsaAceituna(); // Devuelve la promesa de soloMilloSalsaAceituna para encadenarla
//     })
//     .then((resultado3) => {
//         console.log(resultado3); // Muestra "Solo millo con salsa de aceituna servido"
//     })
//     .catch((error) => {
//         console.log("Error:", error); // Maneja cualquier error que ocurra en el proceso
//     });

//Async y await

async function servirComida() {
    try {
        const resultado1 = await sevirPizza(); // Espera a que se resuelva la promesa de sevirPizza
        console.log(resultado1); // Muestra "Pizza servida"  

        const resultado2 = await servirHamburguesa(); // Espera a que se resuelva la promesa de servirHamburguesa
        console.log(resultado2); // Muestra "Hamburguesa servida"

        const resultado3 = await soloMilloSalsaAceituna(); // Espera a que se resuelva la promesa de soloMilloSalsaAceituna
        console.log(resultado3); // Muestra "Solo millo con salsa de aceituna servido"
    } catch (error) {
        console.log("Error:", error); // Maneja cualquier error que ocurra en el proceso
    }
}
servirComida();