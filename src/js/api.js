


export class Api {
    static urlBase = "https://atividade-api-clientes.herokuapp.com/clientes"
    static headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer`
    }

    static async getAllCliente() {
        const clientes = await fetch(`${this.urlBase}`, {
            method: "GET",
            headers: this.headers

        })
            .then(res => res.json())
            .catch(error => console.log(error))
        return clientes

    }
    static async registerNewClient(dados) {
        const newClient = await fetch(`${this.urlBase}`, {
            method: "POST",
            headers: this.headers,
            body: JSON.stringify(dados)
        })
            .then(res => res.json())
            .then(res=> window.location.assign(`../../index.html`))
            .catch(error => console.log(error))

        return newClient;
    }

    static async editarCliente(data, id) {
       
        const atualizarCliente = await fetch(`${this.urlBase}/${id}`,{
            method:"PATCH",
            headers:this.headers,
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(res=> window.location.assign(`../../index.html`))
        .catch(error => alert(error))
        return atualizarCliente
    }

    // polimorfismo e um metodo com mtas formas (metodos com mesmo nome e atriutos diferentes)

    static async deletarCliente(id) {

        const deletar = await fetch(`${this.urlBase}/${id}`, {
            method: "DELETE",
            headers: this.headers
        })
        .then(res=> window.location.assign(`../../index.html`))
        .catch(err => alert(err))
        
        return deletar
    }

}
