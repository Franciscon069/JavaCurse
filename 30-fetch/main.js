//Fetch (ajax) se usa para sacar datos de una url ya sea JSON
// fetch("https://pokeapi.co/api/v2/pokemon")
//     .then(data => data.json())
//     .then(data => {
//         console.log(data.data);
//         mostrarPokemon(data.data);
//     })
//     .catch(error => console.log(error));

// function mostrarPokemon(pokemon) {{
//     const contenedor = document.getElementById("name");
//     pokemon.forEach(p => {
//         const div = document.createElement("div");
//         div.classList.add("pokemon");
//         div.innerHTML = `
//             <h2>${p.name}</h2>
//             <img src="${p.sprites.front_default}" alt="${p.name}">
//         `;
//         contenedor.appendChild(div);
//     });}}


//Guardar informacion 

const pokemonGuardado = {
    name: "Pikachu",
    type: "Electric",
    level: 25
}

fetch("https://pokeapi.co/api/v2/pokemon/25"),{
    method: "POST",
    headers: {
        "Content-Type": "application/json"  
    },
    body: JSON.stringify(pokemonGuardado)
}
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.log(error));