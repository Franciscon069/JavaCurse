//fetch
fetch('https://pokeapi.co/api/v2/pokemon/')
    .then((res) =>  res.json())
    .then((data) => {
        // console.log(data.results)
        let arrayNombre = []
        data.results.forEach(element => {
            // console.log(element.name)
            arrayNombre.push(element.name)
            
        });
        console.log(arrayNombre)
    })
    .catch(error => console.log(error));
    
//await tiene que estar dentro de una funcion async
//async await
//filter
//map
const obtenerPokemon = async() => {
    try{
        const res = await fetch('https://pokeapi.co/api/v2/pokemon/')
        const data = await res.jason()
        // console.log(data.results)
        const arrayNombres = data.results.filter(poke => poke.name !== 'bulbasaur')
        console.log(arrayNombres)
    } catch (error) {
        console.log(error)
    }

}
obtenerPokemon()
