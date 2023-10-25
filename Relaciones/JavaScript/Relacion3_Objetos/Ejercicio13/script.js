"strict mode";

/**
 * @author Miguel Arroyo Calvo
 * @description Ejercicios de Objetos en JavaScript --> Ejercicio 13
 */

/**
 * Enunciado:
 * Intercambiar claves y valores de objetos. Escribe una función que tome un objeto como argumento.
 * De alguna manera, las propiedades y claves del objeto se mezclaron. Intercambia la clave del objeto
 * JavaScript con sus valores y devuelve el objeto resultante.
 */

const objeto = {
  edad: 30,
  ciudad: "Granada",
};

/**
 * Pasándole un objeto, esta función devuelve otro objeto con las claves y valores del objeto intercambiados del objeto que hemos pasado como parámetro
 * @param {Object} objeto1
 * @returns {Object} objtInvertido
 */
function fusion(objeto1) {
  // Claves del objeto almacenados en un array
  const clavesObj = Object.keys(objeto1);
  // Valores del objeto almacenados en un array
  const valoresObj = Object.values(objeto1);
  // Objeto en el que almacenaremos las claves y valores invertidos
  const objtInvertido = {};
  // Recorremos el array de claves
  for (i in clavesObj) {
    // Asignamos un una nueva {clave: valor} al objeto, la clave será el valor y el valor será la clave del objeto pasado como parámetro
    objtInvertido[valoresObj[i]] = clavesObj[i];
  }
  return objtInvertido;
}

const objetoR = fusion(objeto);

console.log(objetoR);
