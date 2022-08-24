import { Api } from "./api.js"

class Options {
    static async getName(){

        const rest = await Api.getAllCliente()
        const select = document.querySelector(".select")

        rest.forEach(element => {
           let option = document.createElement("option")
                       
            option.innerText = element.nome
            select.append(option)
        });        

    }

}

Options.getName()