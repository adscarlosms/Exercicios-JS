const aprovados = ['Aghata', 'Tom', 'Bill', 'Dan']


//O índice sempre é passado como segundo parametro e não como primeiro
aprovados.forEach(function(nome, indice){
    console.log(`${indice + 1}) ${nome}`)
})

aprovados.forEach(nome => console.log(nome))