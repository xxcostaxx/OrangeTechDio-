/* Definições de Objetos
Um Objeto eé uma colecão dinamica de chave e valores 
Ex. abaixo a constante você é um objeto
*/ 

const voce = {
    nome: 'Reginaldo',
    sobrenome: 'da Costa',
    

    /*Criando uma 'Função' dentro de um objeto mais conhecido com metodo*/
    descrever: function(){
        console.log(`Meu nome e ${this.nome} ${this.sobrenome}`)
    }
    // colocando o this ele assume o objeto voce 

};

voce.descrever();


