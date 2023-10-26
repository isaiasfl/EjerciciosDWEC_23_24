/**
 * @author: miguel470
 * @description: Reemplazar cadenas vacías en el objeto con valores nulos. Escriba una función que tome un objeto
 * como argumento.Algunos de los valores de propiedad contienen cadenas vacías. Reemplace cadenas
 * vacías y cadenas que contienen solo espacios en blanco con valores nulos. Devuelva el objeto
 * resultante.
 */

/**
 * Las cadenas que esten vacías seran reemplazadas en un nuevo objeto por NULL-
 * 
 * @param {Object} obj - Pasamos un objeto para comprobar si tiene cadenas vacías
 * @returns { Object } Object - Devuelve el objeto con las cadenas vacías cambiadas por NULL
 */
function eliminarNull(obj) {
    for (const key in obj) {
      // Sacamos el valor
      if (obj.hasOwnProperty(key)) {
        const valor = obj[key];
        // Comprobamos si es un string y si esta vacio hacemos lo de dentro del if
        if (typeof valor === 'string' && valor.trim() === '') {
          obj[key] = null; // Reemplazamos la cadena vacía por null
        }
      }
    }
    return obj;
  }

//----test----

  const objeto = {
    nombre: 'Juan',
    apellido: '',
    direccion: '   ',
    edad: 30,
  };
console.log(eliminarNull(objeto));