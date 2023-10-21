

// @Author : Patrick Moreno
// @Description:Arrow function que crea un objeto a partir de una cadena que va a ser 
//el valor de la propiedad. Hay que poner los parentesis para que diferencie
// que es un objeto y no una apertura de llaves estandar.



//Ejemplo 1 return implicito
/**
 * 
 * @param {String} cadena 
 * @returns Object
 */
const objeto4 = cadena => ({"key":cadena}); 


//Ejemplo 2 arrow function
/**
 * 
 * @param {String} cadena 
 * @returns Object
 */
const objeto42= cadena => { return {"key":cadena}};

//devuleve un objeto,para crear un objeto
// const objetoDevuelto = objeto4("hola");
//Devuelve {key:"hola"};
