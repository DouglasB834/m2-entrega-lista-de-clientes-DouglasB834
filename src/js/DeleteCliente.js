import { Api } from "./api.js";

class deletarCliente{

    static async getName(){

        const clientesDaApi      = await Api.getAllCliente()
        const select    = document.querySelector(".select")

        clientesDaApi.forEach(element => {
           let option = document.createElement("option")
         
            option.innerText = element.nome
            option.value = element.id
            select.append(option)
        });     
        this.delete(select, clientesDaApi)

    }

    static async delete(tagSelect, dados){      
        const formClient =    document.querySelector(".formClient");       
        formClient.addEventListener("click", (event) =>{

            event.preventDefault()
           
            if(event.target.tagName == "BUTTON"){
                let id = tagSelect.value
                // const filtraCliente = dados.find(element=> element.id == id)

              Api.deletarCliente(id)
                
            }            
        })
    }



}

deletarCliente.getName()