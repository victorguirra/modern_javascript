const user = {
    firstName: 'Victor',
    lastName: 'Guirra',
    full_name: 'Victor Hugo Guirra',
    age: 19,
    instagram: '@_guirra',
    skills: ['Front-End', 'Mobile', 'Database'],
};

// Rest (resto) Operator;
// Precisa ser o último elemento;

const { firstName, skills, ...userRest } = user;
const [ primary, ...skillsRest ] = skills;

console.log(userRest, skillsRest);