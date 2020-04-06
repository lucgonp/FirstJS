var pacientes = document.querySelectorAll(".paciente");
var titulo = document.querySelector("#tituloPagina");


for (var i = 0; i < pacientes.length; i++) {
 
var paciente = pacientes[i];  
var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent; 
var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent
var tdImc = paciente.querySelector(".info-imc");
var pesoValido = true;
var alturaValida = true;

if (peso < 0 || peso > 200) {
    console.log("Peso inválido");
    pesoValido = false;
    tdImc.textContent = "Peso Inválido";
    paciente.classList.add("paciente-invalido")
}

if (altura < 1 || altura > 2.5) {
    console.log("Altura inválido");
    alturaValida = false;
    tdImc.textContent = "Altura Inválido";
    paciente.classList.add("paciente-invalido")
}

if (alturaValida && pesoValido ) {
    var imc = calcularImcF(peso, altura);
    tdImc.textContent = imc;
}
}

function calcularImcF (peso, altura){
    var imc = 0;
    imc = peso / (altura * altura);
    return imc.toFixed(2);
}