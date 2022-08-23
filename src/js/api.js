export class Api {
    static urlBase = "https://atividade-api-clientes.herokuapp.com/clientes"
    static headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer`
    }
    static async listarClientes(){
        const clientes = await fetch(`${this.urlBase}`,{
            method: "GET",
            headers: this.headers

        })
        .then(res =>res.json())
        .catch(error => console.log(error))
        return clientes

    }

    static async cadastrarCliente(data){

    }

    static async editarCliente(id, data){

    }

    static async deletarCliente(id){

    }

}
  
// export {Api}