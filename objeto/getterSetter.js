//Get serve para ler valores nas variáveis e Set para atribuir valores a elas
const sequencia = {
    _valor: 1, //convenção de que essa variável n pode ser alterada
    get valor(){return this._valor++ },
    set valor(valor){
        if(valor > this._valor)
            this._valor = valor
        }    
}

console.log(sequencia.valor,sequencia.valor)