/* Crie um programa que sejaa capaz de percorrer uma lista e imprima 
cada numero par encontrado*/ 



let numeros = [10,2,5,6,3,5,78,8,5,4,5,7]

for (let i = 0; i < numeros.length; i++) {
    const element = numeros[i]; 
    if (element % 2 === 0 ){
        console.log(element)
    }
   
}

