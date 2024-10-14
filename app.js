//importar modulo

const express = require('express')

//importar modulo mysql
const mysql =require ('mysql2')

//App
//tudo que formos utilizar do express basta referenciar usando o app
const app = express()

//configuraçao de conexcao
const conexao = mysql.createConnection({
    host:'localhost',
    user: 'root',
    password: 'lipe2299',
    database: 'projeto'
})

//teste de conexao com retorno de erros
conexao.connect(function(erro){
    if(erro) throw erro;
    console.log('Conexão efetuada com sucesso' )
})

//Rota Hello World
//a
//req = requisiçao res=resposta 
 app.get('/', function(req, res){
    res.write('Hello World')
    res.end()
 })

 // Servidor
 app.listen(8080)