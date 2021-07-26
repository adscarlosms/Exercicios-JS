//pessoa aponta para endereço de memória 
const pessoa = {nome: 'João'}
pessoa.nome = 'Pedro'
console.log(pessoa)

//Se fosse acessar este objeto como uma constante não daria certo
//pessoa = {nome: 'Ana'}

// Uma vez que o objeto está congelado é impossível alterar conteúdo
Object.freeze(pessoa)