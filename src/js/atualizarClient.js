import { Api } from "./api.js"

class Options {
    static async getName(){

        const clientesDaApi      = await Api.getAllCliente()
        const select    = document.querySelector(".select")

        clientesDaApi.forEach(element => {
           let option   = document.createElement("option")
    
            option.innerText = element.nome
            option.value = element.id
            select.append(option)
        });     
        await Options.atualizarCliente(select, clientesDaApi)

    }

    static async atualizarCliente(select, dados){      
        const formClient =    document.querySelector(".formClient");       
        formClient.addEventListener("click", async (event) =>{

            event.preventDefault()
            console.log(  )
            if(event.target.tagName == "BUTTON"){
                let id = select.value
                const filtraCliente = dados.find(element=> element.id == id)
               
               await Options.buscar(filtraCliente)
            }            
        })
    }

    static async buscar (client){
        
        const nome      = document.querySelector(".nome")     
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
        // const {endereco}    = client


       nome.value   = client.nome
       email.value  = client.email
       idade.value  = client.idade
       cpf.value    = client.cpf
       sexo.value   = client.sexo
      
       cep.value    = client.endereco.cep
       rua.value    = client.endereco.rua
       numero.value = client.endereco.numero
       bairro.value = client.endereco.bairro
       cidade.value = client.endereco.cidade
       estado.value = client.endereco.estado
      
  

       const pesquisarBtn  = document.querySelector(".pesquisarBtn")
        
        const idCliente= client.id
       
        pesquisarBtn.addEventListener("click", async (event)=>{
            
         event.preventDefault()
         // const {endereco}    = client
         const nome      = document.querySelector(".nome")     
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
 
        
         let objeto ={
             nome:   nome.value,
             email:  email.value,
             idade:  idade.value,
             cpf:    cpf.value,
             sexo:   sexo.value,
             endereco:{
             cep:    cep.value,
             rua:    rua.value,
             numero: numero.value,
             bairro: bairro.value,
             cidade: cidade.value,
             estado: estado.value
             }
 
         }
         console.log(idCliente )
         await Api.editarCliente(objeto,idCliente)
       
        })
  
    }
  

}
Options.getName()



