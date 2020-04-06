function conferirPalpite() {

    var palpiteUsuario = Number(campoPalpite.value);
    if (contagemPalpites === 1) {
        palpites.textContent = "Palpites anteriores: ";
    }
    palpites.textContent += palpiteUsuario  + " ";

    if (palpiteUsuario === numeroAleatorio) {
        ultimoResultado.textContent = "Parabens! Você acertou!";
        ultimoResultado.style.backgroundColor = "green";
        baixoOuAlto.textContent = "";
        configFimDeJogo();
    }else if(contagemPalpites === 10){
            ultimoResultado.textContent = "!!!Fim de jogo!!!";
            baixoOuAlto.textContent = "";
            configFimDeJogo();
    }else{
        ultimoResultado.textContent = "Errado!";
        ultimoResultado.style.backgroundColor = "red";
        if (palpiteUsuario < numeroAleatorio) {
            baixoOuAlto.textContent = "Seu palpite está muito baixo!";
        }else if(palpiteUsuario > numeroAleatorio){
            baixoOuAlto.textContent = "Seu palpite está muito alto!";
        }
    }

   
    contagemPalpites++;
    campoPalpite.value = " ";
    campoPalpite.focus();

}

envioPalpite.addEventListener("click", conferirPalpite);
