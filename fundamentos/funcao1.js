//Armazenando uma funcao dentro de uma variável

const imprimirSoma = function(a,b){
    console.log(a + b)
}

imprimirSoma(2,3)

//Armazenando uma funcao arrow(=>) em uma variável
const soma = (a,b) => {
    return a + b 
}

//retorno implícito
const subtracao = (a,b) => a - b 