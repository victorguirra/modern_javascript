const array = [
    { name: 'Iphone', price: 5000, quantity: 2 },
    { name: 'MacBook Pro', price: 20000, quantity: 1 },
    { name: 'Magic Mouse', price: 1000, quantity: 5 },
];

/* 
    Find => Buscar alguma coisa dentro do array;

    OBS: Retorna o primeiro elemento em que a
    condição passada é satisfeita;
*/

const find = array.find((product) => product.price > 1000);

console.log(find);

/* 
    FindIndex => Buscar a posição de alguma 
    coisa dentro do array;

    OBS: Retorna o indíce (posição) do primeiro 
    elemento em que a condição passada é satisfeita;
*/

const findIndex = array.findIndex((product) => product.name === 'Magic Mouse');

console.log(findIndex);

/*
    Some => Verifica se ALGUM elemento
    do array satisfaz a condição passada.

    Caso ALGUM elemento satisfaça, retorna true,
    senão, retorna false (Retorno Boolean);
*/

const some1 = array.some(product => product.title === 'Ipad Pro');
const some2 = array.some(product => product.quantity > 3);

console.log({ some1, some2 });

/*
    Every => Verifica se TODOS elemento
    do array satisfaz a condição passada.

    Caso TODOS elementos satisfaçam, retorna true,
    senão, retorna false (Retorno Boolean);
*/

const every1 = array.every(product => product.title === 'Ipad Pro');
const every2 = array.every(product => product.quantity > 3);
const every3 = array.every(product => product.price > 500);

console.log({ every1, every2, every3 });

/*
    Map => Criar um novo array baseado em
    um array anterior, porém com alguma
    alteração que queiramos fazer;

    Return do map é um array com a mesma
    quantidade de posições do array original;
*/

const map = array.map(product => {
    return {
        ...product,
        total: product.price * product.quantity,
    }
});

console.log({ map });