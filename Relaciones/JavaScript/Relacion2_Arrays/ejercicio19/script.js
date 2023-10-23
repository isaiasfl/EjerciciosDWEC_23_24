/**
 * @author Ruben Perblac
 * 
 * @description Comprueba si una palabra es palídroma
 */

/**
 * Función de comprobación de palindromidad
 * 
 * @param {String} palabra 
 * @returns {Boolean}
 */
const esPalindromo = (palabra) =>
  // Cojemos la mitad de la palabra y comprobamos
  // si es igual a la mitad de su inversa.
  // Para invertir la palabra:
  //    1. la convertimos en un array de sus letras
  //    2. invertimos el orden del array
  //    3. lo unimos en un String continuo
  palabra.slice(0, palabra.length / 2) ===
  [...palabra]
    .reverse()
    .join("")
    .slice(0, palabra.length / 2);
