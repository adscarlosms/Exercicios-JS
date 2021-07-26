//IIFE - expressão de função  que se auto invoca
//Tudo que será feito dentro dessa função não afetará o escopo global
(function(){
    console.log('Será executado na hora!!')
    console.log('Foge do escopo mais abrangente')
})()


