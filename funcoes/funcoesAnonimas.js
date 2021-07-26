const soma = function(x,y){
    return x + y
}

const imprimirResultado = function (a,b, operacao = soma){
    console.log(operacao(a,b))
}

imprimirResultado(3,4)

imprimirResultado(3,4,soma)
imprimirResultado(3,4, function(x,y){
    return x - y
})

//Objeto pessoa recebendo uma função anonima
const pessoa = {
    falar : function(){
        console.log('Cromaat')
    }
}

pessoa.falar()