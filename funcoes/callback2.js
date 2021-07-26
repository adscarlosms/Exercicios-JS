const notas = [7.7, 6.5, 5.2, 3.6, 7.1, 9.0]

//Sem Callback
let notasBaixas = []
for (let i in notas){
    if (notas[i] < 7){
        notasBaixas.push(notas[i]) //push serve para add conteúdo no vetor
    }
}

console.log(notasBaixas)

//Com Callback, se a function retornar true o elemento será add no array
//sem precisar de for e de push. O FILTER É O CALLBACK
notasBaixas2 = notas.filter(function(nota){
    return nota <= 7
})

console.log(notasBaixas2)

//com arrow e callback
const notasBaixas3 = notas.filter(nota => nota < 7)

console.log(notasBaixas3)
