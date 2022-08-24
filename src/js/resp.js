import { Api } from "./api.js"
import { CriarCardClient } from "./renderizarCliente.js";


const dados = await Api.getAllCliente()
CriarCardClient.card(dados)

// Api.deletarCliente()
