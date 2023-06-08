//Lista dos variáveis dos carros
let xCarros = [600, 600, 600, 0, 0, 0];
let yCarros = [40, 100, 150, 210, 265, 320];
let velocidadeCarros = [6, 5.5, 7, 6.6, 7.9, 6];
let comprimento = 60;
let altura = 40;


function mostraCarro(){
    for(let i=0; i < imagemCarros.length; i += 1){
        image(imagemCarros[i], xCarros[i], yCarros[i], comprimento, altura);
    }
}

function movimentaCarro(){
    for (i=0; i< imagemCarros.length; i+=1){
        xCarros[i] -= velocidadeCarros[i];
    }
}

function voltaPosicaoInicialCarro(){
    for(i=0; i<imagemCarros.length; i+=1){
        if (xCarros[i] < -60){
            xCarros[i] = 600;
        }
    }
}