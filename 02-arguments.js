// Arguments

function sum(){
    console.log(Object.values(arguments));
}

sum(1, 2, 3, 4, 5, 6 ,7, 8, 'Victor');

// Rest;

function newSum(firstParam, ...rest){
    console.log({ firstParam });
    console.log({ rest });
}

newSum(1, 2, 3, 4, 5, 6 ,7, 8, 'Victor');

// Arguments em Arrow Function

const sumArrow = () => {
    // Funciona igual o This;
    // Herda o argument do pai dele;
    console.log(arguments);
}

sumArrow(1, 2, 3, 4, 5, 6 ,7, 8, 'Victor');