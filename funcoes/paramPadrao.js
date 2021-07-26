//Estratégia 1 para gerar valor padrão
function soma1(a,b,c){
    a = a || 1
    b = b || 1
    c = c || 1
    return a+b+c

    //pode testar se o valor não é numérico==>  a = isNaN(a) ? 1 : a
}

console.log(soma1(3)) //irá retornar 5

//Valor padrão do es2015
function soma2(a=1,b=2,c=3){
    return a+b+c
}

console.log(soma2())