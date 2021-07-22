/*
    Promises => Utilizar quando for fazer tarefas
    pesadas/demoradas e não travar a CallStack;
    
    Ex: Consulta ao banco de dados, Chamadas API;
*/

const apiCall = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve('Sucesso!');
        reject('Erro!');
    }, 2000);
});

const secondApiCall = new Promise((resolve, reject) => {
    setTimeout(() => {
        //resolve('Sucesso!');
        reject('Novo Erro!');
    }, 2000)
})

/* Then & Catch */
// Then == Resolve;
// Catch == Reject;
apiCall.then((response) => {
    console.log(response);
})
.catch((err) => {
    console.log(err);
});

// Será o primeiro Log Exibido;
console.log('Depois da Primeira Promise!');

/* Async & Await */
// Pegar os erros com Try & Catch
async function run(){
    try {
        const response = await secondApiCall;
        console.log(response);
    }catch(err) {
        console.log(err);
    }
};

run();

console.log('Depois da Segunda Promise');