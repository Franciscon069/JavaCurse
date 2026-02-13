//Fetch (ajax) se usa para sacar datos de una url ya sea JSON
fetch("https://pokeapi.co/api/v2/pokemon")
    .then(data => data.json())
    .then(data => {
        console.log(data.data)
    })