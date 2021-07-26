const nome = 'Rebeca'
const concatenacao = 'Olá' + nome + "!"

// Para esse caso utiliza crase para delimitar!!
const template = `
                Olá
                ${nome}!`

console.log(concatenacao, template)

//Serve para interpolar strings com argumentos numéricos
console.log(`1 + 1 = ${1+1}`)
