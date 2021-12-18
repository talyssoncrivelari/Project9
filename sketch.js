function setup(){
  createCanvas(400,400);
  background("black");
  gameState = "serve";
  lifes = 3;
  box = createSprite(23.5,20,25,25);
  box.shapeColor = "white";
  finish = createSprite(377,380,20,20);
  finish.shapeColor = "white";
  gameState = "serve";
  parede1 = createSprite(50,150,5,400);
  parede1.shapeColor = "white";
  parede2 = createSprite(150,250,5,400);
  parede2.shapeColor = "white";
  parede3 = createSprite(250,150,5,400);
  parede3.shapeColor = "white";
  parede4 = createSprite(350,250,5,400);
  parede4.shapeColor = "white";
  paredeTop = createSprite(200,0,400,0.0001);
  paredeBottom = createSprite(200,400,400,0.0001);
  paredeLeft = createSprite(0,200,0.0001,400);
  paredeRight = createSprite(400,200,0.0001,400);
}
function draw(){
  if(gameState == "serve"){
    box.velocityX = 0;
    box.velocityY = 0;
    fill("white");
    text("Move DOWN to play!",5,390);
    if(keyIsDown(DOWN_ARROW)){
      gameState = "play";
    }
  }
  if(gameState == "play"){
    parede1.shapeColor = "black";
    parede2.shapeColor = "black";
    parede3.shapeColor = "black";
    parede4.shapeColor = "black";
    box.shapeColor = "white";
    if(keyIsDown(LEFT_ARROW)){
      background("blue");
      box.x = box.x - 5;
    }
    if(keyIsDown(RIGHT_ARROW)){
      background("red");
      box.x = box.x + 5;
    }
    if(keyIsDown(UP_ARROW)){
      background("yellow");
      box.y = box.y - 5;
    }
    if(keyIsDown(DOWN_ARROW)){
      background("green");
      box.y = box.y + 5;
    }
  }
  if(box.isTouching(finish)){
    gameState = "end";
    box.velocityX = 0;
    box.velocityY = 0;
    fill("white");
    //textSize(15);
    text("You win!",5,390)
  }
  if (box.isTouching(parede1)){
    lifes = lifes - 1;
    gameState = "serve";
    box.x = 23.5;
    box.y = 20;
  }
  if (box.isTouching(parede2)){
    lifes = lifes - 1;
    gameState = "serve";
    box.x = 23.5;
    box.y = 20;
  }
  if (box.isTouching(parede3)){
    lifes = lifes - 1;
    gameState = "serve";
    box.x = 23.5;
    box.y = 20;
  }
  if (box.isTouching(parede4)){
    lifes = lifes - 1;
    gameState = "serve";
    box.x = 23.5;
    box.y = 20;
  }
  if (box.isTouching(paredeTop)){
    lifes = lifes - 1;
    gameState = "serve";
    box.x = 23.5;
    box.y = 20;
  }
  if (box.isTouching(paredeBottom)){
    lifes = lifes - 1;
    gameState = "serve";
    box.x = 23.5;
    box.y = 20;
  }
  if (box.isTouching(paredeLeft)){
    lifes = lifes - 1;
    gameState = "serve";
    box.x = 23.5;
    box.y = 20;
  }
  if (box.isTouching(paredeRight)){
    lifes = lifes - 1;
    gameState = "serve";
    box.x = 23.5;
    box.y = 20;
  }
  if(lifes == 0){
    gameState = "gameOver";
    fill("white");
    text("You lost...",10,390);
  }
  fill("white");
  text(" "+ lifes,380,15);
  
  console.log(gameState);
  
  drawSprites();
}
//Oi professora kkk, então né, percebi que tenho um pouco de
//dificuldade com gameState, porque, eu crio os gameState tudo
//tranquilinho, certinho, mas confundo no lugar deles,
//digo isso pois quero criar fases em um tal jogo mas não
//consigo, buga e as vezes nem funciona, mas vou trabalhar isso,
//vou tentar achar meu erro. Mas ta aí o dever,
//não fiz nada demais, fiquei muito tempo mexendo com drivers
//desse notebook como falei, mas vou proucurar melhorar depois. 
//E ja tenho que começar o outro ja, ta muito curto meu tempo.
//Muito obrigado =)