const alunos = [
    {nome: 'João', nota:7.3, bolsista:false},
    {nome: 'Maria', nota:9.2, bolsista:true},
    {nome: 'João', nota:7.3, bolsista:false},
    {nome: 'Ana', nota:7.3, bolsista:true},
]

const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual){
    console.log(acumulador,atual)
    return acumulador + atual
})

console.log(resultado)