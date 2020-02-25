// OBJETO USUARIO
const usuario = {
    nome: "Roodney",
    idade: 25,
    endereco: {
        cidade: "São Paulo",
        estado: "SP"
    }
};

// FAZENDO A DESITRUTURAÇÃO DO OBJETO
const { nome, idade, endereco: { cidade, estado } } = usuario;

// EXIBINDO AS VARIAVEIS DESESTRUTURADAS
console.log(nome);
console.log(idade);
console.log(cidade);
console.log(estado);
console.log("------------");


// UTILIZANDO DESISTRUTURAÇÃO DENTRO DOS PARAMETROS DE UMA FUNÇÃO
function mostrarInformacoes({nome, endereco:{cidade}}) {
    console.log("Nome:", nome);
    console.log("Cidade:", cidade);
}

// CHAMANDO A FUNÇÃO
mostrarInformacoes(usuario);
