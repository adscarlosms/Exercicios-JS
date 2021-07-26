//Usando a notação Literal
const obj1 = {}

//Através da declaração da linguagem
const algo = new Object

//Funções construtoras
function Produto(nome, preco, desc) {
    this.nome = nome
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }
}

const p1 = new Produto('Caneta', 8.00, 0.15)
const p2 = new Produto('Notebook0', 3000, 0.25)
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())

//função factory
function criarFuncionario(nome, salarioBase, faltas){
    return{
        nome,
        salarioBase,
        faltas,
        getSalario(){
            return (salarioBase/30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario('Joao', 7000, 4)
const f2 = criarFuncionario('Maria', 11500, 1)
console.log(f1.getSalario(), f2.getSalario())

//Uma função famosa que retorna objeto
const fromJSON = JSON.parse('{"info": "Sou um JSON que veio do webservice"}')
console.log(fromJSON)
