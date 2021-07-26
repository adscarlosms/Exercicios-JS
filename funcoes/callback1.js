const fabricantes = ["mercedes", "audi", "bmw"]

function imprimir(nome, indice){
    console.log(`${indice + 1}. ${nome}`)
}

//Para cada SETOR do vetor irá chamar a função para cada elemento (loop), 
//Para cada elemento no forEach irá chamar de volta. O FOREACH É O CALLBACK
fabricantes.forEach(imprimir)