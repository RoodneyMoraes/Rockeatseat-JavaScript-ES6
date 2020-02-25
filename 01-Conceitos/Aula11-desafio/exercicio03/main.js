// 3.1
const arr = [1, 2, 3, 4, 5];

const newArr = arr.map(item => item + 10);

// EXIBINDO VARIAVEL
console.log(newArr);


// 3.2
// Dica: Utilize uma constante pra function
const usuario = { nome: 'Diego', idade: 23 };
const mostraIdade = (usuario => usuario.idade);

// MOSTRAR IDADE
console.log(mostraIdade(usuario));



// 3.3
// Dica: Utilize uma constante pra function
const nome = "Diego";
const idade = 23;
const mostraUsuario = (nome = 'Diego', idade = 18) => ({ nome, idade });

// MOSTRAR DADOS DO USUÁRIO
console.log(mostraUsuario(nome, idade));
console.log(mostraUsuario(nome));


// 3.4
const promise = () => {
    return new Promise((resolve, reject) => resolve());
}

console.log(promise());



