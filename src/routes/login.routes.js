// Importa o módulo Express para criar rotas
const { Router } = require("express")
const loginController = require("../controllers/loginController.")
// Cria um objeto para gerenciar as rotas relacionadas aos usuários
const loginRoutes = Router()
function myMiddleware (request, response, next) {
    console.log("Entrei no midlleware")
    if (!request.body.isAdmin) {
        return response.json({message : "user unauthorized"})
    }
    next()
}
const classLoginController = new loginController()

// Define uma rota POST para "/login" que responde com os dados do corpo da requisição em JSON
loginRoutes.post("/", myMiddleware, classLoginController.create)

// Exporta as rotas definidas neste arquivo
module.exports = loginRoutes