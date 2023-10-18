console.log("probando")

//innerText vs innerHTML
let containerNode = document.querySelector("#container")

console.log(containerNode.innerText) // contenido texto del nodo

console.log(containerNode.innerHTML) // un string que representa todas los elsementos de DOM dentro de este nodo

// containerNode.innerText = "<h1>patata</h1>"

// containerNode.innerHTML = "<h2>Titulo agregado <span>con un span adentro</span> </h2>"

let text = "con un span adentro"

containerNode.innerHTML = `
  <h2 id="title">Titulo agregado 
    <span>${text}</span> 
  </h2>
`

containerNode.classList.add("blue")

// setInterval(() => {
//   containerNode.classList.toggle("blue")
// }, 1000)