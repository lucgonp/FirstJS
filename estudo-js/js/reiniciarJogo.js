function reiniciarJogo(){
    contagemPalpites = 1;

    var reiniciarParas = document.querySelectorAll(".resultadoParas p");
    for (var i = 0; i < reiniciarParas.length; i++) {
        reiniciarParas[i].textContent = "";
        
    }


    botaoReinicio.parentNode.removeChild(botaoReinicio);

    campoPalpite.disabled = false;
    envioPalpite.disabled = false;
    campoPalpite.value = "";
    campoPalpite.focus();

    ultimoResultado.style.backgroundColor = "white";

    numeroAleatorio = Math.floor(Math.random()*100) +1;

}
