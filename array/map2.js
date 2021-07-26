const carrinho = [
    '{"nome": "Borracha", "preco":4.00}',
    '{"nome": "Borracha", "preco":15.00}',
    '{"nome": "Borracha", "preco":41.00}',
    '{"nome": "Borracha", "preco":8.00}'
]

 // Retornar um array apenas com os preços
 const paraObjeto = json => JSON.parse(json)
 const apenasPreco = produto => produto.preco 

 const resultado = carrinho.map(paraObjeto).map(apenasPreco)
 console.log(resultado)

