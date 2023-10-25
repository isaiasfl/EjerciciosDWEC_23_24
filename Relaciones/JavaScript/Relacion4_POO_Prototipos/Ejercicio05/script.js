/**
 * @author: Pedro Vílchez Peña
 * @description: Crea una aplicación que obtiene y muestra los comentarios de una publicación de un usuario específico utilizando datos de JSONPlaceholder, 
 * en este caso los usuarios, los posts y los comentarios.
 */
// ------ IMPORTS ------
import { usuarioLiteral, UsuarioFuncional, UsuarioClases } from "./assets/modules.js"; // Importo los tipos de usuario
import { usuarios, posts, comentarios } from "./assets/constants.js"; // Importo los .json respectivos

// ------ VARIABLES GLOBALES ------
const postSelected = document.getElementById('publicacionSelect'); // Con el DOM guardo la opción del select de posts

const userSelected = document.getElementById('usuarioSelect'); // Con el DOM guardo la opción del select de users
 
const btnEnviar = document.getElementById('btnEnviar'); // Con el DOM guardo el botón del formulario

// ------ FUNCIONES ------

/**
 * description: Rellena el LocalStorage con los respectivos datos importados de JSONPlaceHolder de un archivo externo.
 * returns {void}
 */
function rellenarLocalStorage(){
  localStorage.setItem('usuarios', JSON.stringify(usuarios));
  localStorage.setItem('posts', JSON.stringify(posts));
  localStorage.setItem('comentarios', JSON.stringify(comentarios));
}

/**
 * description: Rellena usando DOM el select de publicaciones con los datos extraidos del LocalStorage con la clave 'posts'.
 * returns {void}
 */
function rellenarSelectPubs(){
  const publicacionSelect = document.getElementById('publicacionSelect'); // Guarda el elemento select con la id 'publicacionSelect'.
  for (const post of JSON.parse(localStorage.getItem('posts'))) { // Hago un bucle forof para recorrer el array de objetos de posts del LocalStorage.
      const opt = document.createElement('option'); // Creo un elemento '<option>'.
      opt.innerHTML = `${post.id}. ${post.title}`; // Añado al elemento option creado anteriormente (opt) el contenido que me interese que tenga el option.
      publicacionSelect.appendChild(opt); // Añado al elemento select anteriormente guardado (publicacionSelect) como hijo el option anteriormente creado (opt) haciendo que ese elemento esté dentro de la etiqueta <option> creada.
  }
}

/**
 * description: Rellena usando DOM el select de usuarios con los datos extraidos del LocalStorage con la clave 'usuarios'.
 * @returns {void}
 */
function rellenarSelectUsers(){
  const usuarioSelect = document.getElementById('usuarioSelect'); // Guarda el elemento select con la id 'usuarioSelect'.
  for (const user of JSON.parse(localStorage.getItem('usuarios'))) { // Hago un bucle forof para recorrer el array de objetos de usuarios del LocalStorage.
    const opt = document.createElement('option'); // Creo un elemento '<option>'.
    opt.innerHTML = `${user.id}. ${user.login.username}`; // Añado al elemento option creado anteriormente (opt) el contenido que me interese que tenga el option.
    usuarioSelect.appendChild(opt); // Añado al elemento select anteriormente guardado (publicacionSelect) como hijo el option anteriormente creado (opt) haciendo que ese elemento esté dentro de la etiqueta <option> creada.
  }
}

/**
 * 
 * @param {string} userType - tipo de creación de usuario querida (Literla, Funcional o Clases)
 * @returns {Object} - tipo de usuario devuelto
 */
function crearUsuario(userType){
  let usuario;
  
  if(userType === "Usuario Literal"){
    usuario = Object.create(usuarioLiteral);
  }

  if(userType === "Usuario Funcional"){
    usuario = Object.create(UsuarioFuncional)
  }

  if(userType === "Usuario Clases"){
    usuario = new UsuarioClases();
  }

  return usuario;
}

/**
 * Está función se ejecuta cuando presiono el botón del formulario
 * @param {Event} e - Evento que voy a capturar
 * @returns {void}
 */
function handleClick(e){
  e.preventDefault();

  const typeUserSelected = document.getElementById('userType').value; // Guardo el tipo de usuario seleccionado

  const usuario = crearUsuario(typeUserSelected); // Uso el tipo de usuario para llamar a la función 'crearUsuario' y obtener el usuario querido

  const comentariosIdUser = usuario.obtenerComentariosPublicacion(postSelected.value, userSelected.value); // Accedo al método del usuario y obtengo el array con los comentarios

  gestionarComentarios(comentariosIdUser); // Llamo al método gestionarComentarios que va a ser el que muestre dichos comentarios

}

/**
 * Función la cual gestiona lo a mostrar por pantalla (comentarios) al hacer la busqueda
 * @param {Array} comentarios - Array con todos los comentarios obtenidos
 */
function gestionarComentarios(comentarios){
  const listaComentarios = document.getElementById('comentariosUsuario'); // Guardo el elemento con el id 'comentariosUsuario' en este caso es una lista ul)

  // Con este bucle borro los posibles datos que hubiese en la lista para evitar duplicados a la hora de mostrar los comentarios
  while (listaComentarios.firstChild){ 
    listaComentarios.removeChild(listaComentarios.firstChild);
  }

  for (const c of comentarios) { // Recorro la lista de comentarios pasada como parámetro
    const li = document.createElement('li'); // Creo un elemento 'li' y lo guardo en una varibale (li)
    li.innerHTML = `${c.id}. ${c.comment}`; // Añado al elemento li creado anteriormente (li) el contenido que me interese que tenga el li.
    listaComentarios.appendChild(li); // Añado al elemento uld anteriormente guardado (listaComentarios) como hijo el li anteriormente creado (li) haciendo que ese elemento esté dentro de la etiqueta <ul> creada.
  }

  // En caso de que el usuario no tenga ningún comentario en esa publicació sucede lo siguiente
  if(comentarios.length === 0){ 
    const h3 = document.createElement('h3'); // Creo un elemento 'h3' y lo guardo en una varibale (h3)
    h3.innerHTML = 'Este usuario no tiene ningún comentario en esta publicación'; // Añado al elemento h3 creado anteriormente (h3) el contenido que me interese que tenga el h3.
    listaComentarios.appendChild(h3); // Añado al elemento uld anteriormente guardado (listaComentarios) como hijo el h3 anteriormente creado (h3) haciendo que ese elemento esté dentro de la etiqueta <ul> creada.
  }
}

/**
 * Función la cual inicia las funciones necesarias al comienzo de la aplicación
 * @returns {void}
 */
function app(){
  rellenarLocalStorage();
  rellenarSelectPubs();
  rellenarSelectUsers();
}

// ------ EVENTOS ------
btnEnviar.addEventListener('click', handleClick); // Evento el cual se activa al pulsar el botón del formulario

// ------ INICIO APP -------
app();