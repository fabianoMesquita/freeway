let imagemEstrada;
let imagemAtor;
let imagemCarro1;

//variáveis ator
let xAtor = 100;
let yAtor = 368;

//variáveis movimentação carro
let xCarro = 500;

function preload(){
    imagemEstrada = loadImage("assets/estrada.png");
    imagemAtor = loadImage("assets/ator-1.png");
    imagemCarro1 = loadImage("assets/carro-1.png");
}

function setup(){
    createCanvas(600,400);
}
function draw(){
    background(imagemEstrada);
    image(imagemAtor, xAtor, yAtor, 25, 30);
    image(imagemCarro1, xCarro, 40, 60, 40);
    movimentaCarro();
}
function movimentaCarro(){
    xCarro -= 2;
}

