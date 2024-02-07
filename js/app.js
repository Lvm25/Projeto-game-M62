let numeroSecreto =5;

var chute = prompt("digite um número de 1 a 10");

while(chute != numeroSecreto){

    if(numeroSecreto === chute){
        alert(9)
        alert("você acertou");
        break
    }else{
        alert("você errou!");
    }

    if(chute < numeroSecreto ){
        alert(" o número secreto é maior");
    }else{

        alert("o número secreto é menor do que o número incerido");
    }

    var chute = prompt("digite um número de 1 a 10");

}
