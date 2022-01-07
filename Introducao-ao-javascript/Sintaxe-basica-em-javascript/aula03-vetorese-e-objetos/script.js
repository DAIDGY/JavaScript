// o que são vetores ou arrays

// como declarar um array
/* let array = ['string', 1, true];
console.log(array);
 */

// pode guardar vários tipos de dados
let array = ['string', 1, true, ['array1'], ['array2'], ['array3'], ['array4']];
console.log(array[2]);


// forEach (tras o item mais o seu indice)
/* array.forEach(function(item, index){console.log(item, index)});
 */

// push ( adiciona um novo item no final de um array)
/* array.push('novo item');
console.log(array); */

// pop remove um item no final de um array
/* array.pop();
console.log(array) */

// shift remove um item do inicio de um array
/* array.shift();
console.log(array) */

//unshift adiciona no inicio um novo item em um array
/* array.unshift('mais novo item');
console.log(array); */

/* //indexOf retona o indice de um valor/* 
console.log(array.indexOf(true)) */

// splice - remove ou substitui um item pelo índice
/* 
array.splice(0, 4)
console.log(array)
 */

//slice - rtorna uma parte de um array existente.
/* let novoArray = array.slice(0, 4);
console.log(array); */

//Acessando as propriedades de um objeto
 let object = {string:'string', number: 1, boolean: true, array: ['array'], objectInteiro: 'objeto interno'};
