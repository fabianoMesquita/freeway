//variáveis ator
let xAtor = 100;
let yAtor = 368;
let colisao = false;
let meusPontos = 0;

function mostraAtor(){
    image(imagemAtor, xAtor, yAtor, 25, 30);
}
function movimentaAtor(){
    if (keyIsDown(UP_ARROW)){
        yAtor -= 2;
    }
    if (keyIsDown(DOWN_ARROW)){
        if (verificaYAtor()){
         yAtor += 2;
        }
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
            voltaPosicaoinicialY();
        if (pontoMaiorQueZero()){
            meusPontos -=1;
            }
        }
    }
}
function voltaPosicaoinicialY(){
    yAtor = 368;
}
function incluiPontos(){
    textAlign(CENTER);
    textSize(25);
    fill(color(255, 240, 60));
    text(meusPontos, width / 5, 27)
}
function marcaPonto(){
    if(yAtor<10){
        meusPontos +=1;
        voltaPosicaoinicialY();
    }
}
function pontoMaiorQueZero(){
    return meusPontos > 0;
}
function verificaYAtor(){
    return yAtor < 368
}