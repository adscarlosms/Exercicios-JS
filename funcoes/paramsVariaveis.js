//É possível passar quantos parametros quiser através de argments 
function soma(){
    let soma = 0
    for(i in arguments){
        soma += arguments[i]
    }
    return soma
}

console.log(soma(10,10,10))