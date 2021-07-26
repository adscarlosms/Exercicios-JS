let comparaComThis = function (param) {
    console.log(this === param)
}

//Esta função retorna true porque o "this" mexe diretamente no contexto global
comparaComThis(global)

const obj = {}
//O bind irá fixar, ancorar com obj e não mais com o global, portanto, retornará false para global e true para obj
comparaComThis =comparaComThis.bind(obj)
comparaComThis(global)
comparaComThis(obj)

//Neste caso, o this vai pegar o parâmetro corrente, ou seja, que está dentro da função arrow, portanto, irá retornar false para global
let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global)

/*O que é mais forte aqui é a Arrow function comparaComThisArrow que manterá seu valor 
*se tornando mais forte que o bind!! ou seja, o bind não consegue prevalecer sobre a Arrow function
*/
comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj)


//A vantagem da arrow é que o this está associado àquela função que foi definida, portanto com Arrow, é mais forte