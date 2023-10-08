const listaClientes = () => {
    return fetch('https://my-json-server.typicode.com/RamonRodSou/formcruddb/profile')
    .then ( resposta => {
        if (resposta.ok){
            return resposta.json() // Pegando a Resposta, transformnando em um JavaScript válido e retornando
        }
        throw new Error ('Não foi possivel listar os clientes')
    })


}
const criaCliente = (nome, email) => {
    return fetch('https://my-json-server.typicode.com/RamonRodSou/formcruddb/profile', {
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

const removeCliente = (id) => {
    return fetch(`https://my-json-server.typicode.com/RamonRodSou/formcruddb/profile/${id}`, {
        method: "DELETE",
    }).then ( resposta => {
        if (!resposta.ok){
            throw new Error ('Não foi possivel remover um clientes')
            }
        })
    
}

const detalhaCliente = (id) => {
    return fetch(`https://my-json-server.typicode.com/RamonRodSou/formcruddb/profile/${id}`)
    .then ( resposta => {
        if (resposta.ok){
            return resposta.json() // Pegando a Resposta, transformnando em um JavaScript válido e retornando
        }
        throw new Error ('Não foi possivel detalhar clientes')
    })
}

const atualizaCliente = (id, nome, email) => {
    return fetch(`https://my-json-server.typicode.com/RamonRodSou/formcruddb/profile/${id}`, {
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

export const clienteService = {

    listaClientes, criaCliente, removeCliente, detalhaCliente, atualizaCliente
}
