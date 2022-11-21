/*
3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento. 
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

Código Condição de pagamento:
- À vista Débito, recebe 10% de desconto;
- À vista no Dinheiro ou PIX, recebe 15% de desconto;
- Em duas vezes, preço normal de etiqueta sem juros;
- Acima de duas vezes, preço normal de etiqueta mais juros de 10%; 
*/

const preco = 100;
const formaDePagamento = 2;
const parcela = [3,4,5,6,7,8,9];


const valorDebitoAvista = 10;
const valorPixAvista = 15;
const duasX = 0;
let acrescimoJuros = 10;

const descontoDebitoAvista = preco - (preco / 100) * valorDebitoAvista ;
//console.log (descontoDebitoAvista)
const descontoPixAvista = preco - (preco / 100) * valorPixAvista  ;
//console.log (descontoPixAvista)
const acrecimoMais2x = (preco / 100) * acrescimoJuros + preco;
//console.log (acrecimoMais2x)

if (formaDePagamento==="Debito"){
    console.log (descontoDebitoAvista)
}
else if (formaDePagamento==="Pix"){
    console.log(descontoPixAvista)
}
else if(formaDePagamento === 3){
    console.log(acrecimoMais2x)
}
if (formaDePagamento==2){
    console.log(preco)
}