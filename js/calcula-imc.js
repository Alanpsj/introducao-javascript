console.log("Fui carregado de um arquivo externo");
var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";


//var paciente = document.querySelector("#primeiro-paciente");
var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++){

    var paciente = pacientes[i]


    var tdPeso = paciente.querySelector(".info-peso");

    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura")
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc")


    tdImc.textContent = imc;

    var pesoEhValido = validaPeso(peso); // true ou false
    var alturaEhValida = validaAltura(altura);

    if(!pesoEhValido){
        console.log("Peso inválido!");
        pesoEhValido = false;
        tdImc.textContent = "Peso inválido!";
        paciente.classList.add("paciente-invalido"); // boa prática pois além de mais fácil manutenção, separa o que é visual da linguagem de programação
    }

    if (!alturaEhValida){        
        console.log("Altura inválida!");
        alturaEhValida = false;
        tdImc.textContent = "Altura inválida!";
        paciente.style.backgroundColor = "orange"; //não é boa prática
    }

    if (pesoEhValido && alturaEhValida){
        var imc = calculaImc(peso, altura);
        tdImc.textContent = imc;
    }
}

function validaPeso(peso){
    if(peso >= 0 && peso < 1000){
        return true;
    }else{
        return false;
    }
}

function validaAltura(altura){
    if(altura >= 0 && altura <= 3.00){
        return true;
    }else{
        return false;
    }
}

function calculaImc(peso, altura){
    var imc = 0;
    
    imc = peso / (altura*altura);

    return imc.toFixed(2);
}






