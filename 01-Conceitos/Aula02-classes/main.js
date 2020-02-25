// CRIANDO UMA CLASS HERANÇA
class List {
    // CONSTRUTOR
    constructor() {
        this.data = [];
    }

    // CRIANDO UM METODO
    add(data) {
        this.data.push(data);
        console.log(this.data);
    }
}


// EXTENDENDO UMA CLASSE
class TodoList extends List {
    // CONSTRUTOR
    constructor() {
        // CHAMANDO O CONSTRUTOR PAI
        super();
        this.usuario = "Roodney";
    }

    // CRIANDO UM METODO PARA EXIBIR O NOME
    mostrarUsuario() {
        console.log(this.usuario);
    }
}

// CRIANDO CLASSES ESTATICAS
class Matematica {
    // METODO ESTATICO
    static soma(a, b) {
        return a + b;
    }
}

// INSTANCIANDO UMA CLASSE E ARMAZENANDO EM UMA VARIAVEL
let minhaLista = new TodoList();

// RECUPERANDO ELEMENTOS DO HTML
let buttonElement = document.getElementById("novoTodo");

// FUNÇÃO ONCLICK
buttonElement.onclick = () => {
    // CHAMANDO UM METODO DA CLASSE
    minhaLista.add("Gol");
}

// CHAMANDO UM METODO DA CLASSE
minhaLista.mostrarUsuario();

// CHAMANDO UMA CLASSE ESTATICA
console.log(Matematica.soma(5, 2));