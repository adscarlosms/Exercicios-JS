const pai = {nome: 'Pedro', corCabelo:'Preto'}

const filha1 = Object.create(pai) // object.create define que o objeto superior é o que está sendo passado como parametro
filha1.nome = 'Ana'
console.log(filha1.nome,filha1.corCabelo)//Mudei o nome e aproveitei o conteúdo do atributo corCabelo

const filha2 = Object.create(pai, {
   nome: {value: 'Bia', writable:false, enumerable:true} // nome Bia, não aceita ser sobrescrito, aceita ser enumerado 
})

console.log(filha2.nome)
filha2.nome = 'Carla'
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)


console.log(Object.keys(filha1))

//Para definir se uma propriedade veio por herança ou é nativa do objeto
for( let key in filha2){
    filha2.hasOwnProperty(key) ?
        console.log(key) : console.log(`Por herança  ${key}`)
}