import { Api } from "./api.js"
// import { CriarCardClient } from "./renderizarCliente.js"


class Options {
    static  input = document.querySelectorAll("input")
    static async getName(){

        const clientesDaApi      = await Api.getAllCliente()
        const select    = document.querySelector(".select")

        clientesDaApi.forEach(element => {
           let option = document.createElement("option")
         
            option.innerText = element.nome
            select.append(option)
        });     
        Options.atualizarCliente(select, clientesDaApi)

    }

    static async atualizarCliente(tagSelect, dados){      
        const formClient =    document.querySelector(".formClient");       
        formClient.addEventListener("click", (event) =>{

            event.preventDefault()
            console.log(  )
            if(event.target.tagName == "BUTTON"){
                let nome = tagSelect.value
                const filtraCliente = dados.find(element=> element.nome == nome)
             
                Options.buscar(filtraCliente)
            }            
        })
    }

    static buscar (client){
        
        const nome = document.querySelector(".nome")     
        const email     = document.querySelector(".email")
        const idade     = document.querySelector(".idade")
        const cpf       = document.querySelector(".cpf")
        const sexo      = document.querySelector(".sexo")

        const cep           = document.querySelector(".cep")
        const rua           = document.querySelector(".rua")
        const numero        = document.querySelector(".numero")
        const bairro        = document.querySelector(".bairro")
        const cidade        = document.querySelector(".cidade")
        const estado        = document.querySelector(".estado")
        const {endereco}    = client
        const pesquisarBtn  = document.querySelector(".pesquisarBtn")

       nome.setAttribute("value", client.nome)
       email.setAttribute("value", client.email)
       idade.setAttribute("value", client.idade)
       cpf.setAttribute("value", client.cpf)
       sexo.setAttribute("value", client.sexo)
      
       cep.setAttribute("value", endereco.cep)
       rua.setAttribute("value", endereco.rua)
       numero.setAttribute("value", endereco.numero)
       bairro.setAttribute("value", endereco.bairro)
       cidade.setAttribute("value", endereco.cidade)
       estado.setAttribute("value", endereco.estado)
       
       pesquisarBtn.addEventListener("click", (event)=>{
        event.preventDefault()
        const id = client.id
         
        let objeto ={
            nome:   nome.value,
            email:  email.value,
            idade:  idade.value,
            cpf:    cpf.value,
            sexo:   sexo.value,
        }
        
        Api.editarCliente(objeto,id)


       })
  
    }

}

Options.getName()



