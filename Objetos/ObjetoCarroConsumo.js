
/*
1) Crie uma classe para representar carros. 
Os carros possuem uma marca, uma cor e um gasto médio de 
combustível por Kilômetro rodado.
Crie um método que dado a quantidade de quilómetros e o preço do combustível nos dê o valor 
gasto em reais para realizar este percurso. 
*/



class Carro {
        marca;
        cor;
        consumMedio;         
        
// CONSTRUTOR EÉ USADO SEMPRE QUANDO QUEREMOS OBRIGAR A INFORMACAO DESTES DADOS
    constructor(marca, cor, consumMedio){
        this.marca = marca
        this.cor = cor
        this.consumMedio = consumMedio          
        //this.valorCombustivel = valorCombustivel
        //this.distanciPercorrida = distanciPercorrida;
        //this.Valorgasto = Valorgasto
    }       
    calcularGasto(distanciPercorrida, precoCombustivel){
        return distanciPercorrida * this.consumMedio * precoCombustivel
        
     
}

}
const fordka = new Carro ("fordka","vermelho",1/10)
console.log(fordka.calcularGasto(100,3.70));
console.log(fordka)



