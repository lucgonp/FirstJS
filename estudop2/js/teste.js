var botao = document.querySelector("#enviar");
botao.addEventListener("click", function(event){
    event.preventDefault();
    var form = document.querySelector("#adicao");
 
    var valorDigitado1 = clicarEnviar(form);

    var numeroTr = montarTr(valorDigitado1);

    console.log(valorDigitado1);
});


function clicarEnviar(form) {
    var numero = {
        valor: form.numeroEsc.value
    }
    return numero;
}

function montarTr(numero){
    var numeroTr = document.createElement("tr");
    numeroTr.classList.add("tabela1");
    numeroTr.appendChild(montarTd(numero.numeroEsc,"informaValor1"));

    return numeroTr;
    console.log(numeroTr);
}

function montarTd(dado, classe){
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);
    return td;
}

