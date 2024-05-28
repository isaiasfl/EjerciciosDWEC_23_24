import { usuarios, posts, comentarios } from "./constants"


export const usuarioLiteral = {
  _id: 0,
  get id() {
    return this._id
  },
  _username: "",
  get username() {
    return this._username
  },
  set username(newUsername) {
    this._username = newUsername
  },
  _email: "",
  get email() {
    return this._email
  },
  set email(newEmail) {
    this._email = newEmail
  },
  _comentarios: [],
  get comentarios() {
    return this._comentarios
  },

  /**
   * Función que captura el usuario y la publicación seleccionada y filtra todos los comentarios para devolver solo los correspondientes.
   * @param {DocumentFragment} post - Publicacíon elegida en el select del formulario
   * @param {DocumentFragment} user - Usuario elegido en el select del formulario
   * @returns {Array} - Array con los comentarios especificos del usuario en la publicación
   */
  obtenerComentariosPublicacion(post, user) {
    
    let comentarios = [];
    if (localStorage.getItem('comentarios')) {
      comentarios = JSON.parse(localStorage.getItem('comentarios'));

      const idPostSelected = parseInt(post.split('.')[0]);
      const idUserSelected = parseInt(user.split('.')[0]);

      const comentariosIdUser = comentarios.filter(comment => idUserSelected === comment.userId && idPostSelected === comment.postId)

      console.log("Comentarios del Usuario y la Publicación seleccionados:", comentariosIdUser);

      return comentariosIdUser;

    }
  }
}


export function UsuarioFuncional(nombre, edad=0){
  this._nombre = nombre;
  this._edad = edad;
  this._comentarios = [];

  Object.defineProperty(this, "nombre", {
    get: function () {
      return this._nombre;
    },
    set: function (nuevoNombre) {
      this._nombre = nuevoNombre;
    },
  });

  Object.defineProperty(this, "edad", {
    get: function () {
      return this._edad;
    },
    set: function (nuevaEdad) {
      this._nombre = nuevaEdad;
    },
  });

  Object.defineProperty( {
    obtenerComentariosPublicacion: function (post, user) {
      let comentarios = [];
      if (localStorage.getItem('comentarios')) {
        comentarios = JSON.parse(localStorage.getItem('comentarios'));

        const idPostSelected = parseInt(post.split('.')[0]);
        const idUserSelected = parseInt(user.split('.')[0]);


        const comentariosIdUser = comentarios.filter(comment => idUserSelected === comment.userId && idPostSelected === comment.postId)

        console.log("Comentarios del Usuario y la Publicación seleccionados:", comentariosIdUser);

        return comentariosIdUser;

      }
    }
  });
}


export class UsuarioClases {
  constructor(nombre = "", edad=0) {
    this._nombre = nombre;
    this._edad = edad;
    this._dni = "";
  }

  get nombre() {
    return this._nombre;
  }

  set nombre(newNombre) {
    this._nombre = newNombre;
  }

  get edad() {
    return this._edad;
  }

  set edad(newEdad) {
    this._edad = newEdad;
  }
  
  get dni() {
    return this._dni;
  }

  set dni(newDni) {
    this.validarDNI(newDni) ? this._dni = newDni : false;
  }

  obtenerComentariosPublicacion(post, user) {
    
    let comentarios = [];
    if (localStorage.getItem('comentarios')) {
      comentarios = JSON.parse(localStorage.getItem('comentarios'));

      const idPostSelected = parseInt(post.split('.')[0]);
      const idUserSelected = parseInt(user.split('.')[0]);


      const comentariosIdUser = comentarios.filter(comment => idUserSelected === comment.userId && idPostSelected === comment.postId)

      console.log("Comentarios del Usuario y la Publicación seleccionados:", comentariosIdUser);

      return comentariosIdUser;

    }
  }
}