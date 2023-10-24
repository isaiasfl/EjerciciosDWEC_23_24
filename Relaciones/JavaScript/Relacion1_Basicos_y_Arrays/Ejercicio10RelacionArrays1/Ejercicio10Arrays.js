/**
 * @author: Alberto Jimenez Malpica
 * @description: Relacion 1 Ejercicios.
 * @date : 20/10/23
 */


//10- DIVIDIR EN FRAGMENTOS 
/**
 * 
 * @param {Array} array 
 * @param {Int} tamano 
 * @returns 
 */
const dividirFragmento = (array, tamano) => {
    if (tamano <= 0) {
        return "El tamaño debe ser mayor que 0";
    }

    const fragmentos = [];
    for (let i = 0; i < array.length; i += tamano) {
        fragmentos.push(array.slice(i, i + tamano));
    }

    return fragmentos;
};
console.log("10- BUSCAR ELEMENTO  ");
const arr10 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const tamano = 3;
console.log(dividirFragmento(arr10,tamano));