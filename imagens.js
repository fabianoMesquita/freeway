//código das imagens
let imagemEstrada;
let imagemAtor;
let imagemCarro1;
let imagemCarro2;
let imagemCarro3

function preload(){
    imagemEstrada = loadImage("assets/estrada.png");
    imagemAtor = loadImage("assets/ator-1.png");
    imagemCarro1 = loadImage("assets/carro-1.png");
    imagemCarro2= loadImage("assets/carro-2.png");
    imagemCarro3= loadImage("assets/carro-3.png");
    imagemCarros = [imagemCarro1, imagemCarro2, imagemCarro3, imagemCarro1, imagemCarro2, imagemCarro3];
}