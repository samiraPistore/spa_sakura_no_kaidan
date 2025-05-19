const express = require('express')
const bodyParser = require('body-parser')

const app = express()

//midleware para servir arquivos estáticos
app.use(express.static(__dirname))

//body-parser para servir arquivos estáticas
app.use(bodyParser.urlencoded({ extended:true }))
app.use(bodyParser.json())

const PORT = 8080
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`)
})
