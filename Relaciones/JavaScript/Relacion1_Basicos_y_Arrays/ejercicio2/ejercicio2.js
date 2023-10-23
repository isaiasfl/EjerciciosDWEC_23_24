/**
 * @author: Ambrosio Iglesias Prieto
 * @description: Define una función llamada eliminarDuplicados que tome un array arr . La función debe
eliminar los elementos duplicados y devolver un nuevo array con elementos únicos, manteniendo
el orden original
 */
const eliminarDuplicados = (arr) =>  arr.filter((valor, indice, array) => array.indexOf(valor) === indice);
  
  
  const arrayConDuplicados = [1, 2, 2, 3, 4, 4, 5];
  const arraySinDuplicados = eliminarDuplicados(arrayConDuplicados);
  console.log(arraySinDuplicados); 
  