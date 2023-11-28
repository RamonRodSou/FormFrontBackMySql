const listaClientes = () => {
    return fetch('http://localhost:8080/listar', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(resposta => {
        if (resposta.ok) {
            return resposta.json();
        }
        throw new Error('Não foi possível listar os clientes');
    });
}

const detalhaCliente = (id) => {
    return fetch(`http://localhost:8080/usuario/${id}`,  {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then ( resposta => {
        if (resposta.ok){
            return resposta.json() // Pegando a Resposta, transformnando em um JavaScript válido e retornando
        }
        throw new Error ('Não foi possivel detalhar clientes')
    })
}

const criaCliente = (nome, email) => {
    return fetch('http://localhost:8080/cadastrar', {
        method: 'POST',   // Uma postagem normal, a gente escreve e mandando pro servidor, e dps aparece na timelime
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify ({  // Passa um método JS para texto
            nome: nome,
            email: email
        })
    })
    .then(resposta =>{
        if (resposta.ok){
            return resposta.body
        }
        throw new Error ('Não foi possivel criar um clientes')
    })
}

const atualizaCliente = (nome, email, id) => {
    return fetch(`http://localhost:8080/atualizar/${id}`, {
        method: 'PUT',
        headers: { // Passando pro cabeçalho indicando qual o conteúdo
            'Content-type' : 'application/json'
        },
        body: JSON.stringify({ // passando pro corpo, que iremos atualizar
            nome: nome,
            email: email
        })
    })
    .then( resposta => {
        if (resposta.ok){
            return resposta.json() // Pegando a Resposta, transformnando em um JavaScript válido e retornando
        }
        throw new Error ('Não foi possivel atualizar um clientes')
    })
}

const removeCliente = (id) => {
    return fetch(`http://localhost:8080/delete/${id}`, {
        method: "DELETE",
    }).then ( resposta => {
        if (!resposta.ok){
            throw new Error ('Não foi possivel remover um clientes')
            }
        })
    
}

export const clienteService = {

    listaClientes, criaCliente, removeCliente, detalhaCliente, atualizaCliente
}
