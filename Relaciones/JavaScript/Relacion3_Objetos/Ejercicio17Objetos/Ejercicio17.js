/**
 * @author: Alberto Jimenez Malpica
 * @description: Relacion Ejercicios Objetos
 * .
 * @date : 24/10/23
 */


//Ejercicio 17
//Convertir matriz en objeto con contador. Escriba una función que tome una matriz de números como
//argumento. Convierta la matriz en un objeto. Debe tener una clave para cada valor único de la matriz.

//El valor del objeto correspondiente debe ser el número de veces que aparece la clave dentro de la
//matriz.

/**
 * 
 * @param {*} matriz Matiz que contenga los datos a contar
 * @returns Devuelve un objeto con clave: elementos de la matriz y valor: el numero de veces que exista
 */
function matrizAObjetoConContador(matriz) {
    let contador = {};
  
    for (const valor of matriz) {
      if (contador[valor]) {
        contador[valor] += 1;
      } else {
        contador[valor] = 1;
      }
    }
  
    return contador;
  }
  
  // Ejemplo de uso:
  const matriz = [1, 2, 3, 2, 3, 3, 4, 4, 5];
  const resultado = matrizAObjetoConContador(matriz);
  console.log(resultado);
  