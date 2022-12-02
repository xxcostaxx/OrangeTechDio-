// Imprimir a media das notas notas
// .push para colcar dados dentro da string
// .pop para retirar dados do finaldo da lista 
// .shift pra retirar itens do comeco da fila 
// .length mostra o tamanho da lista Ex. console.log(notas.length)

notas = [];
notas.push(5);
notas.push(7);
notas.push(8);
notas.push(2);
notas.push(5);
notas.push(8);

let soma = 0;
 
for (let i = 0; i < notas.length; i++) {
    const nota = notas[i];
    soma = soma + nota;
    
}
console.log("Sua media é " + soma / notas.length)
console.log("Soma das Suas notas é " + soma);

console.log(notas)