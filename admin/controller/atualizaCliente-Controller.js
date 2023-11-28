import { clienteService } from "../service/cliente-service.js"

    const pegaURL = new URL(window.location.href); // Pega a URL do Site
    const id = pegaURL.searchParams.get('id')  // pega o id, importante passar dessa forma html?id=3
    console.log('ID:', id);
    
    const inputNome = document.querySelector ('[data-nome]')
    const inputEmail = document.querySelector ('[data-email]')
    
    try{
        const dados = await clienteService.detalhaCliente(id)

        dados.forEach(element => {
            inputEmail.value = element.email
            inputNome.value = element.nome
        });
    }
    catch (erro){ // caso não consiga. vai ser direcionado para tela de erro
        console.log(erro)
        window.location.href = '../telas/erro.html'
    }

    const formulario = document.querySelector('[data-form]')
    
    formulario.addEventListener('submit', async(evento)=>{
        evento.preventDefault()

        try {

            await clienteService.atualizaCliente(inputNome.value, inputEmail.value, id)
            window.location.href ="../telas/edicao_concluida.html" 
        }

        catch (erro){ // caso não consiga. vai ser direcionado para tela de erro
            console.log(erro)
            window.location.href = '../telas/erro.html'
        }
    

    })

