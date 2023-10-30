/**
 * @author Carlos Gozalbes Mendoza
 * @description Extraer información de objetos. Escriba una función
 * que tome un objeto como argumento que contenga propiedades con
 * informacion personal. Extraiga el nombre, el apellido, el tamaño
 * y el peso, si están disponibles. Si se proporciona el tamaño o
 * el peso, transforme el valor en una cadena. Adjunte la unidad cm
 * al tamañol. Adjunte la unidad kg al peso Devuelve un nuevo objeto
 * con todas las propiedades disponibles que nos interesan y sus modificaciones
 * correspondientes
 */

/**
 * Devolvemos un objeto con informacion personal filtrada y definida
 * @param {Object} obj Informacion personal
 * @return {Object} Informacion personal filtrada
 */

const garcia = {
  nombre: "garcia",
  oma: "oma",
  apellido: "apellido",
  peso:78,
  tamano: 156
};

const extraerInformacionPersonal = (obj) => {
  let propiedadesAExtraer = ["nombre", "apellido", "tamano", "peso"];
  const tmpObjeto = {};
  propiedadesAExtraer.forEach((e) => {
    if (Object.keys(obj).includes(e)) {
      if (e === "tamano") {
        tmpObjeto[e] = obj[e].toString() + " cm";
      } else if (e === "peso") {
        tmpObjeto[e] = obj[e].toString() + " kg";
      } else {
        tmpObjeto[e] = obj[e];
      }
    }
  });
  return tmpObjeto;
};

console.log(extraerInformacionPersonal(garcia));

