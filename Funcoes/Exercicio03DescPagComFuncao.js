/*
3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento. 
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

Código Condição de pagamento:
- À vista Débito, recebe 10% de desconto;
- À vista no Dinheiro ou PIX, recebe 15% de desconto;
- Em duas vezes, preço normal de etiqueta sem juros;
- Acima de duas vezes, preço normal de etiqueta mais juros de 10%; 
*/
function aplicarDesconto(forma,valor){
        if(forma === "debito" ){
            const descontar10 = (valor)-(valor / 100 )*10
            console.log(descontar10);

        }else if (forma === "pix"){
            const descontar15 = (valor)-(valor / 100 )*15
            console.log(descontar15);

       }else if (forma >='3' ){
            const acrescimo = (valor)+(valor / 100 )*10
            console.log(acrescimo)
       } else {console.log(valor)}     
}
aplicarDesconto ('9', 100);





function incrementarJuros(valor, percentualDeJuros) {
    const incremento = (percentualDeJuros / 100) * valor;
    return valor + incremento;
}
incrementarJuros(100,10)






