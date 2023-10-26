/**
 * @author: Abel Martinez Peinado
 * @description: Escribe una función que tome un objeto (a) y una cadena (b) como argumento. Devuelve verdadero si el objeto tiene una propiedad con la clave 'b', pero solo si tiene un valor verdadero. En otras palabras, no debe ser nulo, indefinido o falso. Devuelve falso en caso contrario.
 * @version: 1.0
*/

/**
 * Esta función mediante el método hasOwnProperty comprueba que el objeto contenga la propiedad especificada
 * y luego se comprueba si dicha clave contiene un valor true.
 *
 * @param {Object} objeto - Objeto el cual contenga una propiedad con la clave
 * @param {*} clave - esta clave es la propiedad que debe contener el objeto
 * return Boolean
 */
const tienePropiedadVerdadera = (objeto, clave) => objeto.hasOwnProperty(clave) && objeto[clave] === true ? true : false;

//Prueba donde inserto un objeto que contenga la propiedad c y esta sea true.
console.log(tienePropiedadVerdadera({a: 'alo', b: false, c: true}, 'c'));
