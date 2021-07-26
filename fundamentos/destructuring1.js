// Novo recurso do ES 2015

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco:{
        logradouro: 'RUA ABC',
        numero: 777
    }
}

/*  {o que está aqui} é o destructuring*/
const{nome, idade} = pessoa
console.log(nome,idade)

const{nome: n, idade: i} = pessoa
console.log(n,i)

const{endereco:{logradouro, numero}} = pessoa
console.log(logradouro,numero)

