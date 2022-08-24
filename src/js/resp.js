import { Api } from "./api.js"
import { CriarCardClient } from "./renderizarCliente.js";


// const listaBtn = document.querySelector(".listaBtn");

const dados = await Api.listarClientes()
CriarCardClient.card(dados)
// listaBtn.addEventListener("click", async()=>{


// })
