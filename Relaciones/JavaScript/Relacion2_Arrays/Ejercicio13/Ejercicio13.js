/**
 * @author: José Manuel Cordón Castillo
 * @description: Define una función llamada extraerPropiedades que tome un objeto
 * obj y un array de propiedades. La función debe devolver un nuevo objeto que
 * contenga solo las propiedades especificadas en el array. Si una propiedad no
 * existe en el objeto original, debe ser omitida en el nuevo objeto.
 */

/**
 * Devuelve un objeto con las propiedades que esten en la lista pasada como parámetro
 * que se encuentren en el objeto pasado como parámetro.
 * @param {object} obj
 * @param {Array} propiedades
 * @returns {object}
 */
const extraerPropiedades = (obj, propiedades) => {
  /*Aplicamos un reduce a la lista de propiedades, donde el acumulador será un objeto vacío y por cada propiedad, comprobamos
  si esa porpiedad está en el objeto pasado como parámetro y utilizando la notación de corchetes, añadimos la propiedad 
  al acumulador en caso afirmativo.
  */
  return propiedades.reduce((acum, currentProperty) => {
    if (obj.hasOwnProperty(currentProperty)) {
      acum[currentProperty] = obj[currentProperty];
    }
    return acum;
  }, {});
}; //Versión 1

/**
 * Devuelve un objeto con las propiedades que esten en la lista pasada como parámetro
 * que se encuentren en el objeto pasado como parámetro.
 * @param {object} obj
 * @param {Array} propiedades
 * @returns {object}
 */
const extraerPropiedades2 = (obj, propiedades) =>
  /*Aplicamos un reduce a la lista de propiedades, donde el acumulador será un objeto vacío y por cada propiedad, comprobamos
  si esa porpiedad está en el objeto pasado como parámetro y con Object.defineProperty, añadimos la propiedad 
  al acumulador en caso afirmativo.
  Importante ponerle la propiedad enumerable para que aparezca dentro del objeto y sea visible.
  */
  propiedades.reduce(
    (acum, currentProperty) =>
      obj.hasOwnProperty(currentProperty)
        ? Object.defineProperty(acum, currentProperty, {
            value: obj[currentProperty],
            enumerable: true,
          })
        : acum,
    {}
  );

/**
 * Devuelve un objeto con las propiedades que esten en la lista pasada como parámetro
 * que se encuentren en el objeto pasado como parámetro.
 * @param {object} obj
 * @param {Array} propiedades
 * @returns {object}
 */
const extraerPropiedades3 = (obj, propiedades) =>
  /*Aplicamos un reduce a la lista de propiedades, donde el acumulador será un objeto vacío y por cada propiedad, comprobamos
  si esa porpiedad está en el objeto pasado como parámetro y con Object.assign, añadimos la propiedad 
  al acumulador en caso afirmativo.
  */
  propiedades.reduce(
    (acum, currentProperty) =>
      obj.hasOwnProperty(currentProperty)
        ? Object.assign(acum, { [currentProperty]: obj[currentProperty] })
        : acum,
    {}
  );

const objeto1 = {
  name: "Jose",
  surname: "Cordón",
};

//Prueba de las tres funciones, en todos los casos, nos devuelve un objeto con las propiedades name y surname.
console.log(extraerPropiedades(objeto1, ["name", "surname", "telephone"]));
console.log(extraerPropiedades2(objeto1, ["name", "surname", "CP"]));
console.log(extraerPropiedades3(objeto1, ["name", "surname", "address"]));
