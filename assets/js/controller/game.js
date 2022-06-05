var context = document.getElementById("canvasGame").getContext("2d");
context.canvas.width = 300;
context.canvas.height = 530;

var character = {
  x: 100,
  y: 150,
  w: 50,
  h: 50,
};

var FPS = 60;

var gravity = 1.5;

//Variables de las imagenes:
var bird = new Image();
bird.src = "assets/images/bird.png";

var backgroundImg = new Image();
backgroundImg.src = "assets/images/background.png";

var northPipeImg = new Image();
northPipeImg.src = "assets/images/tuberiaNorte.png";

var southPipeImg = new Image();
southPipeImg.src = "assets/images/tuberiaSur.png";

var flootImg = new Image();
flootImg.src = "assets/images/suelo.png";

//Funciones para los Controles del personaje:
function keyDown() {
  character.y -= 25;
}

//Funcion del bucle para mostrar el personaje:
function loop() {
  //Utilizamos el clearRect para limpiar todo el rectangulo:
  context.clearRect(0, 0, 300, 530);

  //Dibujar el fondo con la imagen:
  context.drawImage(backgroundImg, 0, 0);

  //Dibujar el fondo del suelo o piso:
  context.drawImage(flootImg, 0, context.canvas.height - flootImg.height);

  //Dibujar el personaje:
  context.drawImage(bird, character.x, character.y);

  //Dibujar las tuberias:

  //Aplicar Gravedad al personaje:
  character.y += gravity;
}

setInterval(loop, 1000 / FPS);

window.addEventListener("keydown", keyDown);
