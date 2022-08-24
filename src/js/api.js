


export class Api {
    static urlBase = "https://atividade-api-clientes.herokuapp.com/clientes"
    static headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer`
    }
 
    //pegar clientes
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

    //Criar card cliente 
    static async registerNewClient(body){
        const newClient = await fetch(`${this.urlBase}`,{
            method: "POST",
            headers: this.headers,
            body: JSON.stringify(body)
        })
        .then(res =>res.json())
        .catch(error=> console.log(error))
        return newClient;
    }
    
//CriarCardClient
    static async editarCliente(data, id){
       console.log(data)

        const atualizarClient = await fetch (`${this.urlBase}/${id}`,{
            method: "PATCH",
            headers: this.headers,
            body:JSON.stringify(data)
        })
        .then(res=>res.json())
        .catch(error=> error)
        return atualizarClient
    }

    static async deletarCliente(id){

        const deletar = await fetch (`${this.urlBase}/${id}`,{
            method: "DELETE",
            headers: this.headers
        })
        .then(res => res.json())
        .catch(err = alert(err))
        //teste
        return deletar
    }

}
