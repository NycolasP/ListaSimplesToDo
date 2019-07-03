var Participantes = document
    .querySelectorAll(".Participante");

for (var index = 0; index < Participantes.length; index++) {
    const competidores = Participantes[index];
 
    var coluna1nota = competidores.querySelector(".info-1nota");
    primeiranota = prompt("Primeira nota.");
    coluna1nota.textContent = primeiranota;

    var coluna2nota = competidores.querySelector(".info-2nota");
    segundanota = prompt("Segunda nota.");
    coluna2nota.textContent = segundanota;

    var coluna3nota = competidores.querySelector(".info-3nota");
    terceiranota = prompt("Terceira nota.");
    coluna3nota.textContent = terceiranota;

    var colunaTotal = competidores.querySelector(".info-total");
    nota1 = parseFloat(primeiranota);
    nota2 = parseFloat(segundanota);
    nota3 = parseFloat(terceiranota);
    total = nota1 + nota2 + nota3;
    var totalarredondado = total.toFixed(2);
    colunaTotal.textContent = totalarredondado;

    

    var colunaStatus = competidores.querySelector(".info-status");
    


    
    var statusValido = true 


   if(totalarredondado <= 22){
    statusValido = false 
    colunaStatus.textContent = "Reprovado";
   }

   if(statusValido == true){
    colunaStatus.textContent = "Aprovado";
   }


}

