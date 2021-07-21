const user = {
    firstName: 'Victor',
    lastName: 'Guirra',
    age: 19,
    instagram: '@_guirra',
    skills: ['Front-End', 'Mobile', 'Database'],
    active: false,
};

// Spread (espalhar) operator

// user.active = true;
// Object.assign(user, { active: true });

// Conceito de Imutabilidade:
const updatedUser = {
    ...user,
    skills: [...user.skills, 'Devops'],
    active: true
}

console.log({ user, updatedUser });