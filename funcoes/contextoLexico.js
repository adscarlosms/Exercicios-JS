const valor = 'Global'

function minhaFuncao(){
    console.log(valor)
}

function exec(){
    const valor = 'Local'
    minhaFuncao()
}

exec()

/*Primeiramente, a função exec irá declarar uma variável valor dentro dela e em seguida chamar minhaFuncao()
* quando executar exec a variável valor que irá ser considerada será a que foi declarada fora do escopo
* Isso porque, o javascript segue um fluxo respeitando as chamadas, por isso tem a necessidade de usar this ou bind para determinar 
* o que um objeto irá anexar a ele
*/
