/*
    @author: Cristina Luque Santaella
    @description: Este ejercicio consiste en buscar el índice de la primera posición en la que se encuentra un elemento 
    en un array dado.
*/

/**
 * Función que devuelve el índice en el que se encuentra el elemento buscado dentro de un array
 * @param {Array} arr 
 * @param {Number} elemento 
 * @returns {Number}
 */
const buscarElemento = (arr,elemento) => {
    let foundIndex = -1; // Al no encontrar el elemento se inicializa a -1
    
    arr.forEach((valor, index) => {// Se recorren todos los elementos del array y junto a su índice
        if (valor === elemento) {
            foundIndex = index; // Actualizamos el índice si encontramos el elemento
        }
    });
    
     return foundIndex; // Devolvemos el índice del elemento encontrado o -1 si no se encontró
}


const array= [3,5,7,2,1,5];
const resultado=buscarElemento(array,2);
console.log(resultado);
