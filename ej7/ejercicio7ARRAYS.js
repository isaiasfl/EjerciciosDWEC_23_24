/**
 * @author: miguel470
 * @description: Escribe una función llamada eliminarElemento que tome un array arr y un elemento
 * elemento , y elimine la primera aparición de ese elemento en el array.
 */

// Con el splice le hago que devuelva un array que quitamos la posicion que este el elemento
const eliminarElemento = (arr,elemento) => arr.splice(arr.indexOf(elemento),1);

const arr = [1,1,2,3,4,1];

eliminarElemento(arr,1);