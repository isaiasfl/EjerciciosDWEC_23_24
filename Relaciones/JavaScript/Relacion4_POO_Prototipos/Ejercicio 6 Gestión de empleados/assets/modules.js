// Objetos literales
export const empleadoLiteral = {
  _id: 0,
  _nombre: "",
  _salario: 0,
  _rol: "Empleado",
  _complementoSalarial: 0,

  get rol() {
    return this._rol;
  },
  set rol(nuevoRol) {
    this._rol = nuevoRol;
  },

  get id() {
    return this._id;
  },
  set id(nuevoId) {
    this._id = nuevoId;
  },
  get nombre() {
    return this._nombre;
  },
  set nombre(nuevoNombre) {
    this._nombre = nuevoNombre;
  },
  get salario() {
    return this._salario;
  },
  set salario(nuevoSalario) {
    this._salario = nuevoSalario;
  },
  get complementoSalarial() {
    return this._complementoSalarial;
  },
  set complementoSalarial(nuevoComplementoSalarial) {
    this._complementoSalarial = nuevoComplementoSalarial;
  },
};
export const gerenteLiteral = Object.assign({}, empleadoLiteral, {
  _departamento: "",
  _nSubornidados: 0,
  _rol: "Gerente",
  get rol() {
    return this._rol;
  },
  set rol(nuevoRol) {
    this._rol = nuevoRol;
  },

  get departamento() {
    return this._departamento;
  },
  set departamento(nuevoDepartamento) {
    this._departamento = nuevoDepartamento;
  },
  get nSubornidados() {
    return this._nSubornidados;
  },
  set nSubornidados(nuevoNSubordinados) {
    this._nSubornidados = nuevoNSubordinados;
  },
});
export const desarrolladorLiteral = Object.assign({}, empleadoLiteral, {
  _lenguajeProgramacion: "",
  _proyectoAsignado: "",
  _experiencia: 0,
  _rol: "Desarrollador",

  get rol() {
    return this._rol;
  },
  set rol(nuevoRol) {
    this._rol = nuevoRol;
  },

  get lenguajeProgramacion() {
    return this._lenguajeProgramacion;
  },
  set lenguajeProgramacion(nuevoLenguajeProgramacion) {
    this._lenguajeProgramacion = nuevoLenguajeProgramacion;
  },
  get proyectoAsignado() {
    return this._proyectoAsignado;
  },
  set proyectoAsignado(nuevoProyecto) {
    this._proyectoAsignado = nuevoProyecto;
  },
  get experiencia() {
    return this._experiencia;
  },
  set experiencia(nuevoExperiencia) {
    this._experiencia = nuevoExperiencia;
  },
});

// Funciones constructoras

export function empleadoFuncional(nombre, id = 0, salario = 0) {
  this._nombre = nombre;
  this._id = id;
  this._salario = salario;

  // Getter y setter para el nombre
  Object.defineProperty(this, "nombre", {
    get: function () {
      return this._nombre;
    },
    set: function (nuevoNombre) {
      this._nombre = nuevoNombre;
    },
  });

  Object.defineProperty(this, "id", {
    get: function () {
      return this._id;
    },
    set: function (nuevaId) {
      this._id = nuevaId;
    },
  });

  Object.defineProperty(this, "dni", {
    get: function () {
      return this._salario;
    },
    set: function (nuevoSalario) {
      this._salario = nuevoSalario;
    },
  });
}

export function gerenteFuncional(
  departamento,
  nSubornidados = 0,
  complementoSalarial = 0
) {
  this._departamento = departamento;
  this._nSubornidados = nSubornidados;
  this._complementoSalarial = complementoSalarial;

  // Getter y setter para el nombre
  Object.defineProperty(this, "departamento", {
    get: function () {
      return this._departamento;
    },
    set: function (nuevodepartamento) {
      this._departamento = nuevodepartamento;
    },
  });

  Object.defineProperty(this, "nSubornidados", {
    get: function () {
      return this._nSubornidados;
    },
    set: function (nuevanSubornidados) {
      this._nSubornidados = nuevanSubornidados;
    },
  });

  Object.defineProperty(this, "complementoSalarial", {
    get: function () {
      return this._complementoSalarial;
    },
    set: function (nuevocomplementoSalarial) {
      this._complementoSalarial = nuevocomplementoSalarial;
    },
  });
}

export function desarrolladorFuncional(
  lenguajeProgramacion,
  proyectoAsignado,
  experiencia = 0
) {
  this._lenguajeProgramacion = lenguajeProgramacion;
  this._nSubornidados = nSubornidados;
  this._complementoSalarial = complementoSalarial;

  // Getter y setter para el nombre
  Object.defineProperty(this, "lenguajeProgramacion", {
    get: function () {
      return this._lenguajeProgramacion;
    },
    set: function (nuevolenguajeProgramacion) {
      this._lenguajeProgramacion = nuevolenguajeProgramacion;
    },
  });

  Object.defineProperty(this, "proyectoAsignado", {
    get: function () {
      return this._proyectoAsignado;
    },
    set: function (nuevoProyectoAsignado) {
      this._proyectoAsignado = nuevoProyectoAsignado;
    },
  });

  Object.defineProperty(this, "experiencia", {
    get: function () {
      return this._experiencia;
    },
    set: function (nuevoexperiencia) {
      this._experiencia = nuevoexperiencia;
    },
  });
}

// Con CLASS

export const empleadoClass = {
  constructor(id = 0, nombre = "", salario = 0) {
    this._id = id;
    this._nombre = nombre;
    this._salario = salario;
  },

  get id() {
    return this._id;
  },
  set id(nuevoId) {
    this._id = newId;
  },
  get nombre() {
    return this._nombre;
  },
  set nombre(nuevoNombre) {
    this._nombre = nuevoNombre;
  },
  get salario() {
    return this._salario;
  },
  set salario(nuevoSalario) {
    this._salario = nuevoSalario;
  },
};
export const gerenteClass = {
  constructor(departamento = "", nSubornidados = 0, complementoSalarial = 0) {
    this._departamento = departamento;
    this._nSubornidados = nSubornidados;
    this._complementoSalarial = complementoSalarial;
  },

  get departamento() {
    return this._departamento;
  },
  set departamento(nuevoDepartamento) {
    this._departamento = nuevoDepartamento;
  },
  get nSubornidados() {
    return this._nSubornidados;
  },
  set nSubornidados(nuevoNSubordinados) {
    this._nSubornidados = nuevoNSubordinados;
  },
  get complementoSalarial() {
    return this._complementoSalarial;
  },
  set complementoSalarial(nuevoComplementoSalarial) {
    this._complementoSalarial = nuevoComplementoSalarial;
  },
};
export const desarrolladorclass = {
  constructor(
    lenguajeProgramacion = "",
    proyectoAsignado = "",
    experiencia = 0
  ) {
    this._lenguajeProgramacion = lenguajeProgramacion;
    this._proyectoAsignado = proyectoAsignado;
    this._experiencia = experiencia;
  },

  get lenguajeProgramacion() {
    return this._lenguajeProgramacion;
  },
  set lenguajeProgramacion(nuevoLenguajeProgramacion) {
    this._lenguajeProgramacion = nuevoLenguajeProgramacion;
  },
  get proyectoAsignado() {
    return this._proyectoAsignado;
  },
  set proyectoAsignado(nuevoProyecto) {
    this._proyectoAsignado = nuevoProyecto;
  },
  get experiencia() {
    return this._experiencia;
  },
  set experiencia(nuevoExperiencia) {
    this._experiencia = nuevoExperiencia;
  },
};
