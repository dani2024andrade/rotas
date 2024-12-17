require("express-async-errors")
// Importa o módulo Express
const express = require("express")
const appErro = require("./utils/appErro")

// Importa as rotas definidas em 'index.js'
const fileRoutes = require("./routes/index.js")

// Cria uma instância do Express
const app = express()

// Habilita o middleware para processar JSON no corpo das requisições
app.use(express.json())

// Utiliza as rotas definidas em 'index.js'
app.use(fileRoutes)
app.use((erro, request, response, next) => {
    if(erro instanceof appErro) {
        return response.status(erro.statusCode).json({
            status: "Erro",
            message: erro.message
        })
    }
    console.error(erro)
    return response.status(500).json({
        status: "Error",
        message: "Internal server error" 
    })
})

// Define a porta na qual o servidor irá ouvir
const port = 5173

// Inicia o servidor na porta especificada
app.listen(port)