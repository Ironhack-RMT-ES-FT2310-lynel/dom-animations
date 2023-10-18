console.log("probando")

// elementos de DOM
let gameBoxNode = document.querySelector("#game-box")
let ballNode = document.querySelector("#ball")

// variables globales
let ballX = 10;
let ballY = 10;
let ballSpeed = 2.2;
let gameBoxWidth = 400;
let gameBoxHeight = 600;
let isBallMovingRight = true;
let isBallMovingDown = true;

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
    isBallMovingDown = false
  } else if (ballX < 0) {
    // colision izquierda
    isBallMovingRight = true
  } else if (ballY < 0) {
    // colision arriba
    isBallMovingDown = true
  }

}

// recursion
function gameLoop() {
  // console.log("ejecutando recursion")

  ballMovement()
  ballWallCollisionCheck()

  // efecto de recursion
  requestAnimationFrame( gameLoop )

}
gameLoop()


// addEventListeners