const valores = [7.7, 8.9,6.3,9.2]
console.log(valores[0],valores[3])

//adicionando ou lendo um item no vetor
valores[4] = 10
console.log(valores)

//quantidade de setores no vetor
console.log(valores.length)

//adicionando itens e setores em um vetor
valores.push({id:3},false,null, 'teste')
console.log(valores)

//retirar o ultimo valor
valores.pop()

//retirar um setor específico do array
delete valores[0]
