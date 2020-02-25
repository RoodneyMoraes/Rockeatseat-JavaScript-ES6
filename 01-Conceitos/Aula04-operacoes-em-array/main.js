// CRIANDO UM ARRAY PARA TABALHAR COM FUNÇÕES DE ARRAY
const array = [1, 3, 4, 5, 8, 10];

// UTILIZANDO O MAP
const newArray = array.map((item, index) =>{
    return item + index;
});

// UTILIZANDO O REDUCE
const sum = array.reduce((total, next)=>{
    return total + next;
});

// UTILIZANDO FILTER
const filter = array.filter((item)=>{
    return item % 2 === 0;
});

// UTILIZANDO O FIND
const find = array.find((item)=>{
    return item == 5;
});

// EXIBINDO O VALOR NOVO DO ARRAY
console.log("map", newArray);
console.log("filter", filter);
console.log("reduce", sum);
console.log("filter", filter);
console.log("find", find);
