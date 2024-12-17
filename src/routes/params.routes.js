const { Router } = require("express")
const paramsRoutes = Router()
// Define uma rota GET para "/message/:id/:user" que responde com informações dos parâmetros
paramsRoutes.get("/", (request, response) => {
    const { id, user } = request.params
    response.send(`Passando um parâmetro no caminho: Mensagem ID: ${id} Para o usuário: ${user}`)
})
module.exports = paramsRoutes