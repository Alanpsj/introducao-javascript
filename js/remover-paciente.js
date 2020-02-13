

var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(event){
   // var alvoEvento = event.target;
   // var paiDoAlvo = alvoEvento.parentNode; // TR = paciente = remover    
   // paiDoAlvo.remove();
   // event.target.parentNode.remove(); // Essa linha é a mesma coisa das três linhas acima

   event.target.parentNode.classList.add("fadeOut");

   setTimeout(function(){
       event.target.parentNode.remove();
   }, 500);
    
});

/** 
var pacientes = document.querySelectorAll(".paciente");
pacientes.forEach(function(paciente){
    paciente.addEventListener("dblclick", function(){
        console.log("Fui clicado com duplo click");
        this.remove();   //o this é uma palavra de contexto, a quem o evento está atrelado;
                        // O this está sempre atrelado ao dono do evento, nesse caso o dono do evento (quem chamou o evento) é o paciente.
    });
});
*/