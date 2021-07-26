//Usando o modulo do nodes commons.js
//os códigos possíveis de executar são aqueles que foram exportados
//é possível instalar módulos de terceiros através do comando no terminal>>  npm i lodash por exemplo
const moduloA = require('./moduloA')
const moduloB = require('./moduloB')

console.log(moduloA.ola)
console.log(moduloA.bemVindo)
console.log(moduloA.ateLogo)
console.log(moduloA)

console.log(moduloB.bomDia)
console.log(moduloB.boaNoite())
console.log(moduloB)