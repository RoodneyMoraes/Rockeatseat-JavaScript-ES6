// CRIANDO UMA CONST
const usuario = {nome: "Roodney"};

// EXIBINDO VALOR DENTRO DA CONST
console.log(usuario.nome);

// MUTANDO UMA VARIAVEL DISTRIBUINDO OUTRO VALOR
usuario.nome = "Kaike";

// EXIBINDO VALOR REATRIBUIDO
console.log(usuario.nome);


// CRIANDO UMA FUNÇÃO DE TESTE PARA TESTAR A FUNÇÃO DO LET
function teste(x) {
    // CRIANDO UMA VARIVEL
    let y = 5;
    // VALIDAÇÃO
    if (x > 5) {
        // REATRIBUINDO UM NOVO VALOR
        let y = 18;
        // MOSTRANDO OS VALORES
        console.log(x, y);
    }else {
        // MOSTRANDO OS VALORES
        console.log(x, y);
    }
}

// CHAMANDO A FUNÇÃO
teste(1);