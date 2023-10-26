/**
 * @author Rafael Amador Castellano
 * @description Escribe una función llamada unirArrays que acepte un número variable de arrays y los combine
 * en uno solo. Nota: Se podría utilizar el método reduce y el método concat para lograrlo.
 */


/**
 * Esta funcion usa el metodo reduce, en este sesult actua como acumulador y array como el valor de cada iteración, 
 * en cada iteracion se concatena el valor array con el acumulador result
 * @param  {...any} array pasamos un numero indefinido de arrays
 * @returns {array} Esta función devuelve un array con todos los arrays combinados.
 */
const unirArrays = (...arrays) => arrays.reduce((result, array) => result.concat(array), []);




//--------  test  ---------
console.log(unirArrays([1,2,3,4,5], [6,7,8,9,10],[11,12,13,14,15]))