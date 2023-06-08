function setup(){
    createCanvas(600,400);
    somDaTrilha.loop();
    somDaTrilha.setVolume(0.1);
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

