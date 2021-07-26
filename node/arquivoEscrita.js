const fs = require('fs') //require no módulo do node

const produto = {
    nome:'Celular',
    preco: 1500,
    desconto: 0.15
}

//Para gravar um arquivo texto no formato json tratando qualquer erro
fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto), err =>{
    console.log(err || 'Arquivo salvo!')
})