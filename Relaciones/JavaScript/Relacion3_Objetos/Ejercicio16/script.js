/**
 * @author: Carlos Gomez Osorio
 * @description: Escribe una función que tome un Array de objetos y
 *  una cadena como argumentos. Agrega una propiedad con clave 'continente' y valor igual a la cadena
 *  a cada uno de los objetos. Devuelve el nuevo arreglo de objetos.
 */

/**
 * Función que añade una propiedad a cada objeto de un array de objetos
 * @param {Array} arr - Array con los objetos que modificaremos
 * @param {String} cadena - Valor asignado a cada propiedad
 * @returns {Array} - Nuevo array con los objetos modificados
 */

// Version 1
function agregarPropiedad(arr, cadena){
    const res = [];
  for(const obj of arr){ // Recorremos todos los objetos del array 
    obj.continente = cadena; // Creamos una propiedad continente, a la cual asignamos el valor de la cadena
    res.push(obj);
  }
  return res;
}

// Version 2
const agregarPropiedad2 = (arr, cadena) => { arr.forEach(obj => obj.continente = cadena) } 

// Version 3
const agregarPropiedad3 = (arr, cadena) => arr.map(obj => ({ ...obj, continente: cadena})); // En esta version no se guarda el cambio sobre el array

// -------- TEST -------------
const obj1 = {};
const obj2 = {};
const obj3 = {};
const array = [obj1, obj2, obj3];

console.log(agregarPropiedad(array, "Europa"));
console.log(agregarPropiedad2(array, "America"));
console.log(agregarPropiedad3(array, "Asia"));