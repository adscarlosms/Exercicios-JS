let dobro = function(a){
    return 2*a
}

//com arrow
dobro = (a) => {
    return 2 * a
}

//O retorno é implícito
dobro = a => 2 * a
console.log(dobro(Math.PI))

//criar função arrow sem parâmetro
ola = () => 'Olá'
ola = _ => 'Olá'