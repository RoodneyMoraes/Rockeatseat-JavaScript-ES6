// CRIANDO UMA PROMISE
const minhaPromise = () => new Promise((resolve, reject) =>{
    setTimeout(() => {
        resolve("OK");
    }, 2000);
});


// CHAMANDO A PROMISSE
minhaPromise().then((response)=>{
    console.log(response);
}).catch(error =>{
    console.log(error);
});


// UTILZANDO ASYNC E AWAIT
async function executaPromise() {
    console.log("ASYNC AWAIT 01: ", await minhaPromise());
    console.log("ASYNC AWAIT 02: ", await minhaPromise());
    console.log("ASYNC AWAIT 03: ", await minhaPromise());
    console.log("ASYNC AWAIT 04; ", await minhaPromise());
}


// UTILZANDO ASYNC E AWAIT COM ARROW FUNCTION
const executaPromiseWithArrowFunction = async () => {
    console.log("executaPromiseWithArrowFunction 01: ", await minhaPromise());
    console.log("executaPromiseWithArrowFunction 02: ", await minhaPromise());
    console.log("executaPromiseWithArrowFunction 03: ", await minhaPromise());
    console.log("executaPromiseWithArrowFunction 04; ", await minhaPromise());
}

// CHAMANDO A FUNÇÃO
executaPromise();
executaPromiseWithArrowFunction();