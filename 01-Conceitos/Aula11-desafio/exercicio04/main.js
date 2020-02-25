// OBJETO
const empresa = {
    nome: 'Rocketseat',
    endereco: {
        cidade: 'Rio do Sul',
        estado: 'SC',
    }
};

// DESESTRUTURAÇÃO
const {nome, endereco: {cidade, estado}} = empresa;

// EXIBINDO OS VALORES
console.log(nome); // Rocketseat
console.log(cidade); // Rio do Sul
console.log(estado); // SC


// DESESTRUTURAÇÃO NA FUNÇÃO
const mostraInfo = ({nome, idade}) => `${nome} tem ${idade} anos.`;

// EXIBINDO INFORMAÇÕES
console.log(mostraInfo({ nome: 'Roodney', idade: 24 }));
