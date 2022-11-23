

//////////////// *              CLASSES              *////////////////////

class SobreVc {
    nome;
    idade;
 
    // note que o metodo aqui nao recebe a palavra funcao
    descrever(){
        console.log(`Meu nome e ${this.nome} ${this.idade}`);
    }
}
const reginaldo = new SobreVc ();
reginaldo.nome = "Reginaldo da Costa";
reginaldo.idade = 40;

const lucas = new SobreVc ();
lucas.nome = "lucas"
lucas.idade = 14


console.log(reginaldo, lucas)

