// Importación de clases desde otro archivo
import { HotelClass, HabitacionClass, ReservaClass } from "./assets/module.js";

// Creación de una instancia de la clase HotelClass
const hotel = new HotelClass();

// Función para agregar una habitación al hotel
function agregarHabitacion(e) {
  e.preventDefault(); // Prevenir la acción predeterminada del evento

  // Obtener el número de habitación y el precio de reserva del formulario
  let numHabitacion = document.getElementById("numHabitacion").value;
  let precioReserva = document.getElementById("precioReserva").value;

  // Crear una nueva instancia de la clase HabitacionClass
  const habitacion = new HabitacionClass(numHabitacion, new ReservaClass(precioReserva));

  // Comprobar si el hotel ya tiene habitaciones
  if (hotel.habitaciones.length > 0) {
    const seEncuentra = [];
    // Comprobar si la habitación ya existe en el hotel
    hotel.habitaciones.map((habitacion) =>
      habitacion.numero == numHabitacion
        ? seEncuentra.push(true)
        : seEncuentra.push(false)
    );

    const seEncuentra2 = [];
    // Comprobar si la habitación ya está reservada en el hotel
    hotel.habitacionesReservadas.map((habitacion) =>
      habitacion.numero == numHabitacion
        ? seEncuentra2.push(true)
        : seEncuentra2.push(false)
    );

    // Si la habitación no existe ni está reservada, agregarla al hotel
    if (!seEncuentra.includes(true) && !seEncuentra2.includes(true)) {
      hotel.habitaciones.push(habitacion);

      // Actualizar el almacenamiento local con las habitaciones del hotel
      localStorage.setItem("habitacionesHotel", JSON.stringify(hotel.habitaciones));

      // Actualizar la vista con la lista de habitaciones disponibles
      document.getElementById("habitacionesDisponibles").innerHTML =
        hotel.habitaciones.length == 0
          ? "No hay habitaciones disponibles"
          : hotel.habitaciones.map(
              (habitacion) =>
                `<div class='container form-control'> 
          <label>Número:</label> 
          <input type='text' class='form-control' value='${habitacion.numero}' id='numeroReserva' readonly> \n
          <label>Precio de Reserva:</label>
          <input type='text' class='form-control' value='${habitacion.reserva.precio}' id='precioR' readonly>
          <div class="d-flex justify-content-end">
            <button class="btn btn-primary" id="reservarHabitacion">Reservar Habitación</button>
          </div> 
        </div>`
            );
            
      // Agregar un evento de click a los botones "Reservar Habitación"
      if (document.getElementById(`reservarHabitacion`) != null) {
        document
          .getElementById(`reservarHabitacion`)
          .addEventListener("click", reservarHabitacionF);
      }
    } else {
      alert("Ya existe esa habitación o ya está reservada...");
    }
  } else {
    // Si el hotel no tiene habitaciones, agregar la habitación
    hotel.habitaciones.push(habitacion);

    const seEncuentra2 = [];
    
    // Comprobar si la habitación está reservada
    hotel.habitacionesReservadas.map((habitacion) =>
      habitacion.numero == numHabitacion
        ? seEncuentra2.push(true)
        : seEncuentra2.push(false)
    );

    // Actualizar el almacenamiento local con las habitaciones del hotel
    localStorage.setItem("habitacionesHotel", JSON.stringify(hotel.habitaciones));

    // Si la habitación no está reservada, actualizar la vista de habitaciones disponibles
    if (!seEncuentra2.includes(true)) {
      document.getElementById("habitacionesDisponibles").innerHTML =
        hotel.habitaciones.length == 0
          ? "No hay habitaciones disponibles"
          : hotel.habitaciones.map(
              (habitacion) =>
                `<div class='container form-control'> 
                    <label>Número:</label> 
                    <input type='text' class='form-control' value='${habitacion.numero}' id='numeroReserva' readonly> \n
                    <label>Precio de Reserva:</label>
                    <input type='text' class='form-control' value='${habitacion.reserva.precio}' id='precioR' readonly>
                    <div class="d-flex justify-content-end">
                      <button class="btn btn-primary" id="reservarHabitacion">Reservar Habitación</button>
                    </div> 
                  </div>`
            );

      // Agregar un evento de click a los botones "Reservar Habitación"
      if (document.getElementById(`reservarHabitacion`) != null) {
        document
          .getElementById(`reservarHabitacion`)
          .addEventListener("click", reservarHabitacionF);
      }
    } else {
      alert("Ya existe esa habitación. Pero está reservada.");
    }
  }
}

// Función para reservar una habitación
function reservarHabitacionF(e) {
  e.preventDefault(); // Prevenir la acción predeterminada del evento
  
  // Obtener el número de reserva y el precio de reserva del formulario
  let numR = document.getElementById("numeroReserva").value;
  let precioR = document.getElementById("precioR").value;

  // Crear una nueva instancia de la clase HabitacionClass
  const habitacion = new HabitacionClass(numR, new ReservaClass(precioR));

  // Comprobar si el hotel ya tiene habitaciones reservadas
  if (hotel.habitacionesReservadas.length > 0) {
    const seEncuentra2 = [];

    // Comprobar si la habitación ya está reservada
    hotel.habitacionesReservadas.map((habitacion) =>
      habitacion.numero == numR
        ? seEncuentra2.push(true)
        : seEncuentra2.push(false)
    );

    // Filtrar las habitaciones del hotel para eliminar la habitación reservada
    hotel.habitaciones = hotel.habitaciones.filter(function (elemento) {
      return elemento.numero != habitacion.numero;
    });

    // Si la habitación no está reservada, agregarla a las habitaciones reservadas
    if (!seEncuentra2.includes(true)) {
      hotel.habitacionesReservadas.push(habitacion);

      // Filtrar las habitaciones del hotel nuevamente
      hotel.habitaciones = hotel.habitaciones.filter(function (elemento) {
        return elemento.numero != habitacion.numero;
      });
    } else {
      alert("Ya se ha reservado.");
    }
  } else {
    // Si el hotel no tiene habitaciones reservadas, agregar la habitación a las reservadas
    hotel.habitacionesReservadas.push(habitacion);

    // Filtrar las habitaciones del hotel para eliminar la habitación reservada
    hotel.habitaciones = hotel.habitaciones.filter(function (elemento) {
      return elemento.numero != habitacion.numero;
    });
  }

  // Actualizar el almacenamiento local con las habitaciones del hotel y las reservadas
  localStorage.setItem("habitacionesHotel", JSON.stringify(hotel.habitaciones));
  localStorage.setItem("habitacionesReservadas", JSON.stringify(hotel.habitacionesReservadas));

  // Actualizar la vista con la lista de habitaciones disponibles
  document.getElementById("habitacionesDisponibles").innerHTML =
    hotel.habitaciones.length == 0
      ? "<div class='container bg-primary py-2 text-light'>No hay habitaciones disponibles</div>"
      : hotel.habitaciones.map(
          (habitacion) =>
            `<div class='container form-control'> 
        <label>Número:</label> 
        <input type='text' class='form-control' value='${habitacion.numero}' id='numeroReserva' readonly> \n
        <label>Precio de Reserva:</label>
        <input type='text' class='form-control' value='${habitacion.reserva.precio}' id='precioR' readonly>
        <div class="d-flex justify-content-end">
          <button class="btn btn-primary" id="reservarHabitacion">Reservar Habitación</button>
        </div> 
      </div>`);
  
  // Agregar un evento de click a los botones "Reservar Habitación"
  if (document.getElementById(`reservarHabitacion`) != null) {
    document
      .getElementById(`reservarHabitacion`)
      .addEventListener("click", reservarHabitacionF);
  }

  // Actualizar la lista de habitaciones reservadas
  document.getElementById(
    "habitacionesReservadas"
  ).innerHTML = `<h1 class="text-light bg-primary">Habitaciones Reservadas</h1>
            ${
              hotel.habitacionesReservadas.length == 0
                ? "<div class='container bg-primary py-2 text-light'>No hay habitaciones disponibles</div>"
                : hotel.habitacionesReservadas.map(
                    (habitacion) =>
                      `<div class='container form-control'>  
                <label>Número:</label> 
                <input type='text' class='form-control' value='${habitacion.numero}' id='numeroReserva' readonly> \n
                <label>Precio de Reserva:</label>
                <input type='text' class='form-control' value='${habitacion.reserva.precio}' id='precioR' readonly>
                </div>`
                  )
            }
              
              <div class='container form-control'>
              <label>Precio Total Reservas:</label>
              <input type='text' id='precioReservas' class='form-control' value='${hotel.precioHabitacionesReservadas()}' readonly>       
              </div>
              `;
}

// Función para mostrar la lista de habitaciones disponibles
function mostrarHabitaciones(e) {
  e.preventDefault();
  // Verificar si la lista de habitaciones está oculta y si el hotel tiene habitaciones
  if (
    document.getElementById("habitacionesDisponibles").style.display ==
      "none" &&
    hotel.habitaciones.length > 0
  ) {
    // Mostrar la lista de habitaciones y actualizar la visibilidad de los botones correspondientes
    document.getElementById("habitacionesDisponibles").style.display = "block";
    document.getElementById("mostrarHabitaciones").style.display = "none";
    document.getElementById("ocultarHabitaciones").style.display = "block";
  } else {
    alert("El hotel no contiene habitaciones.");
  }
}

// Función para ocultar la lista de habitaciones disponibles
function ocultarHabitaciones(e) {
  e.preventDefault();
  // Verificar si la lista de habitaciones está visible y ocultarla
  if (
    document.getElementById("habitacionesDisponibles").style.display == "block"
  ) {
    document.getElementById("habitacionesDisponibles").style.display = "none";
    document.getElementById("mostrarHabitaciones").style.display = "block";
    document.getElementById("ocultarHabitaciones").style.display = "none";
  }
}

// Función para mostrar la lista de habitaciones reservadas
function mostrarReservasF(e) {
  e.preventDefault();
  // Mostrar la lista de habitaciones reservadas
  document.getElementById("habitacionesReservadas").style.display = "block";
  document.getElementById("mostrarReservas").style.display = "none";
  document.getElementById("ocultarReservas").style.display = "block";
}

// Función para ocultar la lista de habitaciones reservadas
function ocultarReservasF(e) {
  e.preventDefault();
  // Ocultar la lista de habitaciones reservadas
  if (
    document.getElementById("habitacionesReservadas").style.display == "block"
  ) {
    document.getElementById("habitacionesReservadas").style.display = "none";
    document.getElementById("mostrarReservas").style.display = "block";
    document.getElementById("ocultarReservas").style.display = "none";
  }
}

// Función de inicialización
function init() {
  // Agregar eventos a los elementos HTML con IDs específicos
  document
    .getElementById("mostrarHabitaciones")
    .addEventListener("click", mostrarHabitaciones);
  document
    .getElementById("ocultarHabitaciones")
    .addEventListener("click", ocultarHabitaciones);

  document
    .getElementById("agregarHabitacion")
    .addEventListener("click", agregarHabitacion);

  document
    .getElementById("mostrarReservas")
    .addEventListener("click", mostrarReservasF);
  document
    .getElementById("ocultarReservas")
    .addEventListener("click", ocultarReservasF);
}

// Agregar un evento para iniciar la función de inicialización cuando el documento se ha cargado
document.addEventListener("DOMContentLoaded", init);
