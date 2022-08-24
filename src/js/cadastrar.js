

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



            const endereco = new AddPessoa(cep.value, rua.value, numero.value, bairro.value, cidade.value, estado.value)

            const cliente = new Pessoa(nome.value, email.value, idade.value, cpf.value, sexo.value, endereco)
            console.log(cliente)

        })


    }

}

console.log(AddPessoa.cardParaPessoa())

