require('./global')

console.log(MinhaApp.saudacao())

MinhaApp.nome = "mudei" //Não será possível mudar devido ao freeze no objeto que está sendo chamado
console.log(MinhaApp.nome)