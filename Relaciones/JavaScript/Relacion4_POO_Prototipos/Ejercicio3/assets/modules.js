const vehiculoLiteral = {
  _marca: "",
  _modelo: "",
  _anio: 1900,
  _velocidad: 0,

  //GETTERS
  get marca() {
    return this._marca;
  },
  get modelo() {
    return this._modelo;
  },
  get anio() {
    return this._anio;
  },
  get velocidad() {
    return this._velocidad;
  },

  //SETTERS
  set marca(newMarca) {
    this._marca = newMarca;
  },
  set modelo(newModelo) {
    this._modelo = newModelo;
  },
  set anio(newAnio) {
    this._anio = newAnio;
  },

  //MÉTODOS
  //El método acelerar va subiedno la propiedad velocidad del coche.
  acelerar: function () {
    this._velocidad < 10
      ? (this._velocidad += 1)
      : console.log("No se puede acelerar más");
  },
};

export const cocheLiteral = Object.create(vehiculoLiteral);
cocheLiteral.arrancar = function () {
  this._velocidad === 0
    ? (this._velocidad = 1)
    : console.log("El coche ya está arrancado");
};
cocheLiteral.frenar = function () {
  this._velocidad = 0;
};

export const motoLiteral = Object.create(vehiculoLiteral);
motoLiteral.arrancar = function () {
  this._velocidad === 0
    ? this.acelerar()
    : console.log("La moto ya está arrancado");
};
motoLiteral.frenar = function () {
  this._velocidad = 0;
};

function VehiculoFunction(marca = "", modelo = "", anio = 1900) {
  this._marca = marca;
  this._modelo = modelo;
  this._anio = anio;
  this._velocidad = 0;

  Object.defineProperty(this, "marca", {
    get: function () {
      return this._marca;
    },
    set: function (newMarca) {
      this._marca = newMarca;
    },
  });

  Object.defineProperty(this, "modelo", {
    get: function () {
      return this._modelo;
    },
    set: function (newModelo) {
      this._modelo = newModelo;
    },
  });

  Object.defineProperty(this, "anio", {
    get: function () {
      return this._anio;
    },
    set: function (newAnio) {
      this._anio = newAnio;
    },
  });

  Object.defineProperty(this, "velocidad", {
    get: function () {
      return this._velocidad;
    },
  });
}

VehiculoFunction.prototype.acelerar = function () {
  this._velocidad < 10
    ? (this._velocidad += 1)
    : console.log("No se puede acelerar más");
};

export function CocheFunction(marca, modelo, anio) {
  VehiculoFunction.call(this, marca, modelo, anio);
}

CocheFunction.prototype = Object.create(VehiculoFunction.prototype);
CocheFunction.prototype.constructor = CocheFunction;
CocheFunction.prototype.arrancar = function () {
  this._velocidad === 0
    ? this.acelerar()
    : console.log("La moto ya está arrancado");
};

CocheFunction.prototype.frenar = function () {
  this._velocidad = 0;
};

export function MotoFunction(marca, modelo, anio) {
  VehiculoFunction.call(this, marca, modelo, anio);
}

MotoFunction.prototype = Object.create(VehiculoFunction.prototype);
MotoFunction.prototype.constructor = MotoFunction;
MotoFunction.prototype.arrancar = function () {
  this._velocidad === 0
    ? this.acelerar()
    : console.log("La moto ya está arrancado");
};

MotoFunction.prototype.frenar = function () {
  this._velocidad = 0;
};

class VehiculoClass {
  constructor(marca = "", modelo = "", anio = 1900) {
    this._marca = marca;
    this._modelo = modelo;
    this._anio = anio;
    this._velocidad = 0;
  }

  get marca() {
    return this._marca;
  }

  set marca(newMarca) {
    this._marca = newMarca;
  }

  get modelo() {
    return this._modelo;
  }

  set modelo(newModelo) {
    this._modelo = newModelo;
  }

  get anio() {
    return this._anio;
  }

  set anio(newAnio) {
    this._anio = newAnio;
  }

  get velocidad() {
    return this._velocidad;
  }

  acelerar() {
    this._velocidad < 10
      ? (this._velocidad += 1)
      : console.log("No se puede acelerar más");
  }
}

export class CocheClass extends VehiculoClass {
  constructor() {
    super();
  }

  arrancar() {
    this._velocidad === 0
      ? this.acelerar()
      : console.log("El coche ya está arrancado");
  }

  frenar() {
    this._velocidad = 0;
  }
}

export class MotoClass extends VehiculoClass {
  constructor() {
    super();
  }

  arrancar() {
    this._velocidad === 0
      ? this.acelerar()
      : console.log("La moto ya está arrancado");
  }

  frenar() {
    this._velocidad = 0;
  }
}
