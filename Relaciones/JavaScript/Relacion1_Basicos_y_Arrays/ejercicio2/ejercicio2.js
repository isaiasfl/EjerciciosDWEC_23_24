/**
 * @author: Ambrosio Iglesias Prieto
 * @description: Define una función llamada eliminarDuplicados que tome un array arr . La función debe
eliminar los elementos duplicados y devolver un nuevo array con elementos únicos, manteniendo
el orden original
 */


/**
 * La línea const eliminarDuplicados = (arr) => define una función llamada eliminarDuplicados que recibe un arreglo como parámetro.
   La línea arr.filter((valor, indice, array) => llama al método filter() del objeto Array para recorrer cada elemento del arreglo original.
   La línea array.indexOf(valor) === indice es la función callback que se llama para cada elemento del arreglo. Esta función devuelve true si 
 * el elemento actual no es un duplicado.
 *  arr = es el array que le pasamos
 */
const eliminarDuplicados = (arr) =>  arr.filter((valor, indice, array) => array.indexOf(valor) === indice);
  
  
  const arrayConDuplicados = [1, 2, 2, 3, 4, 4, 5];
  const arraySinDuplicados = eliminarDuplicados(arrayConDuplicados);
  console.log(arraySinDuplicados); 
  