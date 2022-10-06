const carrosDOM = document.querySelector("#carros")
// CATEGORIAS DE FUNÇÕES.
//  paradigma procedural e paradigma funcional. não pode alterar os dados, porque ele sempre gerará um novo array.
// imultabilidade, os dados não mudam, eles evoluem.

// principais funções de array.
// manipula o proprio array, elas são do paradigma procedural
const veiculos = ["Chevrolet", "Ford", "Fiat", "Vw", "Honda", "Toyota", "Hyundai" ]
// forEach, para cada item do meu array.
// é um laço de iteração para array. sempre que queremos manipular o próprio array, usamos o forEach.
// para cada item desse array, passo value

// adciciona no final do array.
veiculos.push("BMW", "Mercedes");
// não funciona os dois se colocar após o forEach.
// adiciona no início do araay.
veiculos.unshift("Audi");
//remove e retorna o elemento removido.
//removendo o primeiro elemento do array.
const primeiro = veiculos.shift();
console.log("Removendo o primeiro elemento do array", primeiro);

//removendo o último elemento do array.
const ultimo = veiculos.pop();
console.log("Removendo o último elemento do array", ultimo);

//removendo um elemento do array.
//splice tira uma fatia.
// na posição 2 que é fiat, remova apenas 1 elemento, ou seja, o fiat.
const posicao = 2;
const removido = veiculos.splice(posicao, 1);

//removendo mais de um elemento do array.
// remova na posição 1, dois elementos.
const removidos = veiculos.splice(1,2);

//removendo e adicionando elementos no array.
// na posição 1 remova dois elemntos e adicone mais dois.
const removidos2 = veiculos.splice(1, 2, "Ferrari", "Lamborghini");

veiculos.forEach((value, Key) => {
    carrosDOM.innerHTML += `<option name="${Key}">${value}</option>`;
});
// colding in the dark, programação as cegas.

// SLICE - retorna um novo array.
const nbaTeams = ["Warriors", "Raptors", "Lakers", "Celtics", "Bucks", "76ers"];
// ele está pegando o elemento a partir da 3 posição, gerando um norro array com os elementos da posição 3 e 4.
// slice não inclui o último.
// então ele pega o elemento a partir da 3 posição e vai até a penultima posição, não pegando o útlimo.
// primeiro  parametro é opcional, e começa em zero.
// o ultimo parametro determina até onde deve ser filtrado, porém excluindo este útlimo elemento.
// pega o primeiro (0, 1)
// pega o primeiro também (-1).
// pegar o ultimo (5, 6)
const newNba = nbaTeams.slice(-1);

console.log(nbaTeams.slice(3, 5));
console.log(newNba, "último");

// map, filter, reduce, find, findIndex, search, sort, reverse, split, join, substring

const name = "Aléxia Raphaela Da Silva";
// split transforma, quebra uma string em array.
const nameArray = name.split(" ");
// join transforma em texto.
// join, transforma o que foi selecionado, em um texto e separado por espaço.
const nameComplete = [nameArray[0], nameArray.slice(-1)].join(" ");
console.log(nameComplete);

// MAP
// é semelhante ao forEach, porém ele gera um novo array.
// ele percorre todo o array.

const procuraCeltic = (nomeTime)=> {
    nomeTime == "Celtics" || nomeTime=="Raptors";
};
 
const celticsMap = nbaTeams.map(procuraCeltic);
const celticsFilter = nbaTeams.filter(procuraCeltic);
const celticsFind = nbaTeams.find(procuraCeltic);

console.log(celticsMap, "map"); // retorna um novo array, mapeando e buscando no array anterior..
console.log(celticsFilter, "filter"); // ele traz somente e/ou todas as ocorrencias verdadeiras. o filter vai do começo ao fim do array. 
console.log(celticsFind, "find"); // find pega apenas a primeira ocorrencia de uma busca com o parâmetro que a função determinou.

