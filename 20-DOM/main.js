//DOM - Document Object Model

//Get element by ID

const caja = document.getElementById("caja");
console.log(caja);


//Modificar  caracteristicas de un elemento selecionado 

// caja.innerHTML = "<h2>Hola soy Francisco</h2>";
// caja.style.background="ligthblue";
// caja.style.maxWidth="50%";
// caja.style.margin="35 px";
// caja.style.textAlign="center";
// caja.style.fontFamily="Arial";

caja.classList.add("cajita")
caja.classList.add("cajaza")
caja.classList.add("cajon")

function cambiarColor(color, radious){
    caja.style.background = color;
    caja.style.borderRadius = radious;
}

console.log(caja.innerText)

//GetElementByClassName

let articulos = document.getElementById("articulo")

for(let i = 0; i < articulos.length; i++){
    articulos[i].style.border = "1ox solid #ccc"
    articulos[i].style.margin = "20px"
    articulos[i].style.padding = "20px"
}