console.log("probando")

// elementos de DOM
let gameBoxNode = document.querySelector("#game-box")
let ballNode = document.querySelector("#ball")
let paddleNode = document.querySelector("#paddle")

// variables globales
let ballX = 10;
let ballY = 10;
let ballSpeed = 4;
let gameBoxWidth = 400;
let gameBoxHeight = 600;
let isBallMovingRight = true;
let isBallMovingDown = true;

let paddleX = 140;
let paddleY = 550;
let paddleSpeed = 25;
// CADA VEZ QUE ACTUALIZAMOS UNA VARIABLE DE POSICION O TAMAÑO DEBEMOS ACTUALIZAR EL DOM => top, left width, height

let isGameOn = true;

// funciones
function ballMovement() {
  if (isBallMovingRight === true) {
    ballX += ballSpeed; // modificar la variable de posicion
  } else {
    ballX -= ballSpeed; // modificar la variable de posicion
  }
  ballNode.style.left = `${ballX}px`  // actualizar la posicion en el DOM
  if (isBallMovingDown === true) {
    ballY += ballSpeed;
  } else {
    ballY -= ballSpeed;
  }
  ballNode.style.top = `${ballY}px`
}

function ballWallCollisionCheck() {

  if (ballX + 30 > gameBoxWidth) {
    // colision derecha
    isBallMovingRight = false;
  } else if (ballY + 30 > gameBoxHeight) {
    // colision abajo
    // isBallMovingDown = false
    isGameOn = false;
    window.alert("Perdiste :(")
  } else if (ballX < 0) {
    // colision izquierda
    isBallMovingRight = true
  } else if (ballY < 0) {
    // colision arriba
    isBallMovingDown = true
  }

}

function ballPaddleCollision() {

  if (
    ballY + 30 > paddleY && 
    ballX > paddleX && 
    ballX + 30 < paddleX + 120
  ) {
    console.log("la pelota paso la paleta")
    isBallMovingDown = false; // rebota hacia arriba
  }

}

// recursion
function gameLoop() {
  // console.log("ejecutando recursion")

  ballMovement()
  ballWallCollisionCheck()
  ballPaddleCollision()

  // efecto de recursion
  if (isGameOn === true) {
    requestAnimationFrame( gameLoop ) // lo que genera la recursion
  }

}
gameLoop()


// addEventListeners
document.addEventListener("keydown", (event) => {
  // console.log("presionando una tecla")
  // event es TODA la informacion del evento que está ocurriendo
  console.log(event.code)
  if (event.code === "KeyA") {
    // moviendo a la izquierda
    // Pueden condicionar cuando ocurre el movimiento.
    // si la paleta ya salio del gameBox, entonces no la puedan mover
    paddleX -= paddleSpeed;
    paddleNode.style.left = `${paddleX}px`
  } else if (event.code === "KeyD") {
    // moviendo a la derecha
    paddleX += paddleSpeed;
    paddleNode.style.left = `${paddleX}px`
  }
})



// BONUS

/* 

- Que el movimiento de la paleta sea automatico
- Que la paleta no salga del canvas
- Que la velocidad de la pelota aumente con cada colision
- Que los colores la pelota y paleta cambien con cada colision o con tiempo
- Que la paleta se haga más pequeña a medida que el juego avanza
- Que reinicie el juego
- tener un contador numero que aumente con cada colision (score)

*/