/**
 * @author: Pedro Vílchez Peña
 * @description: 10 - Escribe una función que tome un objeto como argumento. Debería devolver un objeto con todas las propiedades del objeto original. excepto la propiedad con clave 'b'.
 */

objeto = { 
  continente: "Europa", 
  pais: "España",
  b: "propiedad a eliminar",
  ciudad: "Granada",
};

/**
 * @description: Función que toma como argumento un objeto y una propiedad, elimina la propiedad pasada como agumento del objeto pasado y devuelve dicho objeto.
 * @param {Object} objeto 
 * @param {string} propiedad 
 * @returns {Object}
 */
function eliminarPropiedad(objeto, propiedad){
  delete objeto[propiedad];
  return objeto;
}

console.log(eliminarPropiedad(objeto, 'b')); // Borra la propiedad con la clave 'b' y muestra el resultado por consola.