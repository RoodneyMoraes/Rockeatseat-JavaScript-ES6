// CRIANDO UMA CLASSE PARA A APLICAÇÃO
class App {
    // CONSTRUTOR
    constructor() {
        // INICIANDO VARIAVEIS
        this.repositories = [];
        // RECUPERANDO DADOS DO FORM
        this.formElement = document.getElementById("repo-form");
        this.listElement = document.getElementById("repo-list");
        // CHAMANDO O METODO DE REGISTROS
        this.registerHandlers();
    }

    // REGISTROS DE EVENTOS
    registerHandlers() {
        this.formElement.onsubmit = event => this.addRepository(event);
    }

    // ADICIONAR REPOSITORIO
    addRepository(event) {

        // EVITANDO RECARREGAR A PAGINA
        event.preventDefault();

        // INSERINDO DADOS NO ARRAY
        this.repositories.push({
            name: "rocketseat.com.br",
            description: "Tire sua ideia do papel e de vida a uma startup.",
            avatar_url: "https://avatars0.githubusercontent.com/u/28929274?v=4",
            html_url: "http://github.com/rocketseat/unform"
        });

        // METODO PARA RENDERIZAR A LISTA
        this.render();

    }

    // RECARREGANDO LISTA
    render() {
        // LIMPANDO A LISTA
        this.listElement.innerHTML = "";

        // CRIANDO A LISTA DE REPOSITORIOS
        this.repositories.forEach(repo => {
            // CRIANDO ELEMENTOS HTML - IMG
            let imgElement = document.createElement("img");
            imgElement.setAttribute("src", repo.avatar_url);

            // CRIANDO ELEMENTOS HTML - STRONG
            let titleElement = document.createElement("strong");
            titleElement.appendChild(document.createTextNode(repo.name));

            // CRIANDO ELEMENTOS HTML - P
            let descriptionElement = document.createElement("p");
            descriptionElement.appendChild(document.createTextNode(repo.description));

            // CRIANDO ELEMENTOS HTML - A
            let linkElement = document.createElement("a");
            linkElement.setAttribute("href", repo.html_url);
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
