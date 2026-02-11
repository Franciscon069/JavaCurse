//Programacion orientada a objetos (POO)

// class Carro{
//     constructor(marca, modelo, annio){
//         this.marca = marca;
//         this.modelo = modelo;
//         this.annio = annio;
//     }
// }
// const miCarro = new Carro("Toyota", "Corolla", 2020);
// console.log(miCarro);

// class Gato{
//     constructor(nombre, edad, color){
//         this.nombre = nombre;
//         this.edad = edad;   
//         this.color = color;
//     }
//     Metodos del gato
//     meaullar(){
//         console.log(`${this.nombre} esta maullando`);
//     }
//     saltar(){ 
//         console.log(`${this.nombre} esta saltando`);
//     }
// }

// const miGato = new Gato("Michi", 3, "Gris");
// const miGato2 = new Gato("Pelusa", 2, "Blanco");
// console.log(miGato);
// console.log(`${miGato2.nombre} no esta saltado y tiene ${miGato2.edad} años, su color es ${miGato2.color}`);
// miGato.meaullar();
// miGato.saltar();

class Persona{
    constructor(nombre, edad, profesion){
        this.nombre = nombre,
        this.edad = edad,
        this.profesion = profesion
    }
    saludar(){
        console.log(`Hola, mi nombre es ${this.nombre}, tengo ${this.edad} años y soy ${this.profesion}`);
    }
    set Cumpleanos(cumpleanos){
        this.cumpleanos = cumpleanos;
    }
    get Edad(){
        return this.edad;
    }
    static informacion(){
        console.log("Esta es la clase Persona");
    }
}
// let persona1 = new Persona("Juan", 28, "Ingeniero");
// persona1.saludar();
// persona1.Cumpleanos = "15 de Mayo";
// console.log(`Mi cumpleaños es el ${persona1.cumpleanos}`);
// console.log(`Tengo ${persona1.Edad} años`);

// persona1.edad = 29;
// persona1.saludar();
// console.log(`Ahora tengo ${persona1.Edad} años`);

Persona.informacion();

class Persona2 extends Persona{
    constructor(nombre, edad, profesion, especialidad){
        super(nombre, edad, profesion);
        this.especialidad = especialidad;
    }

    set Especialidad(especialidad){
        this.especialidad = especialidad;
    }
    get Especialidad(){
        return this.especialidad;
    }

    mostrarEspecialidad(){
        console.log(`Mi especialidad es ${this.especialidad}`);
    }
}

let pesona2 = new Persona2("Ana", 32, "Doctora", "Pediatría");
Persona2.Especialidad = "Cardiología";
pesona2.mostrarEspecialidad();
pesona2.saludar();