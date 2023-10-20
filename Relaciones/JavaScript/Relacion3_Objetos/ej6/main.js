/**
 * Ejercicio6: Escribe una función que tome dos matrices (a y b) como argumentos. 
 * Cree un objeto que tenga propiedades con claves los elementos 
 * del array 'a' y con los valores correspondientes 'b'. 
 * Devuelve el objeto.
 */
// -------- Funciones ---------
// Declaramos la función
function ejercicio6(a, b) {
  // Creamos un objeto vacío llamado 'obj' para almacenar los pares clave-valor.
  let obj = {};

  // Comprobamos si las matrices 'a' y 'b' tienen la misma longitud.
  if (a.length === b.length) {
    // Iteramos a través de las matrices 'a' y 'b' para crear el objeto 'obj'.
    for (let i = 0; i < a.length; i++) { // el for empieza en 0 y añade 1 a la variable 'i' cada iteración
      // Asignamos el valor de 'b[i]' como el valor asociado a la clave 'a[i]' en el objeto 'obj'.
      obj[a[i]] = b[i];
    }
    // Devolvemos el objeto 'obj' que contiene los pares clave-valor.
    return obj;
  } else {
    // Si las matrices no tienen la misma longitud, mostramos un mensaje de error en la consola.
    console.log("Las matrices no tienen la misma longitud");
  }
}
// -------- Llamadas y programa ---------
// Llamamos a la función con dos matrices como argumento y mostramos el resultado en forma de tabla.
console.table(ejercicio6(["1web", "2webs", "3webs", "EsWeb"], ["Value1", "valuetwo", 1e-6, true]));

// end of document
