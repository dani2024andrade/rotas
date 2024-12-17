const appErro = require("../utils/appErro")
class loginController {
    create(request, response) {
        const { name, email, senha, isAdmin } = request.body
        if (!name) {
            throw new appErro("Nome é obrigatório")
        }
        response.status(201).json({ name, email, senha, isAdmin })
    } 
// Dentro desta classe de controller, você encontrará comumente os seguintes métodos:

// 1. Método de Listagem (List):
// Responsável por recuperar e exibir uma lista de recursos.
// Geralmente acionado por uma solicitação HTTP GET.
// É usado para mostrar uma lista de itens em uma página da web ou API.

// 2. Método de Exibição (Show):
// Utilizado para recuperar e mostrar detalhes de um recurso específico.
// Geralmente acionado por uma solicitação HTTP GET para um recurso individual.

// 3. Método de Criação (Create):
// Lida com a criação de um novo recurso.
// Geralmente acionado por uma solicitação HTTP POST.
// Responsável por validar os dados enviados e criar o recurso correspondente no sistema.

// 4. Método de Atualização (Update):
// Usado para modificar um recurso existente.
// Normalmente, isso é feito através de uma solicitação HTTP PUT ou PATCH.
// Deve validar os dados enviados antes de atualizar o recurso.

// 5. Método de Exclusão (Delete):
// Responsável por excluir um recurso existente.
// Acionado por uma solicitação HTTP DELETE.
// Deve verificar se o recurso existe antes de removê-lo.

}
module.exports = loginController