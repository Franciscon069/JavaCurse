//!Tempale string

// const numero = (num, num2) => (`El numero es: ${num + num2}`)


// const resultado = numero(20, 10)
// console.log(resultado)

//!Objetos

// const mascota = {
//     nombre: 'Tom',
//     edad: 10,
//     raza: ['peludo', 'negro'],
//     vivo: true
// }

// const {edad, nombre} = mascota
// console.log(nombre)


const web = {
    nombre : 'www.blueWEB',
    links:{
        enlace: 'www.blueWEB.cl'
    },
    redesSociales: {
        youtuube:{
        enlace :'youtube.com/blueWEB',
        nombre:'blueWEB yt',
        },
        
    }
}
const enlaceYT = web.redesSociales.youtuube.enlace;
console.log(enlaceYT)

const {enlace, nombre} = web.redesSociales.youtuube;
console.log(enlace)
console.log(nombre)