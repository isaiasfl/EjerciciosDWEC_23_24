/**
 * @author Rubén Zamora Castellano
 * @description Escribe una función llamada sumaArrays que tome dos arrays arr1 y arr2 del mismo tamaño.
    La función debe devolver un nuevo array que contenga la suma de los elementos
    correspondientes de arr1 y arr2.
 */
/**
 * @description La función suma dos arrays.
 * @param {Array} arr1 
 * @param {Array} arr2 
 * @returns Devuelve un array con la suma de dos arrays.
 */

const a=[1,2,3];
const b=[1,2,3];
const sumaArrays=(arr1,arr2) => arr1.length === arr2.length ? arr1.map((valor,indice) => valor+arr2[indice]) : "El tamaño del array es distinto";
console.log(sumaArrays(a,b));
