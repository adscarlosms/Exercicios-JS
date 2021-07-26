//Herança

const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    velMax: 200
}

console.log(ferrari.__proto__) //Neste ponto será apresentada a msg que o prototype está null ou vazio
console.log(ferrari.__proto__ === Object.prototype) // Object é o mais alto nível, é a raiz da herança que vem do Node
console.log(volvo.__proto__ === Object.prototype)