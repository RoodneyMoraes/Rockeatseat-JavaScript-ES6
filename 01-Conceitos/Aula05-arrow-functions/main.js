// CRIANDO UM ARRAY PARA TABALHAR COM FUNÇÕES DE ARRAY
const array = [1, 3, 4, 5, 8, 10];

// FORMAS DE ESCREVER A ARROW FUNCTION
const newArray1 = array.map((item) =>{
    return item * 2;
});

const newArray2 = array.map(item =>{
    return item * 2;
});

const newArray3 = array.map(item => item * 2);

// EXIBINDO O VALOR NOVO DO ARRAY
console.log("map1", newArray1);
console.log("map2", newArray2);
console.log("map3", newArray3);

// CRIANDO UMA FUNÇÃO COM ARROW FUNCTION
const teste = () => {
    return "Teste";
}

// ARROW FUNCTION SIMPLIFICADA
const testeArray = () => [1, 2, 3];

// ARROW FUNCTION SIMPLIFICADA
const testObject = () => ({nome: "Roodney"});

// CHAMANDO A FUNÇÃO
console.log(teste());
console.log(testeArray());
console.log(testObject());