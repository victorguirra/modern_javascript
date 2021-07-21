/**** 
    A principal diferença entre 
    a Keyword Function e a Arrow Function é o contexto do objeto THIS;
****/

// Keyword Function

function myFunction(){
    // Possui o seu próprio this;
    // This == Este;
    // Este this se refere ao valor desta função;
    this.name = 'Victor Guirra';
};

// Ao passar o "NEW" a gente transforma uma função em um objeto (Constructor);
//console.log(new myFunction());

/**********************************************************************************/

// Arrow Function

const myArrowFunction = () => {
    // Possui o this do escopo onde foram criadas;
    // Arrow function não possui construtor;
    // Esse THIS representa o Node;
    this.name = 'Victor Guirra'
};

//console.log(myArrowFunction());

//console.log(this);

/**********************************************************************************/

function myFunctionWithArrowFunction(){
    this.name = 'Victor Hugo';

    const myArrowFunctionInKeywordFunction = () => {
        this.lastName = 'Guirra';
    }

    myArrowFunctionInKeywordFunction();
}

console.log(new myFunctionWithArrowFunction);
console.log(this);