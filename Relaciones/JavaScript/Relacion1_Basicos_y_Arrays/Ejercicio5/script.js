/**
 * @author Miguel Arroyo Calvo
 * @description Enunciado I Ejercicios Arrays --> Ejericicio 5
 */

/**
 * Enunciado:
 * Define una función llamada contarPalabras que tome una cadena de texto texto y devuelva un
 * objeto que cuente cuántas veces aparece cada palabra en el texto.
 */

/**
 * Pasándole como parámetro una cadena de texto, devuelve un array de cada palabra del texto y el número de veces de aparece --> palabra: conteo
 * @param {string} texto
 * @returns {array} conteoP;
 */
function contarPalabras(texto) {
  // almacenamos en un array las palabras de la cadena, separadas por espacios, comas o puntos.
  const arrayPalabras = texto.split(/[ ,.]+/);
  // Aquí almacenaremos el conteo de las palabras (palabra: contador)
  const conteoP = [];
  const palabrasAparecidas = [];
  // almacenamos en otro array las palabras que ya hemos recorrido del array. Recorreremos el array de palabras para ello.
  for (i = 0; i < arrayPalabras.length; i++) {
    let contador = 0;
    // controlamos si la palabra ya ha aparecido en el array anteriormente con este boolean
    let aparecido = false;
    // Recorremos el array de palabras aparecidas para compararlas y saber si ya ha aparecido o no
    for (j = 0; j < palabrasAparecidas.length; j++) {
      // En caso de ya haber almacenado la palabra en el array de palabras aparecidas, indicamos con el boolean en true que ya ha aparecido con anterioridad
      if (arrayPalabras[i] === palabrasAparecidas[j]) {
        aparecido = true;
      }
    }
    // Si aún no había aparecido la palabra, recorremos de nuevo el array con todas las palabras de la cadena introducida para contarlas
    if (aparecido === false) {
      for (k = 0; k < arrayPalabras.length; k++) {
        if (arrayPalabras[i] === arrayPalabras[k]) {
          contador++;
        }
      }
      // Una vez hemos contado cuantas veces aparece la palabra en la cadena, añadimos esta palabra al array de palabras aparecidas para no volver a contarlas y añadimos al array conteoP la clave valor --> palabra: numero de veces que aparece
      palabrasAparecidas.push(arrayPalabras[i]);
      conteoP.push(`${arrayPalabras[i]}: ${contador}`);
    }
  }
  return conteoP;
}

const input = prompt(
  "Introduce la cadena de texto de la que quieres contar sus palabras: "
);

const conteoP2 = contarPalabras(input);

console.table(input);
console.table(conteoP2);
