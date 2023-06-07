//variáveis ator
let xAtor = 100;
let yAtor = 368;

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