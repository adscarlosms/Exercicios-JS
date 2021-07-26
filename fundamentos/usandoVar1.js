//Conceito de escopo, no javascript independente do scopo ela ficará visível mesmo fora do bloco
{{{{var sera = 'será???'}}}}

console.log(sera)

function teste(){
    var local = 123
    console.log(local)
}

//Desta forma não dá certo porque a variável local se encontra no escopo de uma function
teste()
console.log(local)

/*
Sendo assim, uma variável declarada globalmente ela pode ser
sobrescrita e isso não é seguro porque no meio da execução pode 
dar algum erro devido a essa subscrição */