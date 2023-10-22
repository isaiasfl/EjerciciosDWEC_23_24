/**
 * 
 * @author: Rogelio Sánchez
 * @description:Ejercicio 09: Escribe una función que tome un objeto (a) como argumento. Devuelve la suma de todos los valores (temperaturas) del objeto. Vamos a imaginar que el objecto tiene por claves meses del año y los valores de esas claves son temperaturas. Es necesario validar que los valores de las claves son números para realizar la suma
 */

/**
 * Calcula la suma de los valores numéricos en un objeto.
 * 
 * @param {object} a - El objeto del cual se sumarán los valores numéricos.
 * @returns {number} - La suma de los valores numéricos en el objeto.
 */
function temperatures(a){
  let suma = 0;
  // itera a través de los valores del objeto a, verifica si cada valor es de tipo numérico y, en caso afirmativo, los suma a la variable suma. Finalmente, devuelve la suma total de los valores numéricos en el objeto.
  for( const value of Object.values(a)){
      if(typeof value === 'number'){
          suma += value
      }  
  }
  return suma
}

const tempMeses = {
  enero: 5,
  febrero: 6,
  marzo: 4,
  abril: 15,
  mayo: 20,
  junio: 29,
  julio: 35,
  agosto: 38,
  septiembre: 32,
  octubre: 25,
  noviembre: 16,
  diciembre: 10
}

console.log("Ejercicio 09: ",temperatures(tempMeses))