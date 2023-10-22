/**
 * @author: Jose Antonio Rivera Bandera
 * @description: Escribe una función llamada ordenarPorPropiedad que ordene un array de objetos por una
propiedad específica. La función debe tomar un array arr y una cadena propiedad que
indique la propiedad por la cual se debe ordenar.
 */

/**
 * @param {Array} arr
 * @param {string} propiedad
 * @returns Array
 */

const ordenarPorPropiedad = (arr, propiedad) =>
  // Dentro de los parametros de sort() evalua si la propiedad es mayor o menor que la del resto de objetos
  // en función del resultado se devolvera 1 para mayor , -1 para menor y 0 para iguales, lo cual hará que el sort las ordene.
  arr.sort((a, b) =>
    a[propiedad] > b[propiedad] ? 1 : a[propiedad] < b[propiedad] ? -1 : 0
  );
