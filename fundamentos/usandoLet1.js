var numero = 1
{
    let numero = 2
    console.log('dentro = ', numero)
}

console.log('fora = ', numero)

//com o let o que prevalece é o resultado global
//mas dentro do escopo ela preserva o que for atribuido a ela
