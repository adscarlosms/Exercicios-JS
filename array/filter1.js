const produtos =[
    {nome: 'Notebook', preco:2500, fragil:true},
    {nome: 'iPad Pro', preco: 4500,  fragil:true},
    {nome: 'Copo de vidro', preco: 12.50,  fragil:true},
    {nome: 'Copo de plástico', preco: 20.00,  fragil:false}
]

console.log(produtos.filter(function(p){
    //no filter normalmente o array é menor pois foi filtrado
    return p.preco >2000
}))

const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil

console.log(produtos.filter(caro).filter(fragil))

