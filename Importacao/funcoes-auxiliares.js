/* 
Uma Sala contem 5 alunos e para cada um foi sorteado um numero 1 - 100 
faca um programa que receba os numeros sorteados para os alunos e mostre o maior numero sorteado 

    Entrada:
        5
        50
        10
        98
        23
        

    Saída:
        
        */  


        
const entradas = [5,50,10,98,23]
let i = 0;

function gets (){
    const valor = entradas [i];
    i++;
    return valor;

}

function print (texto){ 
    console.log(texto);
}
//module.exports.gets = gets;
module.exports = { gets, print };