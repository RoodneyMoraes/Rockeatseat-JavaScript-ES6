// USANDO O IMPORT
import { soma as somaFunction, sub } from "./funcoes";
import divisaoNovoNome, { div } from "./divisao";
import multi from "./multiplicacao";
import * as info from "./strings";

// EXIBINDO DADOS DO IMPORT
console.log(somaFunction(55, 7));
console.log(sub(55, 7));
console.log(divisaoNovoNome(55, 7));
console.log(multi(55, 7)); 
console.log(div(55, 7)); 
console.log(info); 
console.log(info.nome("Roodney")); 
console.log(info.cidade("Mogi das Cruzes")); 
console.log(info.estado("SP")); 
