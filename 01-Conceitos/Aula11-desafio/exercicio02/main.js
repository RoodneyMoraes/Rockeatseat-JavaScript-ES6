// CRIANDO UM ARRAY DE OBJETOS
const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];

// MAP
const userAge = usuarios.map(item => item.idade);

// FILTER
const userFilter = usuarios.filter(item => item.idade >= 18 && item.empresa === "Rocketseat");

// FIND
const userFind = usuarios.find(item => item.empresa === "Google");

// MAP
const userSelect = usuarios.map((item) => {
    // CRIANDO UM NOVO OBJECT
    let user = {
        ...item,
        idade: item.idade * 2
    }
    return user;
}); 

// FILTER
const userRules = userSelect.filter((item) => {
    return item.idade  <= 50;
});

// EXIBINDO VARIAVEIS
console.log("Idade dos usuarios: ", userAge);
console.log("Maior de 18 e que trabalha na Rocketseat: ", userFilter);
console.log("Usuário que trabalha na Google: ", userFind);
console.log("Usuário que estão até com 50 anos depois de duplicar a idade: ", userRules);
