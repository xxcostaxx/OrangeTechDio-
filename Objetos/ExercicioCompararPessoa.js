




class SobreVc {
    nome;
    idade; 
    anoDeNascimento;  

    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2022 - idade;

    }
    // note que o metodo aqui nao recebe a palavra funcao
    descrever(){
        console.log(`Meu nome e ${this.nome} ${this.idade}`);
    }
}


const reginaldo = new SobreVc ("Reginaldo",40);
const lucas = new SobreVc ("Lucas", 14);

reginaldo.descrever();
lucas.descrever();

console.log(reginaldo);
