// Objetos Literales
export const HotelLiteral = {
    _habitaciones : [],
    _habitacionesReservadas : [],

    // Getter de las habitaciones del hotel
    get habitaciones () {
        return this._habitaciones;
    },

    // Setter de las habitaciones del hotel
    set habitaciones (habitaciones) {
        this._habitaciones = habitaciones;
    },

    // Getter de las habitaciones reservadas del hotel
    get habitacionesReservadas () {
        return this._habitacionesReservadas;
    },
    
    // Setter de las habitaciones reservadas del hotel
    set habitacionesReservadas (habitacionesR){
        this._habitacionesReservadas = habitacionesR;
    },

    precioHabitacionesReservadas (){
        return this.habitacionesReservadas.reduce((total, habitacion) => {
            // Asumimos que la propiedad "reserva" siempre está presente
            // y que "reserva" tiene una propiedad "precio"
            const precioHabitacion = habitacion.reserva.precio;
            return total + parseFloat(precioHabitacion);
        }, 0); 
    }
}

export const HabitacionLiteral = {
    _numero: 0,
    _reserva : "",
    
    //Getter del número de la habitacion
    get numero () {
        return this._numero;
    },

    // Setter del número de la habitacion
    set numero (newNumero){
        newNumero >= 0 ? this._numero = newNumero : alert('El número de la habitacion es incorrecto.');
    },

    // Getter de la reserva de la habitacion
    get reserva () {
        return this._reserva;
    },

    // Setter de la reserva de la habitacion
    set reserva (reserva) {
        this._reserva = reserva;
    }
}

export const ReservaLiteral = {
    _precio : 0,

    //Getter del precio de la reserva
    get precio () {
        return this._precio;
    },

    //Setter del precio de la reserva
    set precio (newPrecio){
        newPrecio > 0 ? this._precio = newPrecio : alert('El precio de la reserva es incorrecto.');
    }
}

// Objetos Funcionales 

// Clase Hotel Funcional
export function HotelFuncional (habitaciones = [], habitacionesReservadas = []){
    this._habitaciones = habitaciones;
    this._habitacionesReservadas = habitacionesReservadas;

    //Getter y Setter para las habitaciones
    Object.defineProperty(this, "habitaciones", {
        get: function() {
            return this._habitaciones;
        },
        set: function(habitaciones){
            this._habitaciones = habitaciones;
        }
    })

    //Getter y Setter para las habitaciones Reservadas
    Object.defineProperty(this, "habitacionesReservadas", {
        get: function() {
            return this._habitacionesReservadas;
        },
        set: function(habitacionesReservadas){
             this._habitacionesReservadas = habitacionesReservadas;
        }
    })

    

}
//function para obtener el precio total de las habitaciones reservadas
HotelFuncional.prototype.precioHabitacionesReservadas = function () {
    return this._habitacionesReservadas.reduce((total, habitacion) => {
        // Asumimos que la propiedad "reserva" siempre está presente
        // y que "reserva" tiene una propiedad "precio"
        const precioHabitacion = habitacion.reserva.precio;
        return total + parseFloat(precioHabitacion);
    }, 0); 
}

// Clase Habitacion Funcional
export function HabitacionFuncional (numero = 0, reserva = ""){
    this._numero = numero;
    this._reserva = reserva;

    //Getter y Setter para el numero
    Object.defineProperty(this, "numero", {
        get: function() {
            return this._numero;
        },
        set: function(numero){
            numero >= 0 ? this._numero = numero : alert('El número de la habitacion es incorrecto.');
        }
    })

    //Getter y Setter para la reserva
    Object.defineProperty(this, "reserva", {
        get: function() {
            return this._reserva;
        },
        set: function(reserva){
                this._reserva = reserva;
        }
    })

}

//Clase Reserva Funcional
export function ReservaFuncional (precio) {
    this._precio = precio;

    Object.defineProperty(this, "precio", {
        get: function(){
            return this._precio;
        },
        set: function(precio){
            precio > 0 ? this._precio = precio : alert('El precio de la reserva es incorrecto.');
        }
    })
}

// Objeto de clase

// Clase Hotel
export class HotelClass {
    //Constructor de la clase hotel con las propiedades habitaciones y habitaciones Reservadas
    constructor(habitaciones = [], habitacionesReservadas = []) {
        this._habitaciones = habitaciones;
        this._habitacionesReservadas = habitacionesReservadas;
    }

    // Getter de las habitaciones
    get habitaciones() { return this._habitaciones; }
    
    // Getter de las habitaciones reservadas
    get habitacionesReservadas() { return this._habitacionesReservadas; }

    // Setter de las habitaciones
    set habitaciones (habitaciones){
        this._habitaciones = habitaciones;
    }

    // Setter de las habitaciones reservadas
    set habitacionesReservadas(habitacionesReservadas){
        this._habitacionesReservadas = habitacionesReservadas;
    }

    // Funcion para calcular el precio total de las habitaciones reservadas
    precioHabitacionesReservadas() {
        return this.habitacionesReservadas.reduce((total, habitacion) => {
            // Asumimos que la propiedad "reserva" siempre está presente
            // y que "reserva" tiene una propiedad "precio"
            const precioHabitacion = habitacion.reserva.precio;
            return total + parseFloat(precioHabitacion);
        }, 0); 
    }
    
}
// Clase Habitacion
export class HabitacionClass {
    // Constructor de la clase habitacion con las propiedades numero y reserva
    constructor(numero = 0, reserva = "") {
        this._numero = numero;
        this._reserva = reserva;
    }

    // Getter del numero de la habitacion
    get numero() { return this._numero; }

    // Getter del reserva de la habitacion
    get reserva() { return this._reserva; }

    // Setter del numero de la habitacion
    set numero (newNumero){
        newNumero >= 0 ? this._numero = newNumero : alert('El número de la habitacion es incorrecto.');
    }

    // Setter de la reserva de la habitacion
    set reserva(newReserva){
        this._reserva = newReserva;
    }    
}

// Clase Reserva
export class ReservaClass {
    //Constructor de la clase reserva con la propiedad precio
    constructor(precio = 0) {
        this._precio = precio;
    }

    // Getter de precio
    get precio() { return this._precio; }
   
    //Getter de precio
    set precio(newPrecio){
        newPrecio > 0 ? this._precio = newPrecio : alert('El precio de la reserva es incorrecto.');
    }    
}