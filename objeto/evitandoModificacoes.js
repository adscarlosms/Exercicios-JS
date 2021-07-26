// Object.preventExtensions

const produto = Object.preventExtensions({
    nome: 'Teste', preco: 2.00, tag:'promocao'
})
console.log('Extensivel:', Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricao = 'Escolar branca'
delete produto.tag
console.log(produto)