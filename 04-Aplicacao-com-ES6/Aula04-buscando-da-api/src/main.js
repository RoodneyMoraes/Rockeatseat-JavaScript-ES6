// IMPORTANDO A API DO GITHUB
import api from './api';

// CRIANDO UMA CLASSE PARA A APLICAÇÃO
class App {
    // CONSTRUTOR
    constructor() {
        // INICIANDO VARIAVEIS
        this.repositories = [];

        // RECUPERANDO DADOS DO FORM
        this.formElement = document.getElementById("repo-form");
        this.inputElement = document.querySelector("input[name=repository");
        this.listElement = document.getElementById("repo-list");
        this.adicionarElement = document.getElementById("adicionar");

        // METODO DE REGISTROS
        this.registerHandlers();
    }

    // LOAD DA PAGINA
    setLoading(loading = true) {
        // VERIFICANDO O PARAMETRO
        if (loading === true) {
            // CRIANDO ELEMENTO HTML
            let loadingElement = document.createElement("span");
            loadingElement.appendChild(document.createTextNode("Carregando..."));
            loadingElement.setAttribute("id", "loading");

            // DESABILITANDO O BOTÃO
            this.adicionarElement.setAttribute("disabled", "disabled");

            // POSICIONADO O ELEMENTO HTML
            this.formElement.appendChild(loadingElement);
        }else{
            // REMOVENDO UM ELEMENTO
            document.getElementById("loading").remove();

            // HABILITANDO O BOTAO
            this.adicionarElement.removeAttribute("disabled");

        }
    }

    // REGISTROS DE EVENTOS
    registerHandlers() {
        this.formElement.onsubmit = event => this.addRepository(event);
    }

    // ADICIONAR REPOSITORIO
    async addRepository(event) {

        // EVITANDO RECARREGAR A PAGINA
        event.preventDefault();
        
        // VERIFICANDO SE FOI DIGITADO ALGO NO INPUT
        const repoInput = this.inputElement.value;

        // VERIFICANDO SE É IGUAL 0
        if (repoInput.length === 0) return;

        
        // LOAD
        this.setLoading();
        
        // FAZENDO TRATATIVA COM TRY CATCH
        try {
            // RECUPERANDO DADOS DA API
            const response = await api.get(`/repos/${repoInput}`);

            // DESESTRUTURANDO A RESPOSTA DA API
            const { name, description, html_url, owner: { avatar_url } } = response.data;

            // INSERINDO DADOS NO ARRAY
            this.repositories.push({
                name,
                description,
                avatar_url,
                html_url
            });

            // LIMPANDO INPUT
            this.inputElement.value = "";

            // METODO PARA RENDERIZAR A LISTA
            this.render();

        } catch (error) {
            alert("O repositorio não existe!");
        }

        // LOAD
        this.setLoading(false);

    }

    // RECARREGANDO LISTA
    render() {
        // LIMPANDO A LISTA
        this.listElement.innerHTML = "";

        // CRIANDO A LISTA DE REPOSITORIOS
        this.repositories.forEach(repo => {
            // CRIANDO ELEMENTOS HTML - IMG
            let imgElement = document.createElement("img");
            imgElement.setAttribute("src", repo.avatar_url ?? "");

            // CRIANDO ELEMENTOS HTML - STRONG
            let titleElement = document.createElement("strong");
            titleElement.appendChild(document.createTextNode(repo.name ?? "Não informado"));

            // CRIANDO ELEMENTOS HTML - P
            let descriptionElement = document.createElement("p");
            descriptionElement.appendChild(document.createTextNode(repo.description ?? "Não informado"));

            // CRIANDO ELEMENTOS HTML - A
            let linkElement = document.createElement("a");
            linkElement.setAttribute("href", repo.html_url ?? "#");
            linkElement.setAttribute("target", "_blank");
            linkElement.appendChild(document.createTextNode("Acessar"));

            // CRIANDO ELEMENTOS HTML - LI
            let liElement = document.createElement("li");

            // POSICIONANDO ELEMENTOS DO HTML
            liElement.appendChild(imgElement);
            liElement.appendChild(titleElement);
            liElement.appendChild(descriptionElement);
            liElement.appendChild(linkElement);

            // COLOCANDO O ITEM NA LISTA 
            this.listElement.appendChild(liElement);

        });
    }
}

// INICIANDO O APP
new App();
