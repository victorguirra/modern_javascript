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