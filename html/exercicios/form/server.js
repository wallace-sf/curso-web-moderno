const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }))

app.post('/usuarios', (req, rep) => {
    console.log(req.body)
    rep.send('<h1>Parabéns</h1>')
})

app.post('/usuarios/:id', (req, rep) => {
    console.log(req.params.id)
    console.log(req.body)
    console.log('Amigo estou aqui') 
    rep.send('<h1>Parabéns. Usuário alterado</h1>')
})

app.listen(3003)