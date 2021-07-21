// Destructuring;

const user = {
    firstName: 'Victor',
    lastName: 'Guirra',
    full_name: 'Victor Hugo Guirra',
    age: 19,
    instagram: '@_guirra',
    skills: ['Front End', 'Mobile', 'Database'],
};

// Ultrapassado;
/**** 
    const firstName = user.firstName;
    const age = user.age;
****/

// Destructuring;

const { firstName, age, skills, full_name: fullName } = user;
const [ primary, secondary, tertiary ] = skills;

console.log({ firstName, age, fullName, primary, secondary, tertiary });