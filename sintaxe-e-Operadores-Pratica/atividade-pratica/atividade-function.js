//escrevendo meu código com boas práticas de forma enxuta.

function comparaNumeros(num1, num2){
    if (!num1 || !num2) return 'Defina dois números!';
    const primeiraFrase = criaPrimeiraFrase (num1, num2);
    const segundaFrase = criaSegundaFrase(num1, num2);
}
function criaPrimeiraFrase(num1, num2){
    let saoIguais = '';

    //Nesse caso a condição será o "não" são iguais.
    if(num1 !== num2){
        saoIguais = 'não';
    }

    return 'Os numeros ${num1} e ${num2} ${saoIguais} são iguais.';
}

function criaSegundaFrase(num1,num2){
    const soma = num1 + num2;

    let resultado10 = 'menor';
    let resultado20 = 'menor';

    const compara10 = soma > 10;
    const compara20 = soma > 20;

    if (compara10){
        resultado10 = 'maior';
    }
    if (compara20){
        resultado20 = 'maior';
    }

    return 'Sua soma é ${soma}, que é ${resultado10} que 10 e ${resultado20} que 20.';
}

console.log(comparaNumeros(10, 10));





//Criando uma função que recebe dois parametros(num1, num2)//

/* function comparaNumero(num1, num2) {

    /**
     * Confira se os numeros são iguas( nesse 
     * caso foi utilisado a variável (const *"saoIguais que recebe os dois parametros *usando o sinal (===) que verifica a *igualdade e o tipo de dados ")
     */
    //const saoIguais = num1 === num2;
    /* Confira se a soam dos numeros é maior que 10 ou menor que 20. No parametro abaixo a soma receberá a soma dos dois valores  
    const soma = num1 + num2;

    /*Aqui está uma condição se um for igual apresenta uma respost, se não outra.*/
    //if (saoIguais){
    /*
        return "São iguais";
    
    return "Não são iguais"; */
    
    //if ternario
       /* return saoIguais ? "São Iguais" : "não são iguais";
    }
    return "Não são iguais"
}
console.log(comparaNumero())
*/