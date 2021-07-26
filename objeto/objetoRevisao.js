const produto = new Object
produto.nome = 'cadeira'
produto.preco = 220


delete produto.preco

console.log(produto)

const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario:{
        nome: 'Carlos',
        idade: 36,
        endereco :{
            logradouro: 'Rua ABC',
            numero: 7
        }
    },
    condutores:[{
        nome: 'junior',
        idade: 19
    }, {
        nome:'ana',
        idade:40
    }]
}

carro.proprietario.endereco.numero = 1000
console.log(carro)
