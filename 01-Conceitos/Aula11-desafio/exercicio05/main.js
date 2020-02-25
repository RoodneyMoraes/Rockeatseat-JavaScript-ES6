// ARRAY
const arr = [1, 2, 3, 4, 5, 6];

// REST
const [x, ...y] = arr;

// EXIBINDO OS VALORES
console.log(x); // 1
console.log(y); // [2, 3, 4, 5, 6]


// UTILIZANDO O REST NA FUNÇÃO
function soma(...params) {
    return params.reduce((total, next) => total + next);
}

// EXIBINDO OS VALORES
console.log(soma(1, 2, 3, 4, 5, 6)); // 21
console.log(soma(1, 2)); // 3




// SPREAD
// USUARIO 1
const usuario1 = {
    nome: 'Diego',
    idade: 23,
    endereco: {
        cidade: 'Rio do Sul',
        uf: 'SC',
        pais: 'Brasil',
    }
};

// USUARIO 2
const usuario2 = {
    ...usuario1,
    nome: 'Roodney',
};


// USUARIO 3
const usuario3 = {
    ...usuario1,
    endereco: { ...usuario1.endereco, cidade: 'Lontras'}
};


// EXIBINDO INFORMAÇÕES DO OBJ
console.log("Usuário1:", usuario1);
console.log("Usuário2:", usuario2);
console.log("Usuário3:", usuario3);
