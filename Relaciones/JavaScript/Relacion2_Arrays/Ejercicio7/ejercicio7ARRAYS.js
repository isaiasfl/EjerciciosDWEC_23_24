/**
 * @author: miguel470
 * @description: Escribe una función llamada eliminarElemento que tome un array arr y un elemento
 * elemento , y elimine la primera aparición de ese elemento en el array.
 */

/**
 * Borra la primera aparición del elemento del array
 * 
 * @param { Array } arr - Array en el que buscaremos el elemento a borrar
 * @param { * } elemento - Elemento que queremos borrar su primera aparición
 * @returns { Array } - Devuelve el array resultante con el elemento borrado si está
 */
const eliminarElemento = (arr,elemento) => arr.splice(arr.indexOf(elemento),1);
// Con el splice le hago que devuelva un array que quitamos la posicion que este el elemento


//----test-----


const arr = [1,1,2,3,4,1];

eliminarElemento(arr,1);