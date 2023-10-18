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

let moneyNode = document.querySelector("#count span")
let buttonNode = document.querySelector("#count button")


buttonNode.addEventListener("click", () => {
  moneyNode.innerText++

  if (moneyNode.innerText >= 10) {
    console.log("llego a diez")
    // cambiamos estilos de forma directa

    // console.log(moneyNode.style)
    moneyNode.style.color = "green";
    moneyNode.style.backgroundColor = "black";

  }
})



let eventTitleNode = document.querySelector("#event-title")

eventTitleNode.addEventListener("mouseover", () => {
  console.log("cursor sobre el titulo")
  eventTitleNode.style.color = "red";
  eventTitleNode.style.backgroundColor = "purple";
  eventTitleNode.style.padding = "20px";
})

eventTitleNode.addEventListener("mouseleave", () => {
  console.log("cursor deja el titulo")
  eventTitleNode.style.color = "purple";
  eventTitleNode.style.backgroundColor = "black";
  eventTitleNode.style.padding = "10px";
})