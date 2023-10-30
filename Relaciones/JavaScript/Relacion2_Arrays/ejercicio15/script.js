/**
 * @author Sergio Jurado Trillo
 * @description Define una función llamada invertirCadena que tome una cadena y devuelva una nueva cadena con los caracteres en orden inverso
 */

// ----- Funciones -----

/**
 * En esta función vamos a pasarle una cadena y haremos que la devuelva con el orden contrario, es decir : "Hola Mundo" -> "odnuM aloH";
 * @param {String} cadena para invertir
 * @returns {String} cadena invertida
 */
function invertirCadena(cadena) {
    var nuevaCadena = cadena.split("").reverse().join("");
    return nuevaCadena;
}

// ----- Inicio del programa -----

console.log(invertirCadena("Hola Mundo, Soy Sergio"));