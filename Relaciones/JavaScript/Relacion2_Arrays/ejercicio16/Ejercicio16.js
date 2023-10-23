/**
 * @author: Martín MV.
 * @description: Dada una cadena, devolver una cadena donde la primera letra de cada palabra sea mayúscula.
 */

/**
 * Devuleve una cadena con la primera letra de cada palabra capitalizadas.
 * @param {String} cadena - La cadena inicial que va a ser transformada
 * @return {String} - La cadena resultado donde la primera letra de cada palabra 
 */
function capitalizarPalabras(cadena) {
    return str.split(' ')
            .map(function (str) {return `${str.charAt(0).toUpperCase()}${str.slice(1)}`})
            .reduce( (acum, str) => acum + " " + str, "")
            .trimStart();
}