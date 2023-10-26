/**
 * @autor: Arturo GG.
 * @description: Una función que toma un array y un tamaño, la función divide el array en fragmentos
 * de tamaño pasado por parámetro y devolver un array con los fragmentos.
 */

//----- FUNCIONES -----

/**
 * Método que devuelve un array con los pedazos de tamaño dado de un array dado.
 * @param {Array} arr Array que va a ser dividido.
 * @param {Number} tamano Tamaño de los pedazos.
 * @returns {Array} Un array de arrays hecho con los pedazos.
 */
let dividirFragmento=(arr, tamano) => {
    const fragmentos = [];
    //Un bucle que da saltos del tamaño dado
    for (let i = 0; i < arr.length; i += tamano) {
        //Parte el array en arrays del tamaño dicho
        const fragmento = arr.slice(i, i + tamano);
        fragmentos.push(fragmento);
    }

    return fragmentos;
}

//----- TESTS -----

const array1 = [9,4,7,2,6,3,1,8,5];
const array2 = [9,4,7,2,6,3,1,8,5,8];

console.log(dividirFragmento(array1 , 3)); //[[9,4,7],[2,6,3],[1,8,5]]
console.log(dividirFragmento(array2 , 3)); //[[9,4,7],[2,6,3],[1,8,5],[8]]