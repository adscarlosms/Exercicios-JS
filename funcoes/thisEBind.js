/*Foi criado um objeto pessoa
 * e dentro dele foi criado uma variavel saudacao
 * dentro do método falar tem uma mensagem acessando com "this" o conteúdo do objeto
 * sem o "this" isso não seria possível
 */

const pessoa = {
    saudacao: 'Bom dia!',
    falar(){
        console.log(this.saudacao)
    }
}

pessoa.falar()
//Não poderia chamar a função falar diretamente

const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()
//Utilizando o "bind" é possível amarrar o contexto inteiro