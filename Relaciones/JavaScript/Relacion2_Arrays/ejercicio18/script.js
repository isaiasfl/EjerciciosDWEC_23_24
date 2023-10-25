/**
 * @author Pablo Ortega Martínez
 * @description Escribe una función llamada combinarArrays que pase como parámetro "creciente" o "decreciente", 
 * junto con un número indeterminado de arrays con valores numéricos. 
 * Seguidamente me devolverá un array con todos los elementos que conformen los arrays 
 * ordenado creciente u ordenado decreciente según indique en el parámetro. Si no indico nada se hará de forma creciente.
 */


/**
 * 
 * @param {String} orden variable que define si el array a devolver será creciente o decreciente.
 * @param  {...Arrays} arrays cualquier cantidad de arrays que pasaremos como parametros.
 * @returns {Array} devuelve un array ordenado.
 */
function combinarArrays(orden, ...arrays){
    let resultado = [];
    resultado = resultado.concat(...arrays);
    for(const elemento of resultado){
        if((typeof elemento !== 'number')){   
            return "Todos los elementos de los arrays tienen que ser números";
        }
    }
    if(orden === 'decreciente'){
        resultado.sort((a,b)=>b-a);
    }else if((orden === 'creciente') || (orden === null) || (orden === undefined) || (orden === " ")){
        resultado.sort((a,b)=>a-b);
    }else{
        return "introduzca como primer parametro si quiere que sea creciente o decreciente";
    }
    return resultado;
}


// ------------Test----------------

const arrayDecreciente = combinarArrays("decreciente", [1,3,5],[4,6,7]);
const arrayCreciente = combinarArrays("creciente",[1,3,5],[4,6,7]);
const arrayPrueba = combinarArrays("Prueba",[1,3,5],[4,6,7]);
const arrayPrueba2 = combinarArrays([1,3,5],[4,6,7],[5,8,2]);
const arrayConLetras = combinarArrays("decreciente",[1,3,5],['a','b','c']);
const arrayPrueba3 = combinarArrays(" ",[1,3,5],[4,6,7],[5,8,2]);

console.log(arrayDecreciente);
// console.log(arrayCreciente);
// console.log(arrayPrueba);
// console.log(arrayPrueba2);
// console.log(arrayConLetras);  
console.log(arrayPrueba3);  
console.log(arrayPrueba2);