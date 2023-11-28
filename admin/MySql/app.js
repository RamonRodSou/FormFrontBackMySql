const bancoD = require ('./conection')
const express = require ('express')
const app = express()
const body = require ('body-parser')
const cors = require('cors');


function cadastraUser (req) {
    const body = req.body
    return [body.nome, body.email]
}


function atualizarUser (req) {
    const body = req.body
    return [body.nome, body.email, req.params.id]
}

app.use(cors());
app.use(body.json())

// Mostrando todos os clientes
app.get('/listar', function (req, res){
    
    const select = 'SELECT * FROM clientes'
    bancoD.query(select ,function (err, result) {

        if(err){ 
            console.log('Erro no Banco de dados: ', err);
        }else {
            res.send(result)
        }})
})


app.get('/usuario/:id', function (req, res){
    
    const select = 'SELECT * FROM clientes WHERE id = ?'
    bancoD.query(select, [req.params.id] ,function (err, result) {

        if(err){ 
            console.log('Erro no Banco de dados: ', err);
        }else {
            res.send(result)
        }})
})


app.post('/cadastrar', function (req, res){
    
    const insert = 'INSERT INTO clientes SET nome=?, email=?'
    
    bancoD.query(insert, cadastraUser (req) ,function (err, result) {

        if(err){ 
            console.log('Erro no Banco de dados: ', err);
        }else {
            res.send(result)
        }})
})

app.put('/atualizar/:id', function (req, res){
    
    const put = 'UPDATE clientes SET nome=?, email=? WHERE id=?'
    bancoD.query(put, atualizarUser(req), function (err, result) {

        if(err){ 
            console.log('Erro no Banco de dados: ', err);
        }else {
            res.send(result)
        }})
})

app.delete('/delete/:id', function (req, res){
    
    const del = 'DELETE FROM clientes WHERE id=?'
    bancoD.query(del ,[req.params.id], function (err, result) {

        if(err){ 
            console.log('Erro no Banco de dados: ', err);
        }else {
            res.send(result)
        }}) 
})


app.listen(8080, function (){
    console.log("O servidor está rodando na porta 8080")
})

