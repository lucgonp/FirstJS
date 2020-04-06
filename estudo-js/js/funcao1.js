function criarParagrafo(){
    var para = document.createElement('p');
    para.textContent = "Você Clicou no botão";
    document.body.appendChild(para);

}

var botoes = document.querySelectorAll("#teste");

for (var i = 0; i < botoes.length; i++) {
    botoes[i].addEventListener("click", criarParagrafo);
    
}

var teste = document.querySelector("#teste").textContent;
console.log(teste);