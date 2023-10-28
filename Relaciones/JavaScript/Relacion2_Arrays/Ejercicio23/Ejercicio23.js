/**
 * @author: Jesús Soler García
 * @description: función que devuelve un array con la media de los 
 * componentes de cada fila de una matriz dada como parámetro
 */

// ----Función -------

/**
 * Función que devuelve un array con la media de los componentes de cada fila de una matriz dada como parámetro
 * @param {*} matriz - Matriz o Array de Arrays pasado como argumento
 * @returns {Array} - Array con el promedio de los componentes de cada fila
 */
function promedioFilas(matriz){
  //array vacio que devolveremos con resultados en el return
  const promedio = new Array();

  //Bucle para calcular y guardar las medias de las filas

  for (let i=0; i<matriz.length; i++){
      let fila = matriz[i];
      let mediaFila =  fila.reduce((a,b) => a + b, 0) / fila.length;
      promedio.push(mediaFila);
  }

  return promedio;
}
//Constante de tipo array bidimensional que usaremos para comprobación

let prueba = [
  [1, 2, 3],
  [5, 4, 6],
  [4, 7, 9]
];

// Inicio del programa

const probando = promedioFilas(prueba);
console.log(probando)