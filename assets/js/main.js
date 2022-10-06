// Trabalhando com JavaScript em um arquivo externo.
// sofre hoisting é issada para a pimeira linha do código.
// const e let obedecem a ordem que seria de cima para baixo, então da erro se for chamado antes de declarado.
// const e let só existe a partir da linha que é criado.
const nome = "Fiap";
console.log(nome, "chamando variável criada com var");

escreve("Exemplo de função nominal");
// função nominal - udf
function escreve(titulo){
    //alert(titulo);
}

// Função nominal
function mudaTitulo(novoTitulo) {
    document.querySelector("h1").innerHTML = novoTitulo;
}

mudaTitulo("Bom diaa!!");
// expressão de função - Function Expresion
// função anônima
// essa função era anonima porque não tem nome, porém ela foi armazenada em uma constante, então ela passou a ser uma function expression.
const mudaTitulo2 = function(target, novoTitulo) {
    document.querySelector(target).innerHTML = novoTitulo;
};
// target muda o elemento que você passar no console.
mudaTitulo2("h1", "Trocando o título");

const relogio = ()=>{
    const date = new Date();
    mudaTitulo2("h2",date.toLocaleTimeString());
};

setInterval(relogio,1000);
const frases = ["A vida é bela","A vida é curta", "A vida é uma dádiva"]

const mudaFrase = (alvo, texto, tempo) =>{
    //const frase = frases[Math.floor(Math.random() * frases.length)];
    //mudaTitulo2("h3", frase);
    let total = 2;
    setInterval(()=>{
        //vai somar o totl até que seja lenght==3
        document.querySelector(alvo).innerHTML = 
            texto[total >= texto.length - 1? (total = 0) : (total +=1)];
},tempo * 1000);
}
mudaFrase("h1", frases, 4);

//setInterval(relogio, 1000);

//setInterval(() => {}, tempo);

// funçõ muda frase()
/*
const randomPhrase = function(target, frases, tempo) {
   
    setInterval(() => {
        for(let i = 0; i <= frases.length; i++) {
            document.querySelector(target).innerHTML = frases[i];
                console.log(frases[i]);
            }
    }, tempo);

randomPhrase("h1", frases, 4000);
*/