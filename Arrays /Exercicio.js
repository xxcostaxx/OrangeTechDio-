/* Neste desafio, receba um número inteiro N, 
calcule e imprima o somatório de todos os números de N até 0.   */







function somatorio(n){
    if(n<=0){ 
    return 0; 
}else return n + somatorio(n-1) ; }
somatorio(10)
