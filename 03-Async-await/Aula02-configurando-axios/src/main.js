// IMPORTANDO DEPENDENCIAS
import axios from "axios";

// CRIANDO UMA CLASSE PARA A API
class Api {
    static async getUserInfo(username) {
        // TRATANDO A REQUISIÇÃO COM TRY CAYCH
        try {
            const response = await axios.get(`https:api.github.com/users/${username}`);
            console.log(response);
        } catch (error) {
            console.warn("Erro na API.");
        }
    }
}


// CHAMANDO O METODO DA API
Api.getUserInfo('RoodneyMoraes');
Api.getUserInfo('RoodneyMo464raes');