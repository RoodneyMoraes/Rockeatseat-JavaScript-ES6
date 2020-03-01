// CRIANDO UMA CLASSE PARA A APLICAÇÃO
class App {
    // CONSTRUTOR
    constructor() {
        // INICIANDO VARIAVEIS
        this.repositories = [];
        // RECUPERANDO DADOS DO FORM
        this.formElement = document.getElementById("repo-form");
        // CHAMANDO O METODO DE REGISTROS
        this.registerHandlers();
    }

    // REGISTROS DE EVENTOS
    registerHandlers() {
        this.formElement.onsubmit = event => this.addRepository(event);
    }

    // ADICIONAR REPOSITORIO
    addRepository(event) {
        
        event.preventDefault();

        this.repositories.push({
            name: "rocketseat.com.br",
            description: "Tire sua ideia do papel e de vida a uma startup.",
            avatar_url: "https://avatars0.githubusercontent.com/u/28929274?v=4",
            html_url: "http://github.com/rocketseat/unform"
        });

        console.log(this.repositories);
        
    }
}

// INICIANDO O APP
new App();

console.log("Gol");
