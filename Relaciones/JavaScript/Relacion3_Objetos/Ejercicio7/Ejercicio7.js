/** 
 * @author Belén RJ
 * @description Realización de ejercicio 7 de relación 3 
 */

// ----- Declaración de variables para tests -----
let objeto = {"cosa 1": 1, "cosa2":2, "cosa3": 3}; 
let array = [1,2,3];
let nulo = null;


// ----- Definición de funciones -----

/**
 * La función se encarga de tomar un objeto como argumento y extraer sus claves en una matriz
 * @param {Object} obj Objeto que se incluirá como argumento para ser usado en la función 
 * @returns Devuelve una matriz que contiene las claves del objeto en caso de ser un objeto su argumento o de lo contrario una alerta 
 */
function matriz(obj){
    if(typeof(obj)=== "object" && obj !== null && !Array.isArray(obj)){ //Aquí se comprueba que el argumento introducido sea de tipo object y que no sea nulo 
        return Object.keys(obj); //Si es un objeto se devolverán sus claves
    }
    else{
        alert("El elemento no es un objeto o es nulo"); //Si no es un objeto se lanzará una alerta
    }
}

/**
 * La función mantiene la funcionalidad de la anterior pero mediante una arrow function
 * @param {Object} obj Objeto que se incluirá como argumento para ser usado en la función 
 * @returns Devuelve una matriz que contiene las claves del objeto en caso de ser un objeto su argumento o de lo contrario una alerta 
 */
let matriz2 = (obj = Object) => typeof(obj) === "object" && obj !== null && !Array.isArray(obj) ?  Object.keys(obj) : alert("El elemento no es un objeto o es nulo");

//----- Tests -----
console.log(matriz(objeto));
console.log(matriz2(objeto));

matriz(array);
matriz2(array);

matriz(nulo);
matriz2(nulo);