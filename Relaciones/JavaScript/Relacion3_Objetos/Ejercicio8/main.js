/**
 * @description Escribe una función que tome un objeto como argumento. Dicho objeto tienen como argumento o valor dentro de la clave 'a' el valor 'b' que puede o no tener otras subclaves. Se pide obtener la propiedad 'b' del objeto 'a' en caso de que exista. Si no existe devolverá undefined
 * @author {Tarik Said}
 */

/**
 * Checks if the 'b' key within the object 'a' has sub-keys or is empty, and returns its value or 'undefined'.
 * @param {object} bar The input object to inspect.
 * @returns {any} The value of 'bar.a.b' or 'undefined' if 'b' has sub-keys or is empty.
 */
function foo(bar) {
  if (Object.keys(bar.a.b).length) return bar.a.b;
  return undefined;
}

/**
 * Function to test the 'foo' function with different objects.
 */
function test() {
  const myObjWithValue = {
    a: {
      b: {
        c: 7,
      },
    },
  };

  const myObjUndefined = {
    a: {
      b: {},
    },
  };

  console.log(foo(myObjWithValue));
  console.log(foo(myObjUndefined));
}

test();
