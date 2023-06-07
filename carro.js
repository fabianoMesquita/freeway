//variáveis carro1
let xCarro = 600;
let yCarro = 40;
let velocidadeCarro =4;

//variáveis carro2
let xCarro2 = 600;
let yCarro2 = 100;
let velocidadeCarro2 = 5;

//variáveis carro3
let xCarro3 = 500;
let yCarro3 = 150;
let velocidadeCarro3 = 7;


function mostraCarro(){
    image(imagemCarro1, xCarro, yCarro, 60, 40);
    image(imagemCarro2, xCarro2, yCarro2, 60, 40);
    image(imagemCarro2, xCarro3, yCarro3, 60, 40);
}

function movimentaCarro(){
    xCarro -= velocidadeCarro;
    xCarro2 -= velocidadeCarro2;
    xCarro3 -= velocidadeCarro3;
}

function voltaPosicaoInicialCarro(){
    if (xCarro < -60){
        xCarro = 600;
    }
    if (xCarro2 < -60){
        xCarro2 = 600;
    }
    if (xCarro3 < -60){
        xCarro3 = 600;
    }
}



