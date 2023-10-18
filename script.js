console.log("probando");

//innerText vs innerHTML
let containerNode = document.querySelector("#container");

console.log(containerNode.innerText); // contenido texto del nodo

console.log(containerNode.innerHTML); // un string que representa todas los elsementos de DOM dentro de este nodo

// containerNode.innerText = "<h1>patata</h1>"

// containerNode.innerHTML = "<h2>Titulo agregado <span>con un span adentro</span> </h2>"

let text = "con un span adentro";

containerNode.innerHTML = `
  <h2 id="title">Titulo agregado 
    <span>${text}</span> 
  </h2>
`;

containerNode.classList.add("blue");

// setInterval(() => {
//   containerNode.classList.toggle("blue")
// }, 1000)

let lightNode = document.querySelector(".light");
let h1LightNode = document.querySelector(".light h1");
let h2LightNode = document.querySelector(".light h2")

lightNode.classList.add("greenLight");
h1LightNode.innerText = "GREEN";

let timer = 0;

setInterval(() => {
  timer++
  // console.log(timer)

  if (timer === 4) {
    lightNode.classList.remove("greenLight");
    lightNode.classList.add("orangeLight");
    h1LightNode.innerText = "ORANGE"
  } else if (timer === 6) {
    lightNode.classList.remove("orangeLight");
    lightNode.classList.add("redLight");
    h1LightNode.innerText = "RED"
  } else if (timer === 9) {
    lightNode.classList.remove("redLight");
    lightNode.classList.add("greenLight");
    h1LightNode.innerText = "GREEN"
    timer = 0
  }

  if (h1LightNode.innerText === "GREEN") {
    h2LightNode.innerText = 4 - timer
  } else if (h1LightNode.innerText === "ORANGE") {
    h2LightNode.innerText = 6 - timer
  } else if (h1LightNode.innerText === "RED") {
    h2LightNode.innerText = 9 - timer
  }

}, 1000)



// EVENTOS


// seccion de elementos de DOM
let moneyNode = document.querySelector("#count span")
let buttonNode = document.querySelector("#count button")
let eventTitleNode = document.querySelector("#event-title")

let inputNode = document.querySelector("#name")
let listBtnNode = document.querySelector("#add-btn")
let listNode = document.querySelector("#output-list")

// funciones
const increaseAmount = () => {
  moneyNode.innerText++

  if (moneyNode.innerText >= 10) {
    console.log("llego a diez")
    // cambiamos estilos de forma directa

    // console.log(moneyNode.style)
    moneyNode.style.color = "green";
    moneyNode.style.backgroundColor = "black";

  }
}

const changeTitleOver = () => {
  console.log("cursor sobre el titulo")
  eventTitleNode.style.color = "red";
  eventTitleNode.style.backgroundColor = "purple";
  eventTitleNode.style.padding = "20px";
}

const changeTitleBack = () => {
  console.log("cursor deja el titulo")
  eventTitleNode.style.color = "purple";
  eventTitleNode.style.backgroundColor = "black";
  eventTitleNode.style.padding = "10px";
}

// Add Event Listeners
buttonNode.addEventListener("click", increaseAmount)
eventTitleNode.addEventListener("mouseover", changeTitleOver)
eventTitleNode.addEventListener("mouseleave", changeTitleBack)
listBtnNode.addEventListener("click", () => {
  console.log(inputNode.value)
  // en inputs, no hay innerText. Lo que que escribe el usuario se determina con el ".value"

  let newLiNode = document.createElement("li")
  newLiNode.innerText = inputNode.value
  listNode.append(newLiNode)

  // o...
  // listNode.innerHTML += `<li>${inputNode.value}</li>`

})


// Recursion

let control = 0;

function imprimirAlgo() {
  control++

  console.log("imprimiendo")

  if (control <= 200) {
    // imprimirAlgo() // recursion
    // requestAnimationFrame es una funcion que nos permite hacer el efecto de recursion en un tiempo delimitado
    requestAnimationFrame( imprimirAlgo ) // 60 veces por segundo
  }

}

// imprimirAlgo()



let gameBoxNode = document.querySelector("#game-box")
gameBoxNode.style.backgroundColor = "gray"
gameBoxNode.style.width = "400px"
gameBoxNode.style.height = "300px"
gameBoxNode.style.position = "relative" // quiero posicionar elementos internos dentro de esta caja

let boxNode = document.querySelector("#box")
boxNode.style.width = "30px"
boxNode.style.height = "30px"
boxNode.style.backgroundColor = "black"
boxNode.style.position = "absolute"
boxNode.style.top = "20px"
boxNode.style.left = "20px"

let gameControl = 0

let cubeX = 20;
let cubeY = 20;

function animateGame() {
  gameControl++
  console.log(gameControl)

  // movimiento horizontal
  cubeX++
  boxNode.style.left = `${cubeX}px`

  // movimiento vertical
  cubeY++
  boxNode.style.top = `${cubeY}px`

  if (gameControl <= 200) {
    // animateGame()
    requestAnimationFrame(animateGame)
  }

}

animateGame()