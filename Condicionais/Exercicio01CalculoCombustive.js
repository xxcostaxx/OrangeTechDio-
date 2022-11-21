/* FACA UM PROGRAMA PARA CALCULAR O VALOR DE UMA distanciaViagem.
VECE TERA 5 VARIAVEIS 
    1. Preco do etanol
    2. Preco da gasolina 
    3. O tipo de Combustivel
    4. Gasto Medio de Combustivel
    5. Distancia em Km da Viagem 
    
    
    Imprima no console o valor que sera gasto para realizar a viagem*/
    const distancia = 100;
    const precoAlcool = 3.69;
    const precoGasolina = 4.80;

    const tipoCombustivel = "alcool1";
    
    const consumoMedioCarroGas = 13;
    const consumodMedioCarroAlcool = 10 ;
   
    const litrosConsumidosNoAlcool = distancia/consumodMedioCarroAlcool; 
    const litrosConsumidosNaGasolina = distancia/consumoMedioCarroGas;
    const valorGastoAlcool = litrosConsumidosNoAlcool*precoAlcool;
    const valorGastoGasolina = litrosConsumidosNaGasolina*precoGasolina;
  
if (tipoCombustivel === "alcool"){
    console.log(valorGastoAlcool)
} else {
    console.log(valorGastoGasolina);
}




