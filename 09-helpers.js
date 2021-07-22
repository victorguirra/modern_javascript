const tech = 'Node.js';
const array = ['NodeJS', 'React', 'Typescript', 'React Native'];

/*
    Includes => Verifica se dentro de uma string ou array
    existe alguma coisa que a gente está passando;

    OBS: É case sensitive;
*/

const includesString1 = tech.includes('ode');
const includesString2 = tech.includes('a');

const includesArray1 = array.includes('React');
const includesArray2 = array.includes('React Native');

console.log({ includesString1, includesString2, includesArray1, includesArray2 });

/*
    StartsWhit => Verifica se a string COMEÇA
    com uma determinada sequência de caracteres;

    OBS: É case sensitive;
*/

const startsWith1 = tech.startsWith('ode');
const startsWith2 = tech.startsWith('No');

console.log({ startsWith1 , startsWith2 });

/*
    EndssWhit => Verifica se a string TERMINA
    com uma determinada sequência de caracteres;

    OBS: É case sensitive;
*/

const endsWith1 = tech.endsWith('de.js');
const endsWith2 = tech.endsWith('No');

console.log({ endsWith1 , endsWith2 });