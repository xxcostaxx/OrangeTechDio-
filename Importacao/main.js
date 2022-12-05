//const funcoes = require ("./funcoes-auxiliares");
const {gets, print} = require ('./funcoes-auxiliares')


const quantidadeDeAlunos = gets()
let maiorValorEntrado = 0 

for (let i = 0; i < quantidadeDeAlunos; i++) {
    const numeroSorteado = gets();
    if (numeroSorteado > maiorValorEntrado){
        maiorValorEntrado = numeroSorteado
    }
    
}

print(maiorValorEntrado)