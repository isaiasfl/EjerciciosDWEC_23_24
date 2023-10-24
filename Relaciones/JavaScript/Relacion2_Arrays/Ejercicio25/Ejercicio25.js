/**
 * @author Carlos Álvarez Martín
 * @ttle Relación array II Ejercicio 25 
 * @description Ejercicio 25: Números que faltan
    Escribe una función llamada numerosFaltantes que encuentre los números faltantes en un
    rango dado dentro de un array. La función debe tomar un array de números arr y dos
    números enteros inicio y fin que representan el rango. La función debe devolver un array
    con los números que faltan en ese rango.
 */

/**
 * Encuentra los números faltantes en un rango dado dentro de un array.
 *
 * @param {number[]} arr - Un array de números.
 * @param {number} numInicial - El número inicial del rango.
 * @param {number} numFinal - El número final del rango.
 * @returns {number[]} - Un array que contiene los números faltantes en el rango.
 */
const numerosFaltantes = (arr, numInicial, numFinal) => {
  const arrFaltantes = [];
  for (num of arr) {
    num < numInicial || num > numFinal ? arrFaltantes.push(num) : "";
  }
  return arrFaltantes;
};

// ----------- Test -----------
console.log(numerosFaltantes([2, 4, 6, 1, 9, 4, 6, 8, 1], 3, 6));
