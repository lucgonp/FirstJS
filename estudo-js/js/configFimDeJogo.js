function configFimDeJogo(){
    campoPalpite.disabled = true;
    envioPalpite.disabled = true;
    botaoReinicio = document.createElement("button");
    botaoReinicio.textContent = "Iniciar novo jogo";
    document.body.appendChild(botaoReinicio);
    botaoReinicio.addEventListener("click", reiniciarJogo);
}