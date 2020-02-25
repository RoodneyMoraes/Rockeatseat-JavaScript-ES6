// CRIANDO UMA CLASSE 
class Usuario {
    constructor(email, senha, admin = false) {
        this.email = email;
        this.senha = senha;
        this.admin = admin; 
    }

    // CRIANDO UM METODO
    isAdmin() {
        // CRIANDO UMA FRASE
        const frase  = `Email informando foi ${this.email} com a senha ${this.senha}, você é administrador: ${this.admin}`;
       return frase;
    }
} 

// CLASSE ADMINISTRADOR
class Admin extends Usuario {
    constructor(email, senha) {
        // CRIANDO UM NOVO PARAMETRO PARA PASSAR A CLASSE PAI
        let admin  = true;
        super(email, senha, admin);
    }
}

// INSTANCIANDO AS CLASSES
const user = new Usuario('roodney@moraes.com', 'rudy!14');
const admin = new Admin('admin@admin.com', 'admin');

// EXIBINDO SE O USUARIO É ADIMINISTRADOR OU NÃO
console.log(user.isAdmin()) // false
console.log(admin.isAdmin()) // true