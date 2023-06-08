function setup(){
    createCanvas(600,400);
}
function draw(){
    background(imagemEstrada);
    mostraAtor();
    mostraCarro();
    movimentaCarro();
    movimentaAtor();
    voltaPosicaoInicialCarro();
    verificaColisao();
    incluiPontos();
    marcaPonto();
    pontoMaiorQueZero();
    verificaYAtor();
}

