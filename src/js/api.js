export class Api {
    static urlBase = "https://atividade-api-clientes.herokuapp.com/clientes"
    static headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer`
    }
   
    static async getAllCliente(){
        const clientes = await fetch(`${this.urlBase}`,{
            method: "GET",
            headers: this.headers

        })
        .then(res =>res.json())
        .catch(error => console.log(error))
        return clientes

    }
 // polimorfismo e um metodo com mtas formas (metodos com mesmo nome e atriutos diferentes)
    static async registerNewClient(dados){
        const newClient = await fetch(`${this.urlBase}`,{
            method: "POST",
            headers: this.headers,
            body: JSON.stringify(dados)
        })
        .then(res =>res.json())
        .catch(error=> console.log(error))

        return newClient;
    }

    static async editarCliente(id, data){
        



    }

    static async deletarCliente(id){

    }

}
  
// export {Api}