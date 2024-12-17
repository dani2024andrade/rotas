const { Router } = require("express")
const queryRoutes = Router()
// Define uma rota GET para "/users" que responde com informações de consulta de página e limite
queryRoutes.get("/", (request, response) => {
    const { page, limit } = request.query
    response.send(`Página: ${page}. Mostrar: ${limit}`)
})
module.exports = queryRoutes