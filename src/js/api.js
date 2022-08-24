


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
