// UTILIZANDO O ASYNC E AWAIT
const delays = () => new Promise(resolve => setTimeout(resolve, 1000));
const umPorSegundos = async () => {
    await delays(console.log("ASYNC AWAIT: 1s"));
    await delays(console.log("ASYNC AWAIT: 2s"));
    await delays(console.log("ASYNC AWAIT: 3s"));
}

// CHAMANDO AS FUNÇÕES
umPorSegundos();


// IMPORTANDO AXIOS
import axios from 'axios';

// FUNÇÃO PARA BUSCAR DADOS DO CEP
const getCep = async (cep) => {
    try {
        const { data } = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
        console.log(data);
    } catch (error) {
        console.log('Cep não existe')
    }
}

// CHAMANDO AS FUNÇÕES
getCep("08790580");
getCep("08790dasda580");


// CLASS DADOS DO CEP
class ViaCep {
    // METODO PARA RECUPERAR DADOS DO CEP
    static async getDataCep(cep) {
        try {
            const {data} = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
            console.log(data);
        } catch (error) {
            console.log('Cep não existe');
        }
    }
}

// CHAMANDO AS METODOS DAS CLASSES
ViaCep.getDataCep('08790570');
ViaCep.getDataCep('0s8654');



// CONVERTENDO PARA ASYNC AND AWAIT
const buscaUsuario = async (user) => {
    try {
        const {data} = await axios.get(`https://api.github.com/users/${user}`);
        console.log(data);
    } catch (error) {
        console.warn("Usuário não existe");
    }
}

// CHAMANDO A FUNÇÃO
buscaUsuario('RoodneyMoraes');

