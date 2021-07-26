const sequence = {
    _id: 1,
    get id() {return this._id++}    
}

const produtos = {}

function salvarProdutos(produtos) {
    if(!produtos.id) produtos.id = sequence.id
        produtos[produtos.id] = produto
    return produto    
}

function getProduto(id){
    return produtos[id] || {}
}

function getProdutos(){
    return Object.values(produtos)
}

module.exports = {salvarProduto, getProduto,getProdutos}