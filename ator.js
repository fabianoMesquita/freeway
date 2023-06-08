//variáveis ator
let xAtor = 100;
let yAtor = 368;
let colisao = false;

function mostraAtor(){
    image(imagemAtor, xAtor, yAtor, 25, 30);
}
function movimentaAtor(){
    if (keyIsDown(UP_ARROW)){
        yAtor -= 2;
    }
    if (keyIsDown(DOWN_ARROW)){
        yAtor += 2;
    }
    if (keyIsDown(RIGHT_ARROW)){
        xAtor += 2;
    }
    if (keyIsDown(LEFT_ARROW)){
        xAtor -= 2;
    }
}
//    hit = collideRectCircle(200, 200, 100, 150, mouseX, mouseY, 100);
function verificaColisao(){
    for(let i=0; i<imagemCarros.length; i++){
        colisao = collideRectCircle(xCarros[i], yCarros[i], comprimento, altura, xAtor, yAtor, 10);
        if (colisao){
            colidiu();
        }
    }
}
function colidiu(){
    yAtor = 368;
}