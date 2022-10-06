const cep = document.querySelector("#cep");

const showData = (result)=>{
    for(const campo in result){
        if(document.querySelector("#" + campo)){
            document.querySelector("#" + campo).value = result[campo];
        }
    }
};

cep.addEventListener("blur", async (e)=>{
    // replace está substituindo o traço por espaço.
    let search = cep.value.replace("-", "");

    if (search.length < 8 || Number(search.value) === NaN ) {
        alert("CEP inválido!");
        cep.focus();
        return;
    }

    const options = {
        method: "GET",
        mode: "cors",
        cache: "default",
    };
    // axios - biblioteca javascript que usa fetch e XHR.
    try {
    const resultado = await fetch(
        // o fetch está fazendo uma promise interna.
        `https://viacep.com.br/ws/${search}/json/`,
        options
        );
        const json = await resultado.json();
        showData(json);
    }catch (error) {
        console.log("Temos um problema", error.message);
    }
        // recurso assincrono, retorna uma promise por que eu não sei se vai funcionar.
        // promisse é um recurso que não temos certeza se deu certo ou não, é uma intenção.
        // se der certo ele vai retornar o resolve, se der errado ele vai retornar o reject.
        // resolver quer dizer, funcionou, ai usamos a função then, se der errado, usamos catch.
        /*fetch(`https://viacep.com.br/ws/${search}/json`, options)
        .then(response => {
            response.json().then((result) => {
                console.log(result);
            })
        })
        .catch(err => { 
            console.log(e.message)
        });
        */



});