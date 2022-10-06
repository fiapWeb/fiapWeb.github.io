// diferenças entre arrow function e funções nominais ou expressões de função.

const resultado = document.querySelector('#resultado');

let myFunc1 = {
    showArguments(){
        resultado.innerHTML = arguments;
        console.log(arguments);
    },
};

// chamando a função
myFunc1.showArguments(
    "Avanade",
    "Full-stack Developer",
    "React",
    "NodeJS",
    "TypeScript"
);

// spred operator ... destructuring assignment
// arrow function não acessa arguments
let myFunc2 = {
    showArguments: () => {
       // resultado.innerHTML = arguments;
       // console.log(...arguments);
    },
};

myFunc2.showArguments(
    "Avanade",
    "Full-stack Developer",
    "React",
    "NodeJS",
    "TypeScript"
);

let user = {
    name: "Glaucio Daniel",
    usandoArrow: () => {
        console.log("Meu nome é ", this.nam, "Arrow Function");
    },
    usandoNominal(){
        console.log("Meu nome é ", this.name, "Nominal Function");
    },
};

user.usandoArrow();
user.usandoNominal();
/** spred operator
 
{
    "name":"Glaucio Daniel",
    "email":"glauciodaniel@gmail.com",
    "password": "123456"
}

const {password, ...data} = await prisma.user.findById(1);

return data;

 */
