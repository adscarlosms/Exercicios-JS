// Função em JS é First-Class Object
//Higher-order function

//Criar de forma literal
function fun1() {

}

//Armazenar em uma variável
 const fun2 = function() {}

 //Armazenar dentro de um array
const array = [function(a,b){return a + b}, fun1,fun2]
console.log(array[0](2,3))

//Armazenar em um atributo de objeto
const obj = {}
obj.falar = function () {return 'Opa'}
console.log(obj.falar())

//como passar função como parametro para outra função
function soma(a,b){
    return function(c){
        console.log(a+b+c)
    }
}

soma(2,3)(4)
