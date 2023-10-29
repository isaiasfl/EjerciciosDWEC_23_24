/**
 * @author: Raisa Julia Ochoa Domínguez
 *@description: Escribe una función llamada multiplicarMatrizPorEscalar que tome una matriz matriz y un número escalar.
 *La función debe multiplicar cada elemento de la matriz por el escalar y devolver una nueva matriz con los
 *resultados.
 */

/**
 * Función con la que tomaremos una matriz y numero escalar que utilizaremos para multiplicar la matriz
 * @param {[Array]} matriz Matriz de numeros a multiplicar
 * @param {number} escalar Nuemro por el que multiplicamos la matriz
 * @returns Nueva matriz de numeros
 */
/**
 * @author: Raisa Julia Ochoa Domínguez
 *@description: Escribe una función llamada multiplicarMatrizPorEscalar que tome una matriz matriz y un número escalar.
 *La función debe multiplicar cada elemento de la matriz por el escalar y devolver una nueva matriz con los
 *resultados.
 */

/**
 * Función con la que tomaremos una matriz y numero escalar que utilizaremos para multiplicar la matriz
 * @param {[Array]} matriz Matriz de numeros a multiplicar
 * @param {number} escalar Nuemro por el que multiplicamos la matriz
 * @returns Nueva matriz de numeros
 */
function multiplicarMatrizPorEscalar(matriz, escalar) {
  if (typeof escalar !== "number") {
    return "El escalar introducido no es un número válido";
  }

  const resultado = [];

  for (let i = 0; i < matriz.length; i++) {
    if (!Array.isArray(matriz[i])) {
      return `El elemento en la fila ${i} no es un array válido`;
    } else {
      const filaResultado = [];
      for (let j = 0; j < matriz[i].length; j++) {
        if (typeof matriz[i][j] !== "number") {
          return `El elemento en la fila ${i} y columna ${j} no es un número válido`;
        }
        filaResultado.push(matriz[i][j] * escalar);
      }

      resultado.push(filaResultado);
    }
  }

  return resultado;
}

//------------------- TEST ------------------

const matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
let escalar = 2;

const matrizResultante = multiplicarMatrizPorEscalar(matriz, escalar);
console.log(matrizResultante);
