// import { Api } from "./api.js"

import { Api } from "./api.js";

class Pessoa {
    constructor(nome, email, idade, cpf, sexo, endereco) {
        this.nome = nome;
        this.email = email;
        this.idade = idade;
        this.cpf = cpf;
        this.sexo = sexo;
        this.endereco = endereco

    }

}

class AddPessoa {

    constructor(cep, rua, numero, bairro, cidade, estado) {
        this.cep = cep
        this.rua = rua
        this.numero = numero
        this.bairro = bairro
        this.cidade = cidade
        this.estado = estado


    }

    static cardParaPessoa() {

        const nome          = document.querySelector(".nome")
        const email         = document.querySelector(".email")
        const idade         = document.querySelector(".idade")
        const cpf           = document.querySelector(".cpf")
        const sexo          = document.querySelector(".sexo")

        const cep           = document.querySelector(".cep")
        const rua           = document.querySelector(".rua")
        const numero        = document.querySelector(".numero")
        const bairro        = document.querySelector(".bairro")
        const cidade        = document.querySelector(".cidade")
        const estado        = document.querySelector(".estado")
        const cadastrarBtn  = document.querySelector(".cadastraBtn")


        cadastrarBtn.addEventListener("click", (event) => {
            // event.preventDefault()

            const endereco = new AddPessoa(cep.value, rua.value, numero.value, bairro.value, cidade.value, estado.value)

            const cliente = new Pessoa(nome.value, email.value, idade.value, cpf.value, sexo.value, endereco)
            console.log(cliente)
            Api.registerNewClient(cliente)
            
        })


    }

}

console.log(AddPessoa.cardParaPessoa())






/*
    {
        "nome": "tiago",
        "idade": 42,
        "cpf": "00000000000",
        "sexo": "Masculino",
        "email": "guilherme@gmail.com",
        "endereco": {
            "cep": "38055292",
            "rua": "São Carioca",
            "numero": "171",
            "bairro": "Carioca",
            "cidade": "Rio de janeiro ",
            "estado": "RJ"
        }
	
}


*/ 