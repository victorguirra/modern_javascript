// Mesmo funcionamento das aspas porém com CRASE;

// Template String permite quebra de linha

/*
console.log('Esta éa primeira linha
Esta é a segunda linha');
*/

console.log(`Esta éa primeira linha
Esta é a segunda linha`);

// Template String permite interpolação de expressões Javascript;

const name = 'Victor';

//console.log('Seja bem-vindo ' + name);
console.log(`Seja bem vindo ${ name }`);