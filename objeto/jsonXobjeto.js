//o objetivo é converter a linha de código abaixo para o formato JSON que é aceito em várias linguagens
const obj = {a:1, b:2, c:3, soma(){return a+ b + c}}
console.log(JSON.stringify(obj)) //O JSON exclui a função, ele pega os dados 

//Tirar do formato JSON para objeto
console.log(JSON.parse("{a:1, b:2, c:3}"))