const aereasNacionais = ['Azul', 'Gol', 'Latam'];

const airCompanies = [...aereasNacionais,'Delta', 'United Airlines', 'Emirates', 'Qatar', 'Tap'];

console.log(airCompanies)

// atribuição por desestruturação.

const [azul, voeGol, latam, delta, ...internacionais] = airCompanies;

console.log(delta, "verificando a variável delta");
console.log(azul)
console.log(voeGol)
console.log(latam)

console.log(internacionais, "verificando a variável internacionais");

// Object Relation Map - ORM - tabela SQL ou documento NoSQL - Transforma em Objetos.
// hibernate - Java
// Node JS - typeORM (Definição de estruturas de tabelas - DDL) - Prisma (Manipular os dados)

const user = {
    name: "Alexia Raphaela",
    email: "alxiaraphaela@gmail.com",
    password: "123456"
}
// extrai password do objeto user e o restante coloque na variavel data
const {password, ...data} = user;

console.log(data, "retornando dados da API");

//Eventos - JavaScript é uma linguagem dirigida a eventos. Algo acontece, então reagimos(função).
// Eventos de tempo - setTimeout, setInterval
// Eventos de DOM - onClick, onChange, onSubmit
// Eventos de teclado - onKeyDown, onKeyUp, onKeyPress
// Eventos de mouse - onMouseDown, onMouseUp, onMouseMove
// Eventos de formulário - onFocus, onBlur, onChange
// Eventos de mídia - onPlay, onPause, onEnded
// Eventos de rede - onLoad, onError, onAbort

// que.addEventListener("evento", função) - quem é o elemento que vai receber o evento, "evento" é o tipo do evento que será aplicado e a função que será executada para criar esse evento.

const body = document.querySelector("body");
body.style.width = "100%";
body.style.height = "100vh";

body.addEventListener("mouseover", (event) => {
    body.style.backgroundColor = "#d4d4d4";
    console.log("executou o evento"), event;
})