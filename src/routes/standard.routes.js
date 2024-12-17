const { Router } = require("express")
const userRoutes = Router()
// Define uma rota GET para "/message" que responde com "Olá, você está na rota /message"
userRoutes.get("/", (request, response) => {
    response.send("Olá, você está na rota /message")
})
module.exports = userRoutes