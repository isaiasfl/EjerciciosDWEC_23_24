/**
 * @author Sergio Jurado Trillo
 * @description Escribe una función llamada sumarMatrices que sume dos matrices (arrays bidimensionales) y devuelva el resultado. 
 * Las matrices de entrada estarán representadas como arrays de arrays con la misma cantidad de filas y columnas.
 */

//-----Función ------

/**
 * Esta función va a sumar dos matrices que tengan el mismo tamaño. 
 * En el caso de que el tamaño de las dos matrices sean diferentes, devolverá un mensaje diciendo que no tienen el mismo tamaño. 
 * En caso contrario, devolverá una nueva matriz.
 * @param {Array[][]} matriz1 Primera Matriz
 * @param {Array[][]} matriz2  Segunda Matriz
 * @returns {Array[][]} Suma de las matrices
 */
function sumarMatrices(mat1, mat2) {
    if (typeof mat1 != Array || typeof mat2 != Array) return "Algún parametro introducido no es de tipo Array";
    for (let i = 0; i < mat1.length; i++) {
        if (mat1[i].length !== mat2[i].length) {
            return "Las matrices de entrada no tienen el mismo tamaño.";
        }
    }

    matrizSumada = matriz1.map((fila, i) => fila.map((valor, j) => valor + matriz2[i][j]));
    return matrizSumada;
}

//----- Declaración de variables -----

//Declaramos la primera matriz
var matriz1 = [[1, 2, 3, 4],
[4, 5, 6, 4],
[7, 8, 9, 4]];
var prueba = "Mondongo";
//Declaramos la segunda matriz
var matriz2 = [[9, 8, 7, 4],
[6, 5, 4, 4],
[3, 2, 1, 4]];

// ----- Inicio de programa -----

console.log(sumarMatrices(prueba, matriz2));

