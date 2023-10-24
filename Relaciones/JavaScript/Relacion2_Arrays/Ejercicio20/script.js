/**
 * @author: Daulin Polanco Beard
 * @description: Escribe una función llamada "diferenciaArrays" que encuentre
 * la diferencia entre dos arrays, es decir, los elementos que están en uno
 * pero no en el otro. La función debe devolver un nuevo array con los 
 * elementos diferentes.
 */


// Constantes de tipo array que guardan los datos con los que probaremos que la funcion funciona.
const arr1 = ["a","b","c","e"];
const arr2 = ["a","b","f","g","h"];

const arr3 = [1,2,3,4,5,0];
const arr4 = [1,2,6,7,8,9,1];


/**
 * Diferencia entre dos arrays, es decir, los elementos que están en uno
 * pero no en el otro. La función debe devolver un nuevo array con los 
 * elementos diferentes.
 * @param {Array} a1 Primer array.
 * @param {Array} a2 Segundo array.
 * @returns {Array} Coge primer array y segundo array, y devuelve un nuevo array con los elementos que son unicos de cada uno.   
 */
function diferenciaArrays(a1,a2) {
    let difArr = [];
    for (const val of a1) {
        if (!a2.includes(val)) {
            difArr.push(val);
        }
    }
    for (const val of a2) {
        if (!a1.includes(val)) {
            difArr.push(val);
        }
    }
    return difArr;    
}

console.log(diferenciaArrays(arr1,arr2));