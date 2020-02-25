// CRIANDO UM OBJETO PARA TRABALHAR COM REST - OBJECT
const usuario = {
    nome: "Roodney",
    idade: 25,
    empresa: "Houpa!"
};

// REST
const {nome, ...resto} = usuario;

// EXIBINDO AS VARIAVEIS
console.log(nome);
console.log(resto);


// CRIANDO UM OBJETO PARA TRABALHAR COM REST - ARRAY
const array = [1, 2 , 3, 4];

// REST
const [a, b, ...c] = array;

// EXIBINDO AS VARIAVEIS
console.log(a);
console.log(b);
console.log(c);

// UTILIZANDO O REST NA FUNÇÃO
function soma(...params) {
    return params.reduce((total, next)=> total + next);
}

// CHAMANDO A FUNÇÃO
console.log(soma(15, 2, 3));


// SPREAD
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const array3 = [...array1, ...array2];

// EXIBINDO O VALOR DO ARRAY COM SPREAD
console.log(array3);


// EXEMPLO COM OBJETO
const usuario1 = {
    nome: "Roodney",
    idade: 25,
    empresa: "Houpa!"
}

const usuario2 = {
    ...usuario1,
    nome: "Marcos"
};

// EXIBINDO OS DOS OBJETOS
console.log("Normal",usuario1);
console.log("Spread",usuario2);