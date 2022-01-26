const meuArray = [30, 30, 40, 5, 345, 3059, 4034, 6];

function valuesUnicos(arr){
    const mySet = new Set(arr);

    return [...mySet];
}
console.log(valuesUnicos(meuArray));