/**
 * @author: Arturo García
 * @description: Una función que toma un objeto y devuelve el valor de la clave "pais", si no existe devolverá "No encontrado".
 */

//----- FUNCIONES -----

/**
 * Devuelve el valor de la clave "pais", si no se ecnuentra, devuelve "No encontrado".
 * 
 * @param {Object} obj Del que se sacará el valor de la clave "pais".
 * @returns {String} El valor de la clave "país" o "No encontrado".
 */
function getPais(obj){
    const { pais } = obj;
    if(pais===undefined){
        return "No encontrado";
    }else{
        return pais;
    }
}

//----- TESTS -----

const obj1 = {
    pais:"España",
    ciudad:"Granada",
}
const obj2 = {
    nombre:"Jimeno",
    apellido:"Jiménez",
}

console.log(getPais(obj1));
console.log(getPais(obj2));