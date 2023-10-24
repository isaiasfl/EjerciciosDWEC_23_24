/**
 * @author: Samuel Molina
 * @description: Ejercicio maximo y minimo
 */

/**
 * Funcion que encuentra el valor maximo y minimo de un array
 * @param {Array} array 
 * @returns Valor maximo y minimo
 */
const encontrarMaxMin = array => {
    let max = array[0];
    let min = array[0];

    for (let index = 0; index <= array.length; index++) {

        if (array[index] > max) {
            max = array[index];
        }
        if (array[index] < min) {
            min = array[index]
        }
        
    }
    return `El maximo es ${max} y el minimo es ${min}`;
}

//----------------------| TEST |----------------------
const numeros = [8,34,2,98,76,45,13];
console.log(encontrarMaxMin(numeros));

//---------------> VERSION 2 <----------------//
/**
 * Funcion que encuentra el valor maximo y minimo de un array
 * @param {Array} arr 
 * @returns {Object} Objeto cuya clave es max y min, el valor de cada propiedad
 */

function encontrarMaxMin2(arr) {
  
    const max = Math.max(...arr);
    const min = Math.min(...arr);
  
    return { max, min };
}
  
//----------------------| TEST |----------------------
const numeros2 = [3, 1, 7, 2, 8, 4];
console.log(encontrarMaxMin2(numeros2));

  
  