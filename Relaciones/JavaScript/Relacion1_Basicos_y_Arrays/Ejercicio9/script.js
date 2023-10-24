/*
    @author: Cristina Luque Santaella
    @description: Este ejercicio consiste en buscar el índice de la primera posición en la que se encuentra un elemento 
    en un array dado.
*/

/**
 * Función que devuelve el índice en el que se encuentra el elemento buscado dentro de un array
 * @param {Array} arr // Este es el array que se pide en la función
 * @param {Number} elemento  // Este es elemento que estamos buscando en el array en este caso
 * @returns {Number} // Este número es el índice de mi elemento encontrado
 */
const buscarElemento = (arr,elemento) => {
    let foundIndex = -1; // "foundIndex" se inicializa a -1 porque aún no se ha encontrado el elemento
    
    arr.forEach((valor, index) => {// Se recorren todos los elementos del array junto a su índice
        if (valor === elemento) {
            foundIndex = index; // Actualizamos "foundIndex" si encontramos el elemento con el índice del elemento encontrado
        }
    });
    
     return foundIndex; // Devolvemos el índice del elemento encontrado o -1 si no se encontró
}

//------ Test -------

const array= [3,5,7,2,1,5];
const resultado=buscarElemento(array,2);
console.log(resultado);
