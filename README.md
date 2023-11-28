#  JS na web: crud com JavaScript assíncrono

# Projeto
Este projeto tem como objetivo criar um CRUD (Create, Read, Update e Delete) de usuários utilizando tecnologias web como HTML5, CSS3 e JavaScript, juntamente com Node.js, Express, Cors e MySql.

# Funcionalidades
As bibliotecas instaladas:

    npm init
    npm install
    npm install node
    npm install mysql2
    npm install express
    npm install cors

Na pasta admin/MySql, abra o arquivo connection.js e altere as configurações de acordo com o seu banco de dados:

    const host = 'localhost'
    const user = 'root'
    const password = '00000'
    const database = 'bdname'


Após as configurações do banco de dados, crie um banco de dados com uma tabela que contenha os campos de nome e email, e adicione mais campos se necessário.
--------------------------------------------------------------------------------------
Em seguida, vá para as seguintes seções do projeto:

--------------------------------------------------------------------------------------
admin/MySql
Nos arquivos:

    cadastraUser
    atualizarUser

Adicione os dados que deseja capturar no banco de dados.
--------------------------------------------------------------------------------------

    admin/service
    Nas funções:

    criaCliente
    atualizaCliente

Adicione os dados desejados.
--------------------------------------------------------------------------------------

admin/controller
Nos arquivos:

    atualizaCliente-Controller.js
    cadastraCliente-Controller.js
    listaCliente-Controller.
    
Adicione os dados que deseja manipular.
--------------------------------------------------------------------------------------

Nos Arquivos Html, adicionar os inputs desejados.
--------------------------------------------------------------------------------------

Certifique-se de que os nomes dos campos coincidam com os do banco de dados.

Para iniciar o projeto, vá ao terminal e execute os seguintes comandos:

    cd ~/FormCrud/admin/MySql
    node ./app.js

Se os dados dos clientes aparecerem no console, o projeto está rodando perfeitamente, e o console.log informará que o servidor está online.