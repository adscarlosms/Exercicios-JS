let aprovados = new Array('Bia','Carlos','Ana')
console.log(aprovados)

aprovados = ['Bia','Carlos','Ana']


aprovados[3] = 'Paulo'
//push serve para add um novo no fim do array
aprovados.push('Abia')
//length informa quantos setores tem o array
console.log(aprovados.length)
//Sort classifica por ordem alfabética
aprovados.sort()
//apaga um elemento do array
delete aprovados[0]
//a partir do índice 1 exclui 
aprovados.splice(1,2, 'Elemento1','Elemento2')
console.log(aprovados)