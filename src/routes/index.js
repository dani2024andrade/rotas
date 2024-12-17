// Importa o módulo Express para criar rotas
const { Router } = require("express")

// Cria um objeto para gerenciar as rotas
const routes = Router()

// Importa as rotas definidas em 'users.routes.js'
const loginRouter = require("./login.routes.js")
const paramsRouter = require("./params.routes.js")
const queryRouter = require("./query.routes.js")
const standardRouter = require("./standard.routes.js")

// Define o uso das rotas em diferentes caminhos
routes.use("/message", standardRouter)  // Rota "/message"
routes.use("/message/:id/:user", paramsRouter)  // Rota com parâmetros
routes.use("/users", queryRouter)  // Rota "/users"
routes.use("/login", loginRouter)  // Rota "/login"

// Exporta as rotas definidas neste arquivo
module.exports = routes