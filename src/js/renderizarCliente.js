
export class CriarCardClient{

    static async card(array){
        const lu = document.querySelector(".container");
        
        array.forEach(element => {
         const res =  this.listarCards(element)
            lu.append(res)
        });
    }
 
    static listarCards(array){
        const tagLi       = document.createElement("li")
         //dados pessoas
        const tagH2       = document.createElement("h2")
        const tagDiv      = document.createElement("div")
        const tagH3Dados       = document.createElement("h3")
        const tagPEmail   = document.createElement("p")
        const tagPIdade   = document.createElement("p")
        const tagPCpf     = document.createElement("p")
        const tagPSexo    = document.createElement("p")
        
         //endereço
        const tagDiv2       = document.createElement("div")
        const tagH3Endereço = document.createElement("h3")
        const tagCep        = document.createElement("p")
        const tagPEstado    = document.createElement("p")
        const tagPCidade    = document.createElement("p")
        const tagPBairro    = document.createElement("p")
        const tagPRua       = document.createElement("p")
        const tagPNumero    = document.createElement("p")
        const {endereco}    = array

        //add class Css
        tagLi.classList.add("card")
        //add atributos APi
        tagLi.id                = array.id
        tagH2.id                = array.id
        tagH2.innerText         = array.nome;
        tagH3Dados.innerText    = `Dados Pessoais`
        tagPEmail.innerText     = `email: ${array.email}`;
        tagPIdade.innerText     = `idade: ${array.idade}`;
        tagPCpf.innerText       = `cpf: ${array.cpf}`;
        tagPSexo.innerText      = `sexo ${array.sexo}`;
        
        tagDiv.append(tagH3Dados, tagPEmail, tagPIdade, tagPCpf, tagPSexo)
        
        // Endereço 
        tagH3Endereço.innerText      = `Endereço`;
        tagCep.innerText             = `cep: ${endereco.cep}`;
        tagPEstado.innerText         = `estado: ${endereco.estado}`;
        tagPCidade.innerText         = `cidade: ${endereco.cidade}`;
        tagPBairro.innerText         = `bairro: ${endereco.bairro}`;
        tagPRua.innerText            = `rua: ${endereco.rua}`;
        tagPNumero.innerText         = `numero: ${endereco.numero}`;
        
        tagDiv2.append(tagH3Endereço, tagCep, tagPEstado, tagPCidade, tagPBairro, tagPRua, tagPNumero )
     
        tagLi.append(tagH2, tagDiv, tagDiv2)

        return tagLi

    }
}
   /*   <div>
                <h3>Dados Pessoais</h3>
                <p>email: jardel@gmail.com</p>
                <p>idade: 21</p>
                <p>cpf: 123.456.789-10</p>
                <p>sexo: Masculino</p>

            </div>

            <div>
                <h3>Endereco</h3>
                <p>cep: 38055292</p>
                <p>estado: MG</p>
                <p>cidade: Uberaba</p>
                <p>bairro: Residencial Veneza</p>
                <p>rua: rua da dev</p>
                <p>numero: 123</p>
            </div>
        </li>
    -->
    */ 