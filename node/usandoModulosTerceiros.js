const _ = require('lodash')
//usando a biblioteca de terceiros está sendo executado um código randomico de 2 em 2 segundos
setInterval(() => console.log(_.random(1,1000)), 2000)


//em seguida foi instalada a seguinte biblioteca >>  npm i -g nodemon
//Serve para executar o código em tempo de execução com alterações
