

// @Author : Patrick Moreno
// @Description:Arrow function que crea un objeto a partir de una cadena que va a ser 
//el valor de la propiedad. 


//Ejemplo 1 return implicito
/**
 * Description:funcion que crea un objeto a partir de un String "cadena" que va a ser 
 * el valor de la propiedad "key". Usamos un return implicito 
 * Hay que poner los parentesis para que diferencie que es un objeto y no una apertura de llaves estandar.
 * @param {String} cadena 
 * @returns Object
 */
const objeto4 = cadena => ({"key":cadena}); 


//Ejemplo 2 arrow function
/**
 * Description:funcion que crea un objeto a partir de un String "cadena" que va a ser 
 * el valor de la propiedad "key". Usamos un return estandar
 * @param {String} cadena 
 * @returns Object
 */
const objeto42= cadena => { return {"key":cadena}};

/** EJEMPLO DE USO
 *  const objetoDevuelto = objeto4("hola");
 *  Devuelve {key:"hola"};
 * 
 *  const objetoDevuelto = objeto42("hola");
 *  Devuelve {key:"hola"};
 */
