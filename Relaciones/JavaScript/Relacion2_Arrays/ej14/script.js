/**
 * @author Carlos Gozalbes Mendoza
 * @description Escribe una funcion llamada rangoNumeros que tome
 * dos números inicio y fin. La función debe devolver un array que
 * contenga todos los números en el rango desde inicio hasta fin,
 * incluyento ambos números
 */

/**
 * Crea un array con numeros entre los dos argumentos
 * @param {Number} inicio 
 * @param {Number} fin 
 * @returns Array<number>
 */
const rangoNumeros = (inicio,fin) => Array.from({length:fin-inicio +1},(_,i)=> i+inicio)