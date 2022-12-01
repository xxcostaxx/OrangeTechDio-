/*
Crie uma classe para representar pessoas.
Para cada pessoa teremos os atributos nome, peso e altura.
As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura));
Instancie uma pessoa chamada José que tenha 70kg de peso e 1,75 de altura e peça ao José para dizer o valor
do seu IMC; */

class Pessoa {
    nome;
    peso;
    altura;

    // CONSTRUTOR EÉ USADO SEMPRE QUANDO QUEREMOS OBRIGAR A INFORMACAO DESTES DADOS
    constructor(nome,peso,altura){
        this.nome = nome
        this.peso = peso
        this.altura = altura
    }
    calcularImc(/* NAO INFORMAMOS NADA PORQUE AS DADOS JA SAO DE PESSOA (DIFERENTE DO EXERCICIO OBJETO CARRO CONSUMO) */){
        return this.peso /(this.altura*this.altura);
    }
    classificaImc(){
        const imc = this.calcularImc();
        if (imc <18.5){
            return('Abaixo do Peso')
        } else if (imc >=18.5 && imc <= 25){
            return('Peso Normal')
        } else if (imc >=25 && imc <= 30){
            return('Acima do Peso')
        } else if (imc >=30 && imc <= 40){
            return('Obeso')
        } else { 'Obesidade Grave'
        }
    }
} 
const Reginaldo = new Pessoa ("Reginaldo",100,1.77);
console.log(Reginaldo)
console.log(Reginaldo.calcularImc())
console.log(Reginaldo.classificaImc())