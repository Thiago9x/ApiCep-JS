'use strict';

const pesquisarCep = async (cep) =>{
    const url = `https://viacep.com.br/ws/${cep}/json/`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

    return data;
};

const cepValido=(cep) => /^[0-9]{8}$/.test(cep);


const limparFormulario = () =>{
    document.querySelector("#endereco").value = '';
    document.querySelector("#bairro").value = '';
    document.querySelector("#cidade").value = '';
    document.querySelector("#estado").value = '';
}
const preencherFormulario = async (evento)=>{
    // const cep = document.querySelector('#cep').value;
    const cep = evento.target.value;
    limparFormulario();
    
    if(cepValido(cep)){
    const infoCep = await pesquisarCep(cep);
   
    document.querySelector("#endereco").value = infoCep.logradouro;
    document.querySelector("#bairro").value = infoCep.bairro;
    document.querySelector("#cidade").value = infoCep.localidade;
    document.querySelector("#estado").value = infoCep.uf;
    }
    else{
        document.querySelector("#endereco").value = "CEP Incorreto!!!"
    }

    
}



document.querySelector('#cep')
.addEventListener('focusout', preencherFormulario);