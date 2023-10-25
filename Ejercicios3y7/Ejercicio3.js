/**
 * @author: Abel Martinez Peinado
 * @description: Escribe una función que tome un objeto (a) y una cadena (b) como argumento. Devuelve verdadero si el objeto tiene una propiedad con la clave 'b', pero solo si tiene un valor verdadero. En otras palabras, no debe ser nulo, indefinido o falso. Devuelve falso en caso contrario.
 * @version: 1.0
*/

const tienePropiedadVerdadera = (objeto, clave) => objeto.hasOwnProperty(clave) && objeto[clave] === true ? true : false;

console.log(tienePropiedadVerdadera({a: 'alo', b: false, c: true}, 'c'));