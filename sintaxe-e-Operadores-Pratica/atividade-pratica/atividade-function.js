function comparaNumero(num1, num2) {
    const saoIguais = num1 === num2;
    const soma = num1 + num2;

    if (saoIguais){
        return "São iguais";
    }
    return "Não são iguais"
}
console.log(comparaNumero(1, 2))

 /* if ternário*/
    /* return saoIguais ? "São Iguais" : "não são iguais";*/