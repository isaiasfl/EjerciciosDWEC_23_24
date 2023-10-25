/**
 * @author: Ambrosio Iglesias Prieto
 * @description: toma un array arrq elimina los elementos duplicados y devuelve un nuevo array con elementos únicos, manteniendo
  el orden original
* @param {arr} "es un array"
* @returns array sin duplicados
*/

const eliminarDuplicados = (arr) =>  arr.filter((valor, indice, array) => array.indexOf(valor) === indice);
  
  
  const arrayConDuplicados = [1, 2, 2, 3, 4, 4, 5];
  const arraySinDuplicados = eliminarDuplicados(arrayConDuplicados);
  console.log(arraySinDuplicados); 
  