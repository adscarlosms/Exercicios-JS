Array.prototype.forEach2 = function(callback){
    for(let i=0; i<this.length;i++){
        callback(this[i],i,this)
    }
}

const aprovados = ['Aghata', 'Tom', 'Bill', 'Dan']


//O índice sempre é passado como segundo parametro e não como primeiro
aprovados.forEach2(function(nome, indice){
    console.log(`${indice + 1}) ${nome}`)
})