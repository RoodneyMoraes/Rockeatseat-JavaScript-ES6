// CRIANDO CLASSE
class TodoList {
    // INICIANDO UM CONSTRUCT
    constructor() {
        this.todos = [];
    }

    // INICIANDO UM NOVO METODO
    addTodo(){
        this.todos.push("Novo todo");
        console.log(this.todos);
    }
}

// INSTANCIANDO UMA CLASSE E ARMAZENANDO EM UMA VARIAVEL
const minhaLista = new TodoList();

// RECUPERANDO ELEMENTOS DO HTML
let buttonElement = document.getElementById("novoTodo");

// FUNÇÃO ONCLICK
buttonElement.onclick = () => {
    minhaLista.addTodo();
}